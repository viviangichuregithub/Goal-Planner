"use client";

import { useEffect, useState } from "react";
import Overview from "@/components/Overview";

export default function OverviewPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://goal-planner-api-5e2w.onrender.com/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Goal Overview
        </h1>

        <Overview goals={goals} />
      </div>
    </main>
  );
}
