'use client';

import Link from 'next/link';
import {
  Home,
  BookOpen,
  HelpCircle,
  BarChart3,
  ArrowRight,
  Star,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { getProgress, calculateStudyStreak } from '@/lib/progress';

type Student = {
  name: string;
  className: string;
};

type Activity = {
  lessonId: number;
  action: string;
  time: string;
};

type ProgressData = {
  completedLessons: number[];
  lastLesson: number | null;
  studyDates: string[];
  activities: Activity[];
};

export default function Landing() {
  // ================================
  // THÔNG TIN HỌC SINH
  // ================================
  const [student, setStudent] = useState<Student | null>(null);

  // ================================
  // TIẾN ĐỘ HỌC TẬP
  // ================================
  const [progress, setProgress] = useState<ProgressData>({
    completedLessons: [],
    lastLesson: null,
    studyDates: [],
    activities: [],
  });

  // ================================
  // ĐỌC DỮ LIỆU KHI TRANG ĐƯỢC MỞ
  // ================================
  useEffect(() => {
    // Lấy thông tin học sinh
    const data = localStorage.getItem('student');

    if (data) {
      try {
        const parsedStudent = JSON.parse(data);

        setStudent({
          name: parsedStudent.name || '',
          className: parsedStudent.className || '',
        });
      } catch (error) {
        console.error('Không đọc được dữ liệu student:', error);
        setStudent(null);
      }
    } else {
      // Không có student = chưa đăng nhập
      setStudent(null);
    }

    // Lấy tiến độ
    try {
      const savedProgress = getProgress();

      setProgress({
        completedLessons: savedProgress.completedLessons || [],
        lastLesson: savedProgress.lastLesson || null,
        studyDates: savedProgress.studyDates || [],
        activities: savedProgress.activities || [],
      });
    } catch (error) {
      console.error('Không đọc được tiến độ học tập:', error);
    }
  }, []);

  // ================================
  // TỔNG SỐ BÀI
  // ================================
  const totalLessons = 9;

  // ================================
  // SỐ BÀI ĐÃ HOÀN THÀNH
  // ================================
  const completedCount = progress.completedLessons.length;

  // ================================
  // PHẦN TRĂM TIẾN ĐỘ
  // ================================
  const progressPercent = Math.round(
    (completedCount / totalLessons) * 100
  );

  // ================================
  // CHUỖI HỌC
  // ================================
  const studyStreak = calculateStudyStreak(
    progress.studyDates || []
  );

  // ================================
  // BÀI HỌC TIẾP THEO
  // ================================
  let nextLesson = '';

  if (completedCount >= totalLessons) {
    nextLesson = 'Đã hoàn thành';
  } else {
    nextLesson = `Bài ${9 + completedCount}`;
  }

  // ================================
  // LỜI CHÀO TRÊN BANNER
  // ================================
  let welcomeTitle = '';
  let welcomeMessage = '';

  /*
   * QUAN TRỌNG:
   *
   * KIỂM TRA student TRƯỚC completedCount.
   *
   * Nếu chưa đăng nhập thì dù localStorage có
   * tiến độ cũ như thế nào cũng KHÔNG được hiện
   * "Rất tốt".
   */
  if (!student) {
    welcomeTitle = 'Xin chào! 👋';

    welcomeMessage =
      'Hãy bắt đầu hành trình khám phá Khoa học tự nhiên cùng NyNy nhé!';
  } else if (completedCount === 0) {
    welcomeTitle = `Xin chào, ${student.name || 'em'}! 👋`;

    welcomeMessage =
      'Hôm nay chúng ta sẽ bắt đầu với Bài 9 - Sự đa dạng của chất.';
  } else if (completedCount < totalLessons) {
    welcomeTitle = `Rất tốt, ${student.name || 'em'}! 🌟`;

    welcomeMessage = `Em đã hoàn thành ${completedCount}/${totalLessons} bài học. Hãy tiếp tục ${nextLesson} nhé!`;
  } else {
    welcomeTitle = `Chúc mừng ${student.name || 'em'}! 🎉`;

    welcomeMessage =
      'Em đã hoàn thành toàn bộ chủ đề Chất và sự biến đổi của chất.';
  }

  return (
    <div className="min-h-screen bg-[#F5FAFF] text-slate-900">
      <div className="grid grid-cols-[240px_1fr] min-h-screen">

        {/* ======================================
            SIDEBAR
        ====================================== */}
        <aside className="bg-white border-r p-6 hidden lg:flex flex-col justify-between">
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-10">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚛️</span>
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-blue-600">
                  KHTN 6
                </h1>

                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  Khám phá khoa học
                </p>
              </div>
            </div>

            {/* MENU */}
            <nav className="space-y-3">

              {[
                {
                  icon: Home,
                  label: 'Trang chủ',
                  href: '/',
                },
                {
                  icon: BookOpen,
                  label: 'Bài học',
                  href: '/course/1',
                },
                {
                  icon: BarChart3,
                  label: 'Tiến độ',
                  href: '/dashboard',
                },
                {
                  icon: HelpCircle,
                  label: 'Quiz',
                  href: '/quiz/1',
                },
              ].map((item, i) => {

                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold cursor-pointer ${
                        i === 0
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-slate-700 hover:bg-blue-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />

                      {item.label}
                    </div>
                  </Link>
                );
              })}

            </nav>
          </div>

          {/* FOOTER SIDEBAR */}
          <div className="rounded-3xl bg-green-50 p-5 text-sm">

            <p className="font-bold">
              Khoa học ở mọi nơi quanh ta! 🌱
            </p>

            <p className="mt-2 text-slate-600">
              Cùng NyNy khám phá nhé!
            </p>

          </div>
        </aside>

        {/* ======================================
            MAIN
        ====================================== */}
        <main className="p-6 lg:p-8">

          {/* HEADER */}
          <header className="flex justify-end items-center mb-6">

            <div className="flex gap-3">

              <Link href="/teacher/login">
                <Button
                  variant="outline"
                  className="rounded-full"
                >
                  Giáo viên
                </Button>
              </Link>

              <Button
  className="rounded-full px-6"
  onClick={() => {
    const student = localStorage.getItem("student");

    if (student) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/setup";
    }
  }}
>
  Bắt đầu
</Button>
            </div>
          </header>

          <div className="grid xl:grid-cols-[1fr_300px] gap-6">

            {/* ======================================
                LEFT CONTENT
            ====================================== */}
            <section className="space-y-6">

              {/* ================================
                  BANNER CHÀO MỪNG
              ================================= */}
              <div className="rounded-3xl bg-gradient-to-r from-blue-300 to-sky-100 p-10 text-center shadow-sm relative overflow-hidden">

                <div className="absolute left-10 top-8 text-5xl">
                  🧪
                </div>

                <div className="absolute right-14 top-8 text-5xl">
                  🪐
                </div>

                <h2 className="text-4xl font-extrabold">
                  {welcomeTitle}
                </h2>

                <p className="mt-4 text-xl max-w-2xl mx-auto">
                  {welcomeMessage}
                </p>

              </div>

              {/* ======================================
                  THỐNG KÊ
              ====================================== */}
              <div className="grid md:grid-cols-4 gap-4">

                <Stat
                  icon={<BookOpen />}
                  value="9"
                  label="Bài học"
                  color="bg-blue-100 text-blue-600"
                />

                <Stat
                  icon={<CheckCircle2 />}
                  value={student ? `${progressPercent}%` : '0%'}
                  label="Tiến độ"
                  color="bg-green-100 text-green-600"
                />

                <Stat
                  icon={<Star />}
                  value="100"
                  label="Điểm cao nhất"
                  color="bg-purple-100 text-purple-600"
                />

                <Stat
                  icon={<Flame />}
                  value={student ? `${studyStreak}` : '0'}
                  label="Chuỗi ngày học"
                  color="bg-orange-100 text-orange-600"
                />

              </div>

              {/* ======================================
                  BÀI HỌC
              ====================================== */}
              <Card className="rounded-3xl shadow-sm border-0">

                <CardContent className="p-6">

                  <div className="flex justify-between items-center mb-6">

                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <BookOpen className="text-blue-500" />

                      Bài học của em
                    </h3>

                    <button
  onClick={() => {
    const student = localStorage.getItem("student");

    if (student) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/setup";
    }
  }}
  className="text-blue-600 font-semibold flex gap-1"
>
  Bắt đầu học
  <ArrowRight />
</button>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4">

                   <Lesson
  number="9"
  title="Sự đa dạng của chất"
  image="/lessons/bai9.png"
  completed={progress.completedLessons.includes(1)}
/>

<Lesson
  number="10"
  title="Các thể của chất"
  image="/lessons/bai10.png"
  completed={progress.completedLessons.includes(2)}
/>

<Lesson
  number="11"
  title="Oxygen và không khí"
  image="/lessons/bai11.png"
  completed={progress.completedLessons.includes(3)}
/>

<Lesson
  number="12"
  title="Một số vật liệu"
  image="/lessons/bai12.png"
  completed={progress.completedLessons.includes(4)}
/>

                  </div>

                </CardContent>
              </Card>

            </section>

            {/* ======================================
                RIGHT SIDEBAR
            ====================================== */}
            <aside className="space-y-6">

              {/* NYNY */}
              <div className="bg-white rounded-3xl p-5 shadow-sm text-center">

                <div className="bg-blue-50 rounded-3xl p-4 mb-4">

                  <p className="font-bold text-left">
                    Xin chào! 👋
                  </p>

                  <p className="text-sm text-left mt-2">
                    Mình là NyNy – trợ lý học tập của bạn.
                  </p>

                </div>

                <img
                  src="/mascot/nyny.png"
                  alt="NyNy"
                  className="w-full h-64 object-contain mx-auto"
                />

                <Link href="/setup">

                  <button className="w-full mt-4 bg-blue-500 text-white rounded-2xl py-3 font-bold">
                    Học cùng NyNy 💬
                  </button>

                </Link>

              </div>

              {/* ======================================
                  TÓM TẮT TIẾN ĐỘ
              ====================================== */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">

                <h3 className="text-xl font-bold mb-5">
                  📊 Tóm tắt tiến độ
                </h3>

                <div className="space-y-5">

                  {/* HỌC SINH */}
                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      👤 Học sinh
                    </span>

                    <span className="font-semibold">
                      {student?.name || '--'}
                    </span>

                  </div>

                  {/* LỚP */}
                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      🏫 Lớp
                    </span>

                    <span className="font-semibold">
                      {student?.className || '--'}
                    </span>

                  </div>

                  {/* TIẾN ĐỘ */}
                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-slate-500">
                        📚 Tiến độ học
                      </span>

                      <span className="font-semibold">
                        {student ? `${progressPercent}%` : '0%'}
                      </span>

                    </div>

                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{
                          width: student
                            ? `${progressPercent}%`
                            : '0%',
                        }}
                      />

                    </div>

                  </div>

                  {/* ĐÃ HOÀN THÀNH */}
                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      📝 Đã hoàn thành
                    </span>

                    <span className="font-semibold">
                      {student
                        ? `${completedCount} / ${totalLessons} bài`
                        : `0 / ${totalLessons} bài`}
                    </span>

                  </div>

                  {/* CHUỖI */}
                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      🔥 Chuỗi học
                    </span>

                    <span className="font-semibold">
                      {student ? `${studyStreak} ngày` : '0 ngày'}
                    </span>

                  </div>

                  {/* BÀI TIẾP THEO */}
                  <div className="pt-3 border-t">

                    <p className="text-sm text-slate-500">
                      🎯 Bài học tiếp theo
                    </p>

                    <p className="font-bold text-blue-600 mt-1">
                      {student
                        ? nextLesson
                        : 'Đăng nhập để bắt đầu'}
                    </p>

                  </div>

                </div>
              </div>

            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ============================================
   COMPONENT STAT
============================================ */
function Stat({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm flex items-center gap-4">

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <div>

        <p className="text-2xl font-extrabold">
          {value}
        </p>

        <p className="text-sm font-medium">
          {label}
        </p>

      </div>

    </div>
  );
}

/* ============================================
   COMPONENT LESSON
============================================ */
function Lesson({
  number,
  title,
  image,
  completed = false,
}: {
  number: string;
  title: string;
  image: string;
  completed?: boolean;
}) {
  return (
    <div className="rounded-3xl border bg-white p-4 min-h-[260px] shadow-sm relative overflow-hidden">

      {/* Số bài */}
      <span className="absolute top-4 left-4 bg-blue-500 text-white rounded-xl px-3 py-1 font-bold">
        {number}
      </span>

      {/* Hình ảnh */}
      <div className="h-32 flex items-center justify-center mt-4 mb-3 rounded-2xl bg-blue-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Tên bài */}
      <h4 className="font-bold text-center mt-4">
        {title}
      </h4>

      {/* Phần trăm */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm">
          {completed ? '100%' : '0%'}
        </p>

        {completed && (
          <span className="text-xs font-semibold text-green-600">
            ✓ Đã hoàn thành
          </span>
        )}
      </div>

      {/* Thanh tiến độ */}
      <div className="h-2 bg-slate-100 rounded-full mt-1 overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            completed ? 'w-full bg-green-500' : 'w-0'
          }`}
        />
      </div>

    </div>
  );
}