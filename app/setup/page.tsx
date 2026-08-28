'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function createStudentId(name: string, className: string) {
  return `${className}-${name}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function SetupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const handleStart = async () => {
    if (!name.trim() || !className.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const studentId = createStudentId(name, className);

    const studentData = {
      id: studentId,
      name: name.trim(),
      className: className.trim(),
      completedLessons: [],
      progressPercent: 0,
      quizScores: {},
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "students", studentId), studentData, { merge: true });

    localStorage.setItem("studentId", studentId);
    localStorage.setItem("student", JSON.stringify(studentData));

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            👋 Chào mừng đến với KHTN Learn
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div>
            <p className="mb-2 font-medium">Họ và tên</p>
            <Input
              placeholder="Nhập họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <p className="mb-2 font-medium">Lớp</p>
            <Input
              placeholder="Ví dụ: 6A1"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={handleStart}>
            Bắt đầu học
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}