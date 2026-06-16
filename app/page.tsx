'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Zap, Users, Award } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-foreground">SciLearn</span>
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Bắt đầu</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
          Learn Science the Interactive Way
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Discover the properties of matter and how substances change. With our AI-powered platform, learning has never been more engaging.
        </p>
        <div className="flex gap-4 justify-center mb-20 flex-wrap">
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Bắt đầu học <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mb-20 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-primary to-secondary w-full h-96 flex items-center justify-center text-white">
            <div className="text-center">
              <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p>Học tập tương tác</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Choose SciLearn?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Lessons</h3>
              <p className="text-muted-foreground">Engage with animated lessons and real-world examples</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Users className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Trợ lý học tập</h3>
              <p className="text-muted-foreground">Get instant help from our intelligent tutor anytime</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">Monitor your learning journey with detailed analytics</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="pt-12 pb-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Master Matter?</h3>
            <p className="text-lg mb-8 opacity-90">Join thousands of students learning science with SciLearn</p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Free Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 SciLearn. Empowering students through interactive science education.</p>
        </div>
      </footer>
    </div>
  );
}
