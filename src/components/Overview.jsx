"use client";
import { useMemo } from "react";
import { BarChart2, CheckCircle, AlertTriangle } from "lucide-react";

export default function Overview({ goals }) {
  const {
    totalGoals,
    totalSaved,
    completedGoals,
    warnings,
    overdue,
  } = useMemo(() => {
    const now = new Date();
    let totalGoals = goals.length;
    let totalSaved = 0;
    let completedGoals = 0;
    let warnings = [];
    let overdue = [];

    goals.forEach((goal) => {
      const deadline = new Date(goal.deadline);
      const timeDiff = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

      totalSaved += goal.savedAmount;

      const isComplete = goal.savedAmount >= goal.targetAmount;
      if (isComplete) completedGoals++;

      if (!isComplete && timeDiff <= 30 && timeDiff > 0) {
        warnings.push({ name: goal.name, daysLeft: timeDiff });
      }

      if (!isComplete && timeDiff < 0) {
        overdue.push(goal.name);
      }
    });

    return { totalGoals, totalSaved, completedGoals, warnings, overdue };
  }, [goals]);

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-4 shadow-sm">
          <BarChart2 className="text-blue-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-600">Total Goals</p>
            <p className="text-lg font-semibold text-blue-800">{totalGoals}</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-4 shadow-sm">
          <CheckCircle className="text-green-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-600">Total Saved</p>
            <p className="text-lg font-semibold text-green-800">
              KES {totalSaved.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl flex items-center gap-4 shadow-sm">
          <CheckCircle className="text-purple-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-600">Goals Completed</p>
            <p className="text-lg font-semibold text-purple-800">{completedGoals}</p>
          </div>
        </div>
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow-sm">
          <p className="font-semibold text-yellow-800 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Upcoming Deadlines
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
            {warnings.map((goal, index) => (
              <li key={index}>
                <strong>{goal.name}</strong> — {goal.daysLeft} day(s) left
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Overdue */}
      {overdue.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm">
          <p className="font-semibold text-red-700 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Overdue Goals
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
            {overdue.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
