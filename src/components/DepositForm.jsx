"use client";
import { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (!goalId || isNaN(depositAmount) || depositAmount <= 0) return;

    onDeposit(goalId, depositAmount);
    setGoalId("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-bold mb-3 text-purple-700">Make a Deposit</h2>

      <label className="block mb-2 text-sm font-medium">Select Goal</label>
      <select
        value={goalId}
        onChange={(e) => setGoalId(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      >
        <option value="">-- Select a goal --</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <label className="block mb-2 text-sm font-medium">Amount</label>
      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
        placeholder="Enter amount"
        required
      />

      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
      >
        Deposit
      </button>
    </form>
  );
}
