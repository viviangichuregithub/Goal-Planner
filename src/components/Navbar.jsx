"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
      <Link href="/" className="block text-blue-700">
        <div className="text-2xl font-bold tracking-tight">Smart Goal Planner</div>
        <p className="text-sm text-gray-500 -mt-1">Prioritize the Plan, Achieve the Goal</p>
      </Link>
      <div className="flex space-x-4 text-sm md:text-base font-medium mt-1 md:mt-0">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Dashboard
        </Link>
        <Link
          href="/deposit"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Deposit
        </Link>
        <Link
          href="/add"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Add Goal
        </Link>
        <Link
          href="/overview"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Overview
        </Link>
      </div>
    </nav>
  );
}
