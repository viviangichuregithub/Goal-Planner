"use client";

import { useState } from "react";

export default function GoalList({ goals, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const startEditing = (goal) => {
    setEditingId(goal.id);
    setFormData({
      name: goal.name,
      category: goal.category,
      targetAmount: goal.targetAmount,
      deadline: goal.deadline,
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    onUpdate(editingId, formData);
    setEditingId(null);
  };

  if (goals.length === 0) {
    return (
      <p className="text-gray-500 text-center py-8 text-lg">
        No goals yet. Add one to get started!
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">
        My Goals
      </h2>

      <ul className="space-y-6">
        {goals.map((goal) => {
          const remaining = goal.targetAmount - goal.savedAmount;
          const progress =
            goal.targetAmount > 0
              ? Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)
              : 0;

          return (
            <li
              key={goal.id}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 space-y-3"
            >
              {editingId === goal.id ? (
                <div className="space-y-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Goal Name"
                  />
                  <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Category"
                  />
                  <input
                    name="targetAmount"
                    type="number"
                    value={formData.targetAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Target Amount"
                  />
                  <input
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow transition"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">
                      {goal.name}
                    </h3>
                    <p className="text-sm text-gray-500">{goal.category}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <p>Target: Ksh.{goal.targetAmount}</p>
                    <p>Saved: Ksh.{goal.savedAmount}</p>
                    <p>Remaining: Ksh.{remaining}</p>
                    <p>Deadline: {goal.deadline}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {progress.toFixed(1)}% of goal reached
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => startEditing(goal)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1.5 px-4 rounded-lg font-medium shadow transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(goal.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded-lg font-medium shadow transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
