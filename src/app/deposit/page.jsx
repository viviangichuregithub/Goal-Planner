"use client";

import { useEffect, useState } from "react";
import DepositForm from "@/components/DepositForm";

export default function DepositPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://goal-planner-api-5e2w.onrender.com/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error loading goals:", err));
  }, []);

  const handleDeposit = (goalId, amount) => {
    const goalToUpdate = goals.find((goal) => goal.id === goalId);
    if (!goalToUpdate) return;

    const updatedAmount = goalToUpdate.savedAmount + amount;

    fetch(`https://goal-planner-api-5e2w.onrender.com/goals/${goalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === goalId ? updatedGoal : g))
        );
      });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Make a Deposit
        </h1>

        <DepositForm goals={goals} onDeposit={handleDeposit} />
      </div>
    </main>
  );
}
