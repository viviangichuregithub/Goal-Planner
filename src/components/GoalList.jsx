"use client";

export default function GoalList({ goals }) {
  if (goals.length === 0) {
    return <p className="text-gray-600">No goals yet. Add one!</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
      <ul className="space-y-3">
        {goals.map((goal) => (
          <li
            key={goal.id}
            className="p-4 bg-white rounded shadow border border-gray-200"
          >
            <h3 className="text-lg font-bold text-orange">{goal.name}</h3>
            <p>Category: {goal.category}</p>
            <p>Target: ${goal.targetAmount}</p>
            <p>Saved: ${goal.savedAmount}</p>
            <p>Deadline: {goal.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
