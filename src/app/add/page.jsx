"use client";

import { useState } from "react";
import AddGoalForm from "../../components/AddGoalForm";

export default function AddGoalPage() {
  const [newGoal, setNewGoal] = useState(null);

  const handleAddGoal = (goal) => {
    setNewGoal(goal);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Add a New Goal
        </h2>
        <AddGoalForm onAddGoal={handleAddGoal} />
      </div>
    </div>
  );
}
