"use client";
import { useState } from "react";

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

    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGoal(data);
        setFormData({
          name: "",
          targetAmount: "",
          savedAmount: "",
          category: "",
          deadline: "",
        });
      })
      .catch((err) => console.error("Error adding goal:", err));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-8 space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-800">Add New Goal</h2>

      { /* Goal Name */}
      <div>
        <label className="block mb-1 text-gray-700">Goal Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      {/* Target Amount */}
      <div>
        <label className="block mb-1 text-gray-700">Target Amount</label>
        <input
          type="number"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      {/* Saved Amount */}
      <div>
        <label className="block mb-1 text-gray-700">Saved Amount</label>
        <input
          type="number"
          name="savedAmount"
          value={formData.savedAmount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      {/* Deadline */}
      <div>
        <label className="block mb-1 text-gray-700">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Add Goal
      </button>
    </form>
  );
}
