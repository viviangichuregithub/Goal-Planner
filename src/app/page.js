"use client";

import { useState, useEffect } from "react";
import GoalList from "@/components/GoalList";
import toast from "react-hot-toast"; 

export default function Home() {
  const [goals, setGoals] = useState([]);

  // Load goals from server
  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => {
        console.error("Error loading goals:", err);
        toast.error("Failed to load goals");
      });
  }, []);

  // Delete goal
  const handleDelete = (goalId) => {
    fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
        toast.success("Goal deleted successfully");
      })
      .catch((err) => {
        console.error("Delete error:", err);
        toast.error("Failed to delete goal");
      });
  };

  // Update goal
  const handleUpdate = (goalId, updatedFields) => {
    fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
      })
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) => (goal.id === goalId ? updatedGoal : goal))
        );
        toast.success("Goal updated successfully");
      })
      .catch((err) => {
        console.error("Update error:", err);
        toast.error("Failed to update goal");
      });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-#1E293B mb-8 text-center">
          Dashboard
        </h1>
        <GoalList
          goals={goals}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </main>
  );
}
