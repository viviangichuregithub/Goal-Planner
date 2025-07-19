"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-purple-700 font-bold text-xl">
        🎯 SmartGoal
      </Link>
      <div className="space-x-4">
        <Link href="/" className="hover:text-purple-600">Dashboard</Link>
        <Link href="/deposit" className="hover:text-purple-600">Deposit</Link>
        <Link href="/add" className="hover:text-purple-600">Add Goal</Link>
        <Link href="/overview" className="hover:text-purple-600">Overview</Link>
      </div>
    </nav>
  );
}
