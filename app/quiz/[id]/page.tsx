'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const quizzes: Record<number, { questions: any[] }> = {
  1: {
    questions: [
      {
        id: 1,
        question: 'Which of the following is a physical property?',
        options: ['Color', 'How easily it burns', 'Ability to react with acid', 'Flammability'],
        correct: 0,
        explanation: 'Color is a physical property that can be observed without changing the substance. The other options are chemical properties.',
      },
      {
        id: 2,
        question: 'What is density?',
        options: [
          'The amount of matter in a specific volume',
          'The weight of an object',
          'The size of an object',
          'The color of an object',
        ],
        correct: 0,
        explanation: 'Density is defined as mass per unit volume - how tightly packed the matter is in a substance.',
      },
      {
        id: 3,
        question: 'Which material is most soluble in water?',
        options: ['Sand', 'Sugar', 'Oil', 'Plastic'],
        correct: 1,
        explanation: 'Sugar dissolves readily in water due to its polar molecular structure, making it highly soluble.',
      },
      {
        id: 4,
        question: 'What state of matter has a definite shape and volume?',
        options: ['Gas', 'Liquid', 'Solid', 'Plasma'],
        correct: 2,
        explanation: 'Solids have a definite shape and volume. Liquids have definite volume but take the shape of their container. Gases have neither.',
      },
      {
        id: 5,
        question: 'Which is NOT a physical property?',
        options: ['Melting point', 'Boiling point', 'Ability to rust', 'Density'],
        correct: 2,
        explanation: 'Ability to rust is a chemical property. The others are physical properties that can be observed or measured.',
      },
    ],
  },
};

export default function QuizPage({ params }: { params: { id: string } }) {
  const quizId = parseInt(params.id);
  const quiz = quizzes[quizId as keyof typeof quizzes] || quizzes[1];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const question = quiz.questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== null;
  const isCorrect = answers[currentQuestion] === question.correct;

  const handleAnswer = (optionIndex: number) => {
    if (!showResults) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = optionIndex;
      setAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const correctCount = answers.filter(
    (answer, idx) => answer === quiz.questions[idx].correct
  ).length;

  const percentage = Math.round((correctCount / quiz.questions.length) * 100);
  const passed = percentage >= 70;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-white border-b border-border sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/lesson/1">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-foreground">Quiz Results</h1>
            </div>
          </div>
        </header>

        {/* Results */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  passed ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <span className={`text-4xl font-bold ${passed ? 'text-green-600' : 'text-blue-600'}`}>
                    {percentage}%
                  </span>
                </div>

                <h2 className={`text-3xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-blue-600'}`}>
                  {passed ? '🎉 Congratulations!' : 'Good Effort!'}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  You answered {correctCount} out of {quiz.questions.length} questions correctly
                </p>

                <Badge className={passed ? 'bg-green-100 text-green-700 mb-8' : 'bg-blue-100 text-blue-700 mb-8'}>
                  {passed ? 'PASSED' : 'REVIEW RECOMMENDED'}
                </Badge>

                <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
                  <h3 className="text-lg font-bold text-foreground">Review Your Answers:</h3>
                  {quiz.questions.map((q, idx) => (
                    <div key={idx} className="border border-border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-2">
                        {answers[idx] === q.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{q.question}</p>
                          <p className="text-sm text-foreground mt-2">
                            Your answer: <span className="font-medium">{q.options[answers[idx]!]}</span>
                          </p>
                          {answers[idx] !== q.correct && (
                            <p className="text-sm text-green-600 mt-1">
                              Correct answer: <span className="font-medium">{q.options[q.correct]}</span>
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground mt-2 italic">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers(Array(quiz.questions.length).fill(null));
                      setShowResults(false);
                    }}
                    className="gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Quiz
                  </Button>
                  <Link href="/dashboard">
                    <Button variant="outline">Back to Dashboard</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/lesson/1">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Quiz</h1>
          </div>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="w-full bg-muted h-2 rounded-full">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-12 pb-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">{question.question}</h2>

              <div className="space-y-3">
                {question.options.map((option: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      answers[currentQuestion] === idx
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-border hover:border-primary'
                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          answers[currentQuestion] === idx
                            ? isCorrect
                              ? 'border-green-500 bg-green-500'
                              : 'border-red-500 bg-red-500'
                            : 'border-border'
                        }`}
                      >
                        {answers[currentQuestion] === idx && (
                          <span className="text-white text-sm font-bold">
                            {isCorrect ? '✓' : '✗'}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {isAnswered && (
                <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-blue-50'}`}>
                  <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-blue-700'}`}>
                    {isCorrect ? '✓ Correct!' : 'Explanation:'}
                  </p>
                  <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-blue-600'}`}>
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className={isAnswered ? '' : 'opacity-50 cursor-not-allowed'}
              >
                {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
