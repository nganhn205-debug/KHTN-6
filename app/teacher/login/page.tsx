'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Lock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TeacherLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'teacher' && password === 'KHTN2026') {
      localStorage.setItem('teacherLoggedIn', 'true');
      router.push('/teacher/dashboard');
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>

          <CardTitle className="text-2xl">
            Đăng nhập giáo viên
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Khu vực theo dõi tiến độ học tập của học sinh
          </p>
        </CardHeader>

        <CardContent className="space-y-5">
          <div>
            <label className="font-medium flex gap-2 mb-2">
              <User className="w-4 h-4" />
              Tên đăng nhập
            </label>
            <Input
              placeholder="teacher"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium flex gap-2 mb-2">
              <Lock className="w-4 h-4" />
              Mật khẩu
            </label>
            <Input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <Button className="w-full h-11" onClick={handleLogin}>
            Đăng nhập
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Tài khoản demo: teacher / KHTN2026
          </p>
        </CardContent>
      </Card>
    </div>
  );
}