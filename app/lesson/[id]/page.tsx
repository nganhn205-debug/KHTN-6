
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Home,
  Send,
  MessageCircle,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Target,
  Video,
  Sparkles,
} from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Lesson = {
  title: string;
  subtitle: string;
  image: string;
  content: React.ReactNode;
  objectives: string[];
};

/* =========================================================
   NỘI DUNG CÁC BÀI HỌC
   ID 1 = Bài 9
   ID 2 = Bài 10
   ========================================================= */

const lessonContent: Record<number, Lesson> = {
  /* =======================================================
     BÀI 9
     ======================================================= */

  1: {
    title: 'Bài 9. Sự đa dạng của chất',
    subtitle: 'Tìm hiểu vật thể, chất và tính chất của chất',
    image: '/lessons/bai9.png',

    content: (
      <div className="space-y-4 text-slate-700 leading-7">
        <p>
          Chất có ở khắp mọi nơi xung quanh chúng ta. Mỗi vật thể có thể được
          tạo nên từ một hoặc nhiều chất khác nhau.
        </p>

        <p>
          Mỗi chất có những tính chất riêng như màu sắc, mùi, vị, thể, tính
          tan, khả năng cháy... giúp con người nhận biết và sử dụng chất phù
          hợp.
        </p>
      </div>
    ),

    objectives: [
      'Nhận biết được sự đa dạng của chất trong đời sống.',
      'Nêu được một số tính chất của chất.',
      'Lấy được ví dụ về vật thể và chất.',
    ],
  },

  /* =======================================================
     BÀI 10
     ======================================================= */

  2: {
    title: 'Bài 10. Các thể của chất và sự chuyển thể',
    subtitle: 'Tìm hiểu chất rắn, chất lỏng, chất khí và sự chuyển thể',
    image: '/lessons/bai10.png',

    content: (
      <div className="space-y-4 text-slate-700 leading-7">
        <p>
          Chất có thể tồn tại ở ba thể cơ bản: thể rắn, thể lỏng và thể khí.
          Mỗi thể có những đặc điểm riêng về hình dạng và thể tích.
        </p>

        <p>
          Chất rắn có hình dạng và thể tích xác định. Chất lỏng có thể tích
          xác định nhưng không có hình dạng xác định, nó nhận hình dạng của
          vật chứa.
        </p>

        <p>
          Chất khí không có hình dạng và thể tích xác định, có thể lan tỏa và
          chiếm đầy vật chứa.
        </p>

        <p>
          Khi điều kiện thay đổi, chất có thể chuyển từ thể này sang thể khác.
          Một số sự chuyển thể thường gặp là nóng chảy, đông đặc, bay hơi,
          ngưng tụ và sôi.
        </p>
      </div>
    ),

    objectives: [
      'Nêu được đặc điểm của chất ở thể rắn, thể lỏng và thể khí.',
      'Phân biệt được chất rắn, chất lỏng và chất khí.',
      'Nêu được một số sự chuyển thể của chất.',
      'Lấy được ví dụ về sự chuyển thể trong đời sống.',
    ],
  },
};

