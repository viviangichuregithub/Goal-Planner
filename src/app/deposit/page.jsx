"use client";

import { useEffect, useState } from "react";
import DepositForm from "@/components/DepositForm";

export default function DepositPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error loading goals:", err));
  }, []);

  const handleDeposit = (goalId, amount) => {
    const goalToUpdate = goals.find((goal) => goal.id === goalId);
    if (!goalToUpdate) return;

    const updatedAmount = goalToUpdate.savedAmount + amount;

    fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prev) =>
          prev.map((g) => (g.id === goalId ? updatedGoal : g))
        );
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-orange text-center">Make a Deposit</h2>
      <DepositForm goals={goals} onDeposit={handleDeposit} />
    </div>
  );
}
