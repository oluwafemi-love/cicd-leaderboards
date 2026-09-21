"use client";

import React from "react";
import Leaderboard from "./components/Leaderboard";
import { employees as initialEmployees } from "@/app/lib/employees";

export default function Home() {
  const [employees, setEmployees] = React.useState(initialEmployees);

  function handleAddPoints(employeeId: number) {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === employeeId
          ? { ...employee, points: employee.points + 50 }
          : employee
      )
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Kaakaki Corporation
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Employee Leaderboard
          </h1>

          <p className="mt-2 text-gray-600">
            See how everyone is performing across the team.
          </p>
        </header>

        <Leaderboard
          employees={employees}
          onAddPoints={handleAddPoints}
        />
      </div>
    </main>
  );
}