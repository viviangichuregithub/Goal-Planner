"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddGoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      ...formData,
      id: crypto.randomUUID(),
      targetAmount: Number(formData.targetAmount),
      savedAmount: Number(formData.savedAmount),
      createdAt: new Date().toISOString().split("T")[0],
    };

    fetch("https://goal-planner-api-5e2w.onrender.com/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add goal");
        return res.json();
      })
      .then((data) => {
        toast.success(" Goal added!");
        onAddGoal(data);
        setFormData({
          name: "",
          targetAmount: "",
          savedAmount: "",
          category: "",
          deadline: "",
        });
      })
      .catch((err) => {
        console.error("Error adding goal:", err);
        toast.error(" Failed to add goal.");
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Add New Goal</h2>

      {[
        { label: "Goal Name", name: "name", type: "text", required: true },
        { label: "Target Amount", name: "targetAmount", type: "number", required: true },
        { label: "Saved Amount", name: "savedAmount", type: "number", required: false },
        { label: "Category", name: "category", type: "text", required: true },
        { label: "Deadline", name: "deadline", type: "date", required: true },
      ].map(({ label, name, type, required }) => (
        <div key={name}>
          <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required={required}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
      >
         Add Goal
      </button>
    </form>
  );
}
