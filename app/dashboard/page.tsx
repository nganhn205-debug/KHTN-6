'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Target, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: 'Matter and Its Changes',
      description: 'Chất và sự biến đổi của chất',
      progress: 45,
      lessons: 5,
      completedLessons: 2,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
  ];

  const recentActivity = [
    { lesson: 'Physical Properties', status: 'Completed', date: 'Today' },
    { lesson: 'States of Matter', status: 'In Progress', date: 'Yesterday' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">SciLearn Dashboard</h1>
            </div>
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
          </div>
          <p className="text-muted-foreground mt-2">Welcome back! Continue your science journey.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Progress</p>
                  <p className="text-3xl font-bold text-foreground">45%</p>
                </div>
                <Target className="w-10 h-10 text-primary opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lessons Completed</p>
                  <p className="text-3xl font-bold text-foreground">2/5</p>
                </div>
                <BookOpen className="w-10 h-10 text-secondary opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Learning Streak</p>
                  <p className="text-3xl font-bold text-foreground">5 days</p>
                </div>
                <Clock className="w-10 h-10 text-accent opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Course</h2>
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`${course.image} h-48 md:h-auto flex items-center justify-center text-white text-lg font-semibold`}>
                  {course.title}
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Progress</span>
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Lessons</p>
                        <p className="text-lg font-bold text-foreground">{course.lessons}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Completed</p>
                        <p className="text-lg font-bold text-primary">{course.completedLessons}</p>
                      </div>
                    </div>

                    <Link href="/course/1">
                      <Button className="w-full gap-2">
                        Continue Learning <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-4 border-b last:border-0">
                    <div>
                      <p className="font-medium text-foreground">{activity.lesson}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
