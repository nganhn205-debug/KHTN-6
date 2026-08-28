'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Home, ChevronLeft, ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { markLessonCompleted } from '@/lib/progress';
import { quizzes } from '@/data/quizzes';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import confetti from 'canvas-confetti';

export default function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const lessonId = parseInt(id);

  const quiz = quizzes[lessonId] || quizzes[1];
  const questions = quiz.questions;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedAnswer = answers[current];
  const progressPercent = Math.round(((current + 1) / questions.length) * 100);

  const score = questions.reduce((total, q, index) => {
    return answers[index] === q.correct ? total + 1 : total;
  }, 0);

  const scorePercent = Math.round((score / questions.length) * 100);
  const passed = scorePercent >= 70;

  const handleSubmit = async () => {
    setSubmitted(true);

    const student = JSON.parse(localStorage.getItem('student') || '{}');

    if (student.id) {
      await updateDoc(doc(db, 'students', student.id), {
        [`quizScores.lesson${lessonId}`]: {
          lessonId,
          title: quiz.title,
          score,
          total: questions.length,
          percent: scorePercent,
          passed,
          submittedAt: new Date().toLocaleString('vi-VN'),
        },
        updatedAt: serverTimestamp(),
      });
    }

    if (passed) {
      await markLessonCompleted(lessonId);

      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              {passed ? '🎉 Chúc mừng!' : 'Cần cố gắng thêm'}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-center">
            {passed && (
              <img
                src="/mascot/nyny.png"
                alt="NyNy"
                className="w-40 h-40 object-contain mx-auto animate-bounce"
              />
            )}

            <p className="text-lg">
              Em đạt <strong>{score}/{questions.length}</strong> câu đúng.
            </p>

            <p className="text-4xl font-bold text-primary">{scorePercent}%</p>

            <p className="text-muted-foreground">
              {passed
                ? 'Em đã hoàn thành bài học này. Bài tiếp theo đã được mở khóa.'
                : 'Em cần đạt từ 70% trở lên để hoàn thành bài học. Hãy xem lại bài và làm lại nhé.'}
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/course/1">
                <Button variant="outline">Quay lại danh sách bài học</Button>
              </Link>

              {passed ? (
                <Button onClick={() => router.push(`/lesson/${lessonId + 1}`)}>
                  Bài tiếp theo
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleRetry}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Làm lại
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/lesson/${lessonId}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Quay lại bài học
            </Button>
          </Link>

          <div className="text-right">
            <h1 className="font-bold">{quiz.title}</h1>
            <p className="text-sm text-muted-foreground">
              Câu {current + 1}/{questions.length}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-6">
          <Progress value={progressPercent} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              Câu {current + 1}. {q.question}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {q.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    [current]: index,
                  }))
                }
                className={`w-full text-left p-4 rounded-lg border transition ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-white hover:bg-muted'
                }`}
              >
                <span className="font-medium mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                disabled={current === 0}
                onClick={() => setCurrent((prev) => prev - 1)}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Câu trước
              </Button>

              {current < questions.length - 1 ? (
                <Button
                  disabled={selectedAnswer === undefined}
                  onClick={() => setCurrent((prev) => prev + 1)}
                >
                  Câu tiếp
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  disabled={Object.keys(answers).length < questions.length}
                  onClick={handleSubmit}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Nộp bài
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}