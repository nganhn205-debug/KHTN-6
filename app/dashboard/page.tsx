'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Clock,
  Target,
  ChevronRight,
  User,
  LogIn,
} from 'lucide-react';
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

export default function DashboardPage() {
  // =========================
  // THÔNG TIN HỌC SINH
  // =========================
  const [student, setStudent] = useState<Student | null>(null);

  // =========================
  // TIẾN ĐỘ HỌC TẬP
  // =========================
  const [progress, setProgress] = useState<ProgressData>({
    completedLessons: [],
    lastLesson: null,
    studyDates: [],
    activities: [],
  });

  // =========================
  // LẤY DỮ LIỆU LOCALSTORAGE
  // =========================
  useEffect(() => {
    const data = localStorage.getItem('student');

    if (data) {
      try {
        const parsedStudent = JSON.parse(data);

        setStudent({
          name: parsedStudent.name || '',
          className: parsedStudent.className || '',
        });
      } catch (error) {
        console.error('Không thể đọc thông tin học sinh:', error);
        setStudent(null);
      }
    } else {
      // Không đăng nhập
      setStudent(null);
    }

    setProgress(getProgress());
  }, []);

  // =========================
  // DANH SÁCH BÀI HỌC
  // =========================
  const lessonNames: Record<number, string> = {
    1: 'Bài 9: Sự đa dạng của chất',
    2: 'Bài 10: Các thể của chất và sự chuyển thể',
    3: 'Bài 11: Oxygen. Không khí',
    4: 'Bài 12: Một số vật liệu',
    5: 'Bài 13: Một số nguyên liệu',
    6: 'Bài 14: Một số nhiên liệu',
    7: 'Bài 15: Một số lương thực, thực phẩm',
    8: 'Bài 16: Hỗn hợp các chất',
    9: 'Bài 17: Tách chất khỏi hỗn hợp',
  };

  // =========================
  // TÍNH TOÁN TIẾN ĐỘ
  // =========================
  const totalLessons = 9;

  const completedCount = progress.completedLessons.length;

  const progressPercent =
    totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

  const studyStreak = calculateStudyStreak(
    progress.studyDates || []
  );

  const lastLesson = progress.lastLesson || 1;

  const lastLessonName =
    lessonNames[lastLesson] || 'Bài 9: Sự đa dạng của chất';

  // =========================
  // XÁC ĐỊNH BÀI TIẾP THEO
  // =========================
  const nextLessonNumber =
    completedCount < totalLessons
      ? Math.min(completedCount + 1, totalLessons)
      : totalLessons;

  const nextLesson =
    lessonNames[nextLessonNumber] || 'Bài 9: Sự đa dạng của chất';

  // =========================
  // NỘI DUNG CHÀO MỪNG
  // =========================
  let welcomeTitle = '';
  let welcomeMessage = '';

  if (!student) {
    // -------------------------
    // CHƯA ĐĂNG NHẬP
    // -------------------------
    welcomeTitle = 'Xin chào! 👋';

    welcomeMessage =
      'Hãy đăng nhập để bắt đầu học và theo dõi tiến độ học tập của em.';
  } else if (completedCount === 0) {
    // -------------------------
    // ĐÃ ĐĂNG NHẬP - CHƯA HỌC
    // -------------------------
    welcomeTitle = `Xin chào, ${student.name || 'em'}! 👋`;

    welcomeMessage =
      'Hôm nay chúng ta sẽ bắt đầu với Bài 9 - Sự đa dạng của chất.';
  } else if (completedCount < totalLessons) {
    // -------------------------
    // ĐANG HỌC
    // -------------------------
    welcomeTitle = `Rất tốt, ${student.name || 'em'}! 🌟`;

    welcomeMessage = `Em đã hoàn thành ${completedCount}/${totalLessons} bài học. Hãy tiếp tục ${nextLesson} nhé!`;
  } else {
    // -------------------------
    // HOÀN THÀNH TOÀN BỘ
    // -------------------------
    welcomeTitle = `Chúc mừng ${student.name || 'em'}! 🎉`;

    welcomeMessage =
      'Em đã hoàn thành toàn bộ chủ đề Chất và sự biến đổi của chất.';
  }

  // =========================
  // GIAO DIỆN
  // =========================
  return (
    <div className="min-h-screen bg-background">
      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />

              <h1 className="text-3xl font-bold text-foreground">
                Trang học tập KHTN 6
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {!student && (
                <Link href="/login">
                  <Button className="gap-2">
                    <LogIn className="w-4 h-4" />
                    Đăng nhập
                  </Button>
                </Link>
              )}

              <Link href="/">
                <Button variant="outline">
                  Trang chủ
                </Button>
              </Link>
            </div>
          </div>

          {/* LỜI CHÀO */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-foreground">
              {welcomeTitle}
            </h2>

            <p className="text-muted-foreground mt-2">
              {welcomeMessage}
            </p>
          </div>

          {/* THÔNG TIN LỚP */}
          {student && (
            <p className="text-sm text-muted-foreground mt-2">
              Lớp: {student.className || '--'}
            </p>
          )}
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* ================= THỐNG KÊ ================= */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          {/* TIẾN ĐỘ */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Tiến độ học tập
              </p>

              <p className="text-3xl font-bold text-foreground">
                {student ? `${progressPercent}%` : '--'}
              </p>

              <Target className="w-8 h-8 text-primary opacity-50 mt-3" />
            </CardContent>
          </Card>

          {/* BÀI ĐÃ HOÀN THÀNH */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Bài đã hoàn thành
              </p>

              <p className="text-3xl font-bold text-foreground">
                {student
                  ? `${completedCount}/${totalLessons}`
                  : `--/${totalLessons}`}
              </p>

              <BookOpen className="w-8 h-8 text-secondary opacity-50 mt-3" />
            </CardContent>
          </Card>

          {/* CHUỖI HỌC */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Chuỗi học tập
              </p>

              <p className="text-3xl font-bold text-foreground">
                {student ? `${studyStreak} ngày` : '--'}
              </p>

              <Clock className="w-8 h-8 text-accent opacity-50 mt-3" />
            </CardContent>
          </Card>

          {/* BÀI GẦN NHẤT */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Bài gần nhất
              </p>

              <p className="text-lg font-bold text-foreground line-clamp-2">
                {student
                  ? progress.lastLesson
                    ? lastLessonName
                    : 'Chưa bắt đầu'
                  : 'Đăng nhập để xem'}
              </p>

              <User className="w-8 h-8 text-primary opacity-50 mt-3" />
            </CardContent>
          </Card>
        </div>

        {/* ================= NỘI DUNG ================= */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CHỦ ĐỀ HỌC TẬP */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                Chủ đề học tập
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">

              <div>
                <h3 className="text-2xl font-bold">
                  Chất và sự biến đổi của chất
                </h3>

                <p className="text-muted-foreground">
                  Chủ đề Khoa học tự nhiên 6
                </p>
              </div>

              {/* TIẾN ĐỘ */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Tiến độ
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {student ? `${progressPercent}%` : '--'}
                  </span>
                </div>

                <Progress
                  value={student ? progressPercent : 0}
                  className="h-2"
                />
              </div>

              {/* THỐNG KÊ */}
              <div className="grid grid-cols-2 gap-4 text-sm">

                <div>
                  <p className="text-muted-foreground">
                    Tổng số bài học
                  </p>

                  <p className="text-lg font-bold">
                    {totalLessons}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    Đã hoàn thành
                  </p>

                  <p className="text-lg font-bold text-primary">
                    {student ? completedCount : '--'}
                  </p>
                </div>
              </div>

              {/* NÚT HỌC */}
              {student ? (
                <Link href={`/lesson/${lastLesson}`}>
                  <Button className="w-full gap-2">
                    {progress.lastLesson
                      ? 'Tiếp tục học'
                      : 'Bắt đầu học'}

                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button className="w-full gap-2">
                    Đăng nhập để bắt đầu học

                    <LogIn className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          {/* ================= HỒ SƠ ================= */}
          <Card>
            <CardHeader>
              <CardTitle>
                Hồ sơ học sinh
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">

              <div>
                <p className="text-muted-foreground">
                  Họ và tên
                </p>

                <p className="font-medium">
                  {student?.name || '--'}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Lớp
                </p>

                <p className="font-medium">
                  {student?.className || '--'}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Tiến độ
                </p>

                <p className="font-medium">
                  {student
                    ? `${progressPercent}%`
                    : '--'}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Bài gần nhất
                </p>

                <p className="font-medium">
                  {student
                    ? progress.lastLesson
                      ? lastLessonName
                      : 'Chưa bắt đầu'
                    : '--'}
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* ================= HOẠT ĐỘNG ================= */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Hoạt động gần đây
          </h2>

          <Card>
            <CardContent className="pt-6">

              {!student ? (
                <div className="text-center py-6">

                  <p className="text-sm text-muted-foreground mb-4">
                    Đăng nhập để xem các hoạt động học tập của em.
                  </p>

                  <Link href="/login">
                    <Button variant="outline" className="gap-2">
                      <LogIn className="w-4 h-4" />
                      Đăng nhập
                    </Button>
                  </Link>

                </div>
              ) : (progress.activities || []).length === 0 ? (

                <p className="text-sm text-muted-foreground">
                  Em chưa có hoạt động học tập nào. Hãy bắt đầu với Bài 9 nhé.
                </p>

              ) : (

                <div className="space-y-4">

                  {(progress.activities || []).map(
                    (activity, index) => (

                      <div
                        key={index}
                        className="flex items-center justify-between border-b last:border-0 pb-4"
                      >

                        <div>

                          <p className="font-medium">
                            {lessonNames[activity.lessonId] ||
                              `Bài ${activity.lessonId}`}
                          </p>

                          <p className="text-sm text-muted-foreground">
                            {activity.action}
                          </p>

                        </div>

                        <span className="text-xs text-muted-foreground">
                          {activity.time}
                        </span>

                      </div>
                    )
                  )}

                </div>
              )}

            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}