import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export type StudentProgress = {
  completedLessons: number[];
  lastLesson: number | null;
  studyDates: string[];
  activities: {
    lessonId: number;
    action: string;
    time: string;
  }[];
};

const KEY = "studentProgress";

function today() {
  return new Date().toISOString().slice(0, 10);
}

function defaultProgress(): StudentProgress {
  return {
    completedLessons: [],
    lastLesson: null,
    studyDates: [],
    activities: [],
  };
}

export function getProgress(): StudentProgress {
  if (typeof window === "undefined") return defaultProgress();

  const data = localStorage.getItem(KEY);
  if (!data) return defaultProgress();

  try {
    const parsed = JSON.parse(data);

    return {
      completedLessons: parsed.completedLessons || [],
      lastLesson: parsed.lastLesson || null,
      studyDates: parsed.studyDates || [],
      activities: parsed.activities || [],
    };
  } catch {
    return defaultProgress();
  }
}

export async function markLessonCompleted(lessonId: number) {
  const progress = getProgress();

  const alreadyCompleted = progress.completedLessons.includes(lessonId);

  const completedLessons = alreadyCompleted
    ? progress.completedLessons
    : [...progress.completedLessons, lessonId];

  const studyDates = progress.studyDates.includes(today())
    ? progress.studyDates
    : [...progress.studyDates, today()];

  const activities = alreadyCompleted
    ? progress.activities
    : [
        {
          lessonId,
          action: "Đã hoàn thành bài học",
          time: new Date().toLocaleString("vi-VN"),
        },
        ...progress.activities,
      ];

  const newProgress = {
    completedLessons,
    lastLesson: lessonId,
    studyDates,
    activities,
  };

  localStorage.setItem(KEY, JSON.stringify(newProgress));

  const student = JSON.parse(localStorage.getItem("student") || "{}");

  if (student.id) {
    await updateDoc(doc(db, "students", student.id), {
      completedLessons,
      progressPercent: Math.round((completedLessons.length / 9) * 100),
      updatedAt: serverTimestamp(),
    });
  }
}

export function calculateStudyStreak(studyDates: string[]) {
  if (!studyDates || studyDates.length === 0) return 0;

  const dates = [...new Set(studyDates)].sort().reverse();

  let streak = 0;
  const current = new Date();

  for (const date of dates) {
    const currentString = current.toISOString().slice(0, 10);

    if (date === currentString) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

export function isLessonUnlocked(
  lessonId: number,
  completedLessons: number[]
) {
  if (lessonId === 1) return true;

  return (completedLessons || []).includes(lessonId - 1);
}