/* =========================================================
   TRANG BÀI HỌC
   ========================================================= */

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  /* =======================================================
     1. LẤY ID BÀI HỌC
     ======================================================= */

  const [lessonId, setLessonId] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    params.then((value) => {
      if (!active) return;

      const parsedId = Number.parseInt(value.id, 10);

      if (Number.isNaN(parsedId)) {
        setLessonId(1);
      } else {
        setLessonId(parsedId);
      }
    });

    return () => {
      active = false;
    };
  }, [params]);

  /* =======================================================
     2. TRẠNG THÁI NYNY AI
     ======================================================= */

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     3. TỰ CUỘN CHAT
     ======================================================= */

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /* =======================================================
     4. GỬI CÂU HỎI CHO NYNY AI
     ======================================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const question = input.trim();

    if (!question) return;

    const userMessage: Message = {
      role: 'user',
      content: question,
    };

    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!res.ok) {
        throw new Error('API chat error');
      }

      const text = await res.text();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            text ||
            'NyNy chưa trả lời được câu hỏi này. Em thử hỏi lại nhé.',
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Đã có lỗi xảy ra khi kết nối với NyNy. Em hãy thử hỏi lại nhé.',
        },
      ]);
    }
  };

  /* =======================================================
     5. ĐANG CHỜ ID
     ======================================================= */

  if (lessonId === null) {
    return (
      <div className="min-h-screen bg-[#F5FAFF] flex items-center justify-center">
        <div className="text-center">

          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />

          <p className="text-slate-600">
            Đang tải bài học...
          </p>

        </div>
      </div>
    );
  }

  /* =======================================================
     6. LẤY NỘI DUNG BÀI HỌC
     ======================================================= */

  const lesson = lessonContent[lessonId];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#F5FAFF] flex items-center justify-center px-4">

        <Card className="max-w-md w-full rounded-3xl">

          <CardHeader>
            <CardTitle className="text-center">
              Không tìm thấy bài học
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center">

            <p className="text-slate-600 mb-6">
              Bài học {lessonId} chưa được cấu hình nội dung.
            </p>

            <Link href="/course/1">
              <Button className="rounded-full">
                <Home className="w-4 h-4 mr-2" />
                Quay lại danh sách bài học
              </Button>
            </Link>

          </CardContent>

        </Card>

      </div>
    );
  }

  /* =======================================================
     7. ĐƯỜNG DẪN E-LEARNING

     ID 1 → Bài 9
     /elearning/bai9/index.html

     ID 2 → Bài 10
     /elearning/bai10/index.html
     ======================================================= */

  const elearningUrl =
    `/elearning/bai${lessonId + 8}/index.html`;

  /* =======================================================
     8. GIAO DIỆN
     ======================================================= */

  return (
    <div className="min-h-screen bg-[#F5FAFF]">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="bg-white/90 backdrop-blur border-b sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <Link href="/course/1">

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 rounded-full"
            >
              <Home className="w-4 h-4" />

              Danh sách bài học
            </Button>

          </Link>

          <Link href={`/quiz/${lessonId}`}>

            <Button className="rounded-full gap-2">

              Làm Quiz

              <ChevronRight className="w-4 h-4" />

            </Button>

          </Link>

        </div>

      </header>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* ===================================================
            HERO
            =================================================== */}

        <Card className="rounded-3xl border-0 bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg mb-8 overflow-hidden">

          <CardContent className="p-8 grid md:grid-cols-[1fr_260px] gap-6 items-center">

            <div>

              <p className="font-semibold opacity-90">
                KHTN Learn cùng NyNy
              </p>

              <h1 className="text-4xl font-extrabold mt-2">
                {lesson.title}
              </h1>

              <p className="mt-3 text-lg opacity-90">
                {lesson.subtitle}
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">

                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  🎥 E-learning
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  🤖 NyNy AI
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  📝 Quiz
                </span>

              </div>

            </div>

            <div className="bg-white/20 rounded-3xl p-4 flex justify-center">

              <img
                src={lesson.image}
                alt={lesson.title}
                className="h-44 object-contain"
              />

            </div>

          </CardContent>

        </Card>

        {/* ===================================================
            CONTENT + AI
            =================================================== */}

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* =================================================
              LEFT
              ================================================= */}

          <section className="space-y-8">

            {/* ===============================================
                MỤC TIÊU
                =============================================== */}

            <Card className="rounded-3xl border-0 shadow-sm">

              <CardHeader>

                <CardTitle className="flex items-center gap-2">

                  <Target className="w-5 h-5 text-blue-500" />

                  Mục tiêu học tập

                </CardTitle>

              </CardHeader>

              <CardContent>

                <ul className="space-y-3">

                  {lesson.objectives.map((obj, idx) => (

                    <li
                      key={idx}
                      className="flex gap-3"
                    >

                      <span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </span>

                      <span className="text-slate-700">
                        {obj}
                      </span>

                    </li>

                  ))}

                </ul>

              </CardContent>

            </Card>

            {/* ===============================================
                E-LEARNING
                =============================================== */}

            <Card className="rounded-3xl border-0 shadow-sm overflow-hidden">

              <CardHeader>

                <CardTitle className="flex items-center gap-2">

                  <Video className="w-5 h-5 text-blue-500" />

                  Video bài giảng E-learning

                </CardTitle>

              </CardHeader>

              <CardContent>

                <div className="w-full overflow-hidden rounded-3xl border bg-white">

                  <iframe
                    src={elearningUrl}
                    width="100%"
                    height="700"
                    className="w-full border-0"
                    title={`Bài giảng E-learning - ${lesson.title}`}
                    allowFullScreen
                  />

                </div>

              </CardContent>

            </Card>

            {/* ===============================================
                NỘI DUNG TRỌNG TÂM
                =============================================== */}

            <Card className="rounded-3xl border-0 shadow-sm">

              <CardHeader>

                <CardTitle className="flex items-center gap-2">

                  <BookOpen className="w-5 h-5 text-blue-500" />

                  Nội dung trọng tâm

                </CardTitle>

              </CardHeader>

              <CardContent>

                {lesson.content}

              </CardContent>

            </Card>

            {/* ===============================================
                GỢI Ý NYNY
                =============================================== */}

            <Card className="rounded-3xl border-0 bg-blue-50 shadow-sm">

              <CardContent className="p-6 flex gap-4 items-start">

                <Sparkles className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />

                <div>

                  <h3 className="font-bold text-lg">
                    Gợi ý từ NyNy
                  </h3>

                  <p className="text-slate-600 mt-1">
                    Sau khi xem bài giảng, em hãy làm Quiz để kiểm tra
                    mức độ hiểu bài. Đạt từ 70% trở lên thì bài học sẽ
                    được tính hoàn thành.
                  </p>

                </div>

              </CardContent>

            </Card>

            {/* ===============================================
                NAVIGATION
                =============================================== */}

            <div className="flex justify-between gap-4">

              <Link href="/course/1">

                <Button
                  variant="outline"
                  className="rounded-full gap-2"
                >

                  <ChevronLeft className="w-4 h-4" />

                  Quay lại

                </Button>

              </Link>

              <Link href={`/quiz/${lessonId}`}>

                <Button className="rounded-full gap-2">

                  Làm bài kiểm tra

                  <ChevronRight className="w-4 h-4" />

                </Button>

              </Link>

            </div>

          </section>

          {/* =================================================
              RIGHT - NYNY AI
              ================================================= */}

          <aside>

            <Card className="rounded-3xl border-0 shadow-lg sticky top-24 overflow-hidden">

              <CardHeader className="bg-blue-500 text-white">

                <CardTitle className="flex items-center gap-2 text-lg">

                  <MessageCircle className="w-5 h-5" />

                  NyNy AI

                </CardTitle>

                <p className="text-sm opacity-90">
                  Hỏi NyNy nếu em chưa hiểu bài nhé.
                </p>

              </CardHeader>

              {/* NYNY INTRO */}

              <div className="p-4 bg-blue-50 flex items-center gap-3">

                <img
                  src="/mascot/nyny.png"
                  alt="NyNy"
                  className="w-16 h-16 object-contain bg-white rounded-2xl"
                />

                <div className="bg-white rounded-2xl p-3 text-sm text-slate-600">

                  Xin chào! Mình là NyNy.
                  Em muốn hỏi gì về bài học này?

                </div>

              </div>

              {/* CHAT */}

              <ScrollArea
                className="h-[360px] p-4"
                ref={scrollRef}
              >

                <div className="space-y-4">

                  {/* GỢI Ý */}

                  {messages.length === 0 && (

                    <div className="text-center py-6">

                      <p className="text-sm text-slate-500">
                        Câu hỏi gợi ý:
                      </p>

                      <div className="mt-3 space-y-2 text-sm">

                        <button
                          type="button"
                          onClick={() =>
                            setInput(
                              lessonId === 2
                                ? 'Ba thể của chất là gì?'
                                : 'Chất là gì?'
                            )
                          }
                          className="block w-full bg-blue-50 text-blue-600 rounded-2xl px-3 py-2 hover:bg-blue-100 transition"
                        >
                          {lessonId === 2
                            ? 'Ba thể của chất là gì?'
                            : 'Chất là gì?'}
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setInput(
                              lessonId === 2
                                ? 'Sự chuyển thể là gì?'
                                : 'Tính chất của chất là gì?'
                            )
                          }
                          className="block w-full bg-blue-50 text-blue-600 rounded-2xl px-3 py-2 hover:bg-blue-100 transition"
                        >
                          {lessonId === 2
                            ? 'Sự chuyển thể là gì?'
                            : 'Tính chất của chất là gì?'}
                        </button>

                      </div>

                    </div>

                  )}

                  {/* TIN NHẮN */}

                  {messages.map((msg, idx) => (

                    <div
                      key={`${msg.role}-${idx}`}
                      className={`flex ${
                        msg.role === 'user'
                          ? 'justify-end'
                          : 'justify-start'
                      }`}
                    >

                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                          msg.role === 'user'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-slate-100 text-slate-700 rounded-bl-none'
                        }`}
                      >

                        {msg.content}

                      </div>

                    </div>

                  ))}

                </div>

              </ScrollArea>

              {/* INPUT */}

              <div className="border-t p-4 bg-white">

                <form
                  onSubmit={handleSubmit}
                  className="flex gap-2"
                >

                  <Input
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value)
                    }
                    placeholder="Nhập câu hỏi cho NyNy..."
                    className="flex-1 rounded-full"
                  />

                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-full"
                    disabled={!input.trim()}
                  >

                    <Send className="w-4 h-4" />

                  </Button>

                </form>

              </div>

            </Card>

          </aside>

        </div>

      </main>

    </div>
  );
}
