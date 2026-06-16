'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Send, MessageCircle, BookOpen, ChevronRight } from 'lucide-react';

const lessonContent: Record<number, {
title: string;
content: JSX.Element;
objectives: string[];
}> = {
1: {
title: 'Bài 9. Sự đa dạng của chất',
content: ( <div className="space-y-6"> <p>Chất có ở khắp mọi nơi xung quanh chúng ta.</p> <p>Mỗi chất có những tính chất riêng giúp chúng ta nhận biết và phân biệt chúng.</p> </div>
),
objectives: [
'Nhận biết được sự đa dạng của chất',
'Nêu được một số tính chất của chất',
'Lấy được ví dụ về các chất trong đời sống'
],
},

2: {
title: 'Bài 10. Các thể của chất và sự chuyển thể',
content: ( <div className="space-y-6"> <p>Chất tồn tại ở ba thể cơ bản: rắn, lỏng và khí.</p> <p>Chất có thể chuyển từ thể này sang thể khác.</p> </div>
),
objectives: [
'Phân biệt các thể của chất',
'Mô tả được sự nóng chảy và đông đặc',
'Mô tả được sự bay hơi và ngưng tụ'
],
},

3: {
title: 'Bài 11. Oxygen và Không khí',
content: ( <div className="space-y-6"> <p>Oxygen là chất khí cần thiết cho sự hô hấp và sự cháy.</p> <p>Không khí là hỗn hợp nhiều chất khí khác nhau.</p> </div>
),
objectives: [
'Nêu được tính chất của oxygen',
'Trình bày vai trò của oxygen',
'Nêu được thành phần chính của không khí'
],
},

4: {
title: 'Bài 12. Một số vật liệu',
content: ( <div className="space-y-6"> <p>Vật liệu được sử dụng để chế tạo đồ dùng và công trình.</p> </div>
),
objectives: [
'Nhận biết một số vật liệu phổ biến',
'Nêu được ứng dụng của vật liệu'
],
},

5: {
title: 'Bài 13. Một số nhiên liệu',
content: ( <div className="space-y-6"> <p>Nhiên liệu cung cấp năng lượng cho đời sống và sản xuất.</p> </div>
),
objectives: [
'Kể tên một số nhiên liệu',
'Nêu được vai trò của nhiên liệu'
],
},

6: {
title: 'Bài 14. Một số lương thực - thực phẩm',
content: ( <div className="space-y-6"> <p>Lương thực và thực phẩm cung cấp chất dinh dưỡng cho cơ thể.</p> </div>
),
objectives: [
'Phân biệt lương thực và thực phẩm',
'Nêu được vai trò của dinh dưỡng'
],
},
};


export default function LessonPage({ params }: { params: { id: string } }) {
  const lessonId = parseInt(params.id);
  const lesson = lessonContent[lessonId as keyof typeof lessonContent] || lessonContent[1];
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Great question! Physical properties are characteristics of matter that can be observed or measured without changing the substance.',
        'Density is how tightly packed matter is. It\'s calculated by dividing mass by volume.',
        'Solubility refers to how well a substance dissolves in another substance, like sugar dissolving in water.',
        'The main states of matter are solid, liquid, and gas. Each has different properties.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/course/1">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">{lesson.title}</h1>
              <p className="text-xs text-muted-foreground">Lesson {lessonId}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lesson Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lesson Body */}
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8">
                {lesson.content}
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {lesson.objectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">{obj}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex gap-4 justify-between">
              <Link href="/course/1">
                <Button variant="outline">Previous Lesson</Button>
              </Link>
              <Link href={`/quiz/${lessonId}`}>
                <Button className="gap-2">
                  Next: Take Quiz <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* AI Chatbot Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-screen lg:h-[600px] flex flex-col fixed bottom-0 right-4 w-96 lg:relative lg:bottom-auto lg:right-auto lg:w-full shadow-lg">
              <CardHeader className="border-b border-border">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  AI Tutor
                </CardTitle>
              </CardHeader>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-8">
                      <MessageCircle className="w-12 h-12 text-muted opacity-30 mx-auto mb-3" />
                      <p className="text-muted-foreground text-sm">Ask me anything about this lesson!</p>
                      <div className="mt-4 space-y-2 text-xs">
                        <p className="text-muted-foreground">Example questions:</p>
                        <p className="text-primary hover:underline cursor-pointer">• What are physical properties?</p>
                        <p className="text-primary hover:underline cursor-pointer">• How is density measured?</p>
                        <p className="text-primary hover:underline cursor-pointer">• Give me real-world examples</p>
                      </div>
                    </div>
                  )}
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted text-foreground rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="border-t border-border p-4 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 text-sm"
                  />
                  <Button type="submit" size="icon" className="flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
