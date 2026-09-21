import LeaderboardRow from "./LeaderboardRow";
import { calculateLeaderboard } from "@/app/lib/leaderboard";
import type { Employee } from "@/app/types/model";

type LeaderboardProps = {
  employees: Employee[];
  onAddPoints: (employeeId: number) => void;
};

export default function Leaderboard({
  employees,
  onAddPoints,
}: LeaderboardProps) {
  const rankedEmployees = calculateLeaderboard(employees);

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Desktop table header */}
      <div className="hidden grid-cols-[60px_1fr_180px_140px] border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600 sm:grid">
        <span>Rank</span>
        <span>Employee</span>
        <span>Department</span>
        <span className="text-right">Points</span>
      </div>

      <div>
        {rankedEmployees.map((employee) => (
          <LeaderboardRow
            key={employee.id}
            rank={employee.rank}
            employee={employee}
            onAddPoints={onAddPoints}
          />
        ))}
      </div>
    </section>
  );
}
