'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, BookOpen, Trophy, BarChart3, LogOut } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TeacherDashboard() {
  const router = useRouter();
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("teacherLoggedIn");
    if (loggedIn !== "true") router.push("/teacher/login");
  }, [router]);

  useEffect(() => {
    async function loadStudents() {
      const snapshot = await getDocs(collection(db, "students"));
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(list);
    }

    loadStudents();
  }, []);

  const totalStudents = students.length;

  const completedStudents = students.filter(
    (s) => (s.progressPercent || 0) === 100
  ).length;

  const averageProgress =
    totalStudents === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + (s.progressPercent || 0), 0) /
            totalStudents
        );

  const averageScore =
    totalStudents === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => {
            const quizzes = Object.values(s.quizScores || {}) as any[];
            if (quizzes.length === 0) return sum;

            const avg =
              quizzes.reduce((a: number, q: any) => a + (q.percent || 0), 0) /
              quizzes.length;

            return sum + avg;
          }, 0) / totalStudents
        );

  const logout = () => {
    localStorage.removeItem("teacherLoggedIn");
    router.push("/teacher/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Bảng điều khiển giáo viên</h1>
            <p className="text-muted-foreground">
              Theo dõi tiến độ học tập của học sinh
            </p>
          </div>

          <Button variant="outline" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Đăng xuất
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h2 className="text-3xl font-bold">{totalStudents}</h2>
              <p className="text-muted-foreground">Học sinh</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <BookOpen className="w-10 h-10 text-green-500 mb-4" />
              <h2 className="text-3xl font-bold">{completedStudents}</h2>
              <p className="text-muted-foreground">Hoàn thành toàn bộ</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <BarChart3 className="w-10 h-10 text-orange-500 mb-4" />
              <h2 className="text-3xl font-bold">{averageProgress}%</h2>
              <p className="text-muted-foreground">Tiến độ trung bình</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Trophy className="w-10 h-10 text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold">{averageScore}%</h2>
              <p className="text-muted-foreground">Điểm trung bình</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Danh sách học sinh</CardTitle>
          </CardHeader>

          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Họ tên</th>
                  <th>Lớp</th>
                  <th>Tiến độ</th>
                  <th>Điểm TB</th>
                </tr>
              </thead>

              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-muted-foreground">
                      Chưa có dữ liệu học sinh.
                    </td>
                  </tr>
                ) : (
                  students.map((student) => {
                    const quizzes = Object.values(student.quizScores || {}) as any[];

                    const avgScore =
                      quizzes.length === 0
                        ? 0
                        : Math.round(
                            quizzes.reduce(
                              (sum: number, q: any) => sum + (q.percent || 0),
                              0
                            ) / quizzes.length
                          );

                    return (
                      <tr key={student.id} className="border-b">
                        <td className="py-4">{student.name}</td>
                        <td align="center">{student.className}</td>
                        <td align="center">{student.progressPercent || 0}%</td>
                        <td align="center">{avgScore}%</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}