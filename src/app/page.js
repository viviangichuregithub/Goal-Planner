"use client";

import { useState, useEffect } from "react";
import GoalList from "@/components/GoalList";

export default function Home() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error loading goals:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Dashboard
        </h1>
        <GoalList goals={goals} />
      </div>
    </main>
  );
}
