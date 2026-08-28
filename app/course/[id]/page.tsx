'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Lock, ChevronRight, Home, BookOpen } from 'lucide-react';
import { getProgress, isLessonUnlocked } from '@/lib/progress';

export default function CourseOverview() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    const progress = getProgress();
    setCompletedLessons(progress.completedLessons);
  }, []);

  const lessons = [
    {
      id: 1,
      title: 'Bài 9. Sự đa dạng của chất',
      description: 'Tìm hiểu các chất khác nhau trong tự nhiên và đời sống',
      duration: '15 phút',
      difficulty: 'Cơ bản',
      image: '/lessons/bai9.png',
    },
    {
      id: 2,
      title: 'Bài 10. Các thể của chất và sự chuyển thể',
      description: 'Tìm hiểu chất rắn, chất lỏng, chất khí và sự chuyển thể',
      duration: '20 phút',
      difficulty: 'Cơ bản',
      image: '/lessons/bai10.png',
    },
    {
      id: 3,
      title: 'Bài 11. Oxygen. Không khí',
      description: 'Tìm hiểu oxygen, thành phần và vai trò của không khí',
      duration: '20 phút',
      difficulty: 'Trung bình',
      image: '/lessons/bai11.png',
    },
    {
      id: 4,
      title: 'Bài 12. Một số vật liệu',
      description: 'Nhận biết và ứng dụng các vật liệu thông dụng',
      duration: '18 phút',
      difficulty: 'Cơ bản',
      image: '/lessons/bai12.png',
    },
    {
      id: 5,
      title: 'Bài 13. Một số nhiên liệu',
      description: 'Tìm hiểu các loại nhiên liệu và vai trò trong đời sống',
      duration: '18 phút',
      difficulty: 'Cơ bản',
      emoji: '⛽',
    },
    {
      id: 6,
      title: 'Bài 14. Một số lương thực - thực phẩm',
      description: 'Tìm hiểu vai trò của lương thực và thực phẩm đối với con người',
      duration: '20 phút',
      difficulty: 'Cơ bản',
      emoji: '🍚',
    },
    {
      id: 7,
      title: 'Bài 15. Một số lương thực - thực phẩm',
      description: 'Tìm hiểu vai trò của lương thực và thực phẩm đối với con người',
      duration: '20 phút',
      difficulty: 'Cơ bản',
      emoji: '🥦',
    },
    {
      id: 8,
      title: 'Bài 16. Hỗn hợp các chất',
      description: 'Tìm hiểu hỗn hợp, dung dịch và cách nhận biết một số hỗn hợp',
      duration: '20 phút',
      difficulty: 'Trung bình',
      emoji: '🧪',
    },
    {
      id: 9,
      title: 'Bài 17. Tách chất khỏi hỗn hợp',
      description: 'Tìm hiểu một số phương pháp tách chất đơn giản trong đời sống',
      duration: '20 phút',
      difficulty: 'Trung bình',
      emoji: '⚗️',
    },
  ];

  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const nextLesson = lessons.find((lesson) =>
    isLessonUnlocked(lesson.id, completedLessons) &&
    !completedLessons.includes(lesson.id)
  );

  return (
    <div className="min-h-screen bg-[#F5FAFF]">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <Home className="w-4 h-4" />
                Trang chủ
              </Button>
            </Link>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Chất và sự biến đổi của chất
              </h1>
              <p className="text-sm text-slate-500">
                Hành trình học KHTN 6 cùng NyNy
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8 rounded-3xl border-0 bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg">
              <CardContent className="py-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">
                    🚀 Hành trình khám phá khoa học
                  </h2>
                  <p className="mt-2 opacity-90">
                    Hoàn thành từng bài học để mở khóa bài tiếp theo cùng NyNy.
                  </p>
                </div>

                <img
                  src="/mascot/nyny.png"
                  alt="NyNy"
                  className="w-28 h-28 object-contain hidden md:block"
                />
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Danh sách bài học
            </h2>

            <div className="space-y-5">
              {lessons.map((lesson) => {
                const completed = completedLessons.includes(lesson.id);
                const unlocked = isLessonUnlocked(lesson.id, completedLessons);

                return (
                  <Card
                    key={lesson.id}
                    className={`rounded-3xl border-0 shadow-sm transition-all duration-300 ${
                      completed
                        ? 'bg-white hover:shadow-xl hover:-translate-y-1'
                        : unlocked
                        ? 'bg-white hover:shadow-xl hover:-translate-y-1'
                        : 'bg-white/60 opacity-70'
                    }`}
                  >
                    <Link href={unlocked ? `/lesson/${lesson.id}` : '#'}>
                      <CardContent className="p-5">
                        <div className="flex gap-5 items-center">
                          <div className="w-32 h-24 rounded-2xl overflow-hidden bg-blue-50 flex items-center justify-center shrink-0">
                            {lesson.image ? (
                              <img
                                src={lesson.image}
                                alt={lesson.title}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <span className="text-5xl">{lesson.emoji}</span>
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-bold text-slate-900">
                                {lesson.title}
                              </h3>

                              {completed && (
                                <Badge className="bg-green-100 text-green-700">
                                  ✅ Hoàn thành
                                </Badge>
                              )}

                              {!unlocked && (
                                <Badge variant="outline">
                                  🔒 Đang khóa
                                </Badge>
                              )}

                              {unlocked && !completed && (
                                <Badge className="bg-blue-100 text-blue-700">
                                  🔓 Đã mở khóa
                                </Badge>
                              )}
                            </div>

                            <p className="text-slate-500 mt-2">
                              {lesson.description}
                            </p>

                            <div className="flex items-center gap-3 mt-4">
                              <Badge variant="outline">
                                {lesson.difficulty}
                              </Badge>

                              <span className="text-sm text-slate-500">
                                ⏱ {lesson.duration}
                              </span>
                            </div>

                            <div className="mt-4">
                              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                                <div
                                  className={`h-full ${
                                    completed
                                      ? 'bg-green-500 w-full'
                                      : unlocked
                                      ? 'bg-blue-500 w-1/3'
                                      : 'bg-slate-300 w-0'
                                  }`}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0">
                            {completed ? (
                              <CheckCircle2 className="w-7 h-7 text-green-500" />
                            ) : unlocked ? (
                              <ChevronRight className="w-7 h-7 text-blue-500" />
                            ) : (
                              <Lock className="w-7 h-7 text-slate-400" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-50 rounded-3xl p-4 mb-4 text-left">
                  <p className="font-bold">Xin chào! 👋</p>
                  <p className="text-sm text-slate-600 mt-2">
                    Mình là NyNy. Hãy học từng bài để mở khóa bài tiếp theo nhé!
                  </p>
                </div>

                <img
                  src="/mascot/nyny.png"
                  alt="NyNy"
                  className="w-full h-52 object-contain"
                />

                {nextLesson ? (
                  <Link href={`/lesson/${nextLesson.id}`}>
                    <Button className="w-full mt-4 rounded-2xl">
                      Tiếp tục: {nextLesson.title}
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full mt-4 rounded-2xl">
                    Đã hoàn thành chủ đề 🎉
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>📊 Tiến độ học tập</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-500">Hoàn thành</span>
                      <span className="text-sm font-bold text-blue-600">
                        {progressPercent}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-2xl bg-green-50 p-4">
                      <p className="text-2xl font-bold text-green-600">
                        {completedCount}
                      </p>
                      <p className="text-xs text-slate-500">Đã hoàn thành</p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <p className="text-2xl font-bold text-blue-600">
                        {totalLessons - completedCount}
                      </p>
                      <p className="text-xs text-slate-500">Còn lại</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>✨ Điểm nổi bật</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>✓ Bài giảng tương tác</li>
                  <li>✓ Trợ lý AI hỗ trợ học tập</li>
                  <li>✓ Bài kiểm tra luyện tập</li>
                  <li>✓ Theo dõi tiến độ</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}