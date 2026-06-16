'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Lock, ChevronRight, Home } from 'lucide-react';

export default function CourseOverview({ params }: { params: { id: string } }) {
const lessons = [
{
id: 1,
title: 'Bài 9. Sự đa dạng của chất',
description: 'Tìm hiểu các chất khác nhau trong tự nhiên và đời sống',
duration: '15 phút',
completed: false,
difficulty: 'Cơ bản',
},
{
id: 2,
title: 'Bài 10. Các thể của chất và sự chuyển thể',
description: 'Tìm hiểu chất rắn, chất lỏng, chất khí và sự chuyển thể',
duration: '20 phút',
completed: false,
difficulty: 'Cơ bản',
},
{
id: 3,
title: 'Bài 11. Oxygen. Không khí',
description: 'Tìm hiểu oxygen, thành phần và vai trò của không khí',
duration: '20 phút',
completed: false,
difficulty: 'Trung bình',
},
{
id: 4,
title: 'Bài 12. Một số vật liệu',
description: 'Nhận biết và ứng dụng các vật liệu thông dụng',
duration: '18 phút',
completed: false,
difficulty: 'Cơ bản',
},
{
id: 5,
title: 'Bài 13. Một số nhiên liệu',
description: 'Tìm hiểu các loại nhiên liệu và vai trò trong đời sống',
duration: '18 phút',
completed: false,
difficulty: 'Cơ bản',
},
{
id: 6,
title: 'Bài 14. Một số lương thực - thực phẩm',
description: 'Tìm hiểu vai trò của lương thực và thực phẩm đối với con người',
duration: '20 phút',
completed: false,
difficulty: 'Cơ bản',
},
];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
               Quay lại
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Matter and Its Changes</h1>
              <p className="text-sm text-muted-foreground">Chất và sự biến đổi của chất</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Course Lessons</h2>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <Card 
                    key={lesson.id} 
                    className={`hover:shadow-md transition-all cursor-pointer border-l-4 ${
                      lesson.completed ? 'border-l-green-500' : 'border-l-blue-500'
                    }`}
                  >
                    <Link href={lesson.completed || lesson.id <= 2 ? `/lesson/${lesson.id}` : '#'}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {lesson.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-green-500" />
                            ) : (
                              <Circle className="w-6 h-6 text-blue-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{lesson.description}</p>
                              </div>
                              {lesson.id > 2 && !lesson.completed && (
                                <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                              <Badge variant="outline">{lesson.difficulty}</Badge>
                              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                              {lesson.completed && (
                                <Badge className="bg-green-100 text-green-700">Completed</Badge>
                              )}
                            </div>
                          </div>
                          {(lesson.completed || lesson.id <= 2) && (
                            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Completion</span>
                      <span className="text-sm font-bold text-primary">40%</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">2</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">3</p>
                      <p className="text-xs text-muted-foreground">Remaining</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Level</p>
                    <p className="font-medium text-foreground">Grade 6</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Subject</p>
                    <p className="font-medium text-foreground">Science</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Duration</p>
                    <p className="font-medium text-foreground">1 hour 40 min</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Language</p>
                    <p className="font-medium text-foreground">Vietnamese</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Course Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Interactive lessons</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>AI chatbot support</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Practice quizzes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Progress tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
