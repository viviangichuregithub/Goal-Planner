"use client";

import { useState } from "react";
import AddGoalForm from "@/components/AddGoalForm";

export default function AddGoalPage() {
  const [newGoal, setNewGoal] = useState(null);

  const handleAddGoal = (goal) => {
    setNewGoal(goal);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Add New Goal</h2>
      <AddGoalForm onAddGoal={handleAddGoal} />
    </div>
  );
}
