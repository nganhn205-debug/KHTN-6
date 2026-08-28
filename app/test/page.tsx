'use client';

import { db } from "@/lib/firebase";

export default function TestPage() {
  return (
    <div className="p-10">
      <h1>Firebase đã kết nối thành công 🎉</h1>
      <p>{db ? "Đã kết nối Firestore" : "Chưa kết nối"}</p>
    </div>
  );
}