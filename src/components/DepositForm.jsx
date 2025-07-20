"use client";
import { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (!goalId || isNaN(depositAmount) || depositAmount <= 0) return;

    onDeposit(goalId, depositAmount);
    setGoalId("");
    setAmount("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000); // Hide after 3s
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Make a Deposit</h2>

      {/* Success Alert */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          Deposit successful!
        </div>
      )}

      {/* Goal Selection */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Select Goal
        </label>
        <select
          value={goalId}
          onChange={(e) => setGoalId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        >
          <option value="">-- Choose a goal --</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
      </div>

      {/* Amount */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Deposit Amount
        </label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (e.g. 1000)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
      >
        Deposit to Goal
      </button>
    </form>
  );
}
