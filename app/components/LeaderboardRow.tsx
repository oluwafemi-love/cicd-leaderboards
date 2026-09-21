type Employee = {
  id: number;
  name: string;
  department: string;
  points: number;
};

type LeaderboardRowProps = {
  rank: number;
  employee: Employee;
};

export default function LeaderboardRow({
  rank,
  employee,
}: LeaderboardRowProps) {
  const initials = employee.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div
      className="
        grid items-center gap-4 border-b border-gray-100 px-4 py-4 last:border-b-0

        grid-cols-[40px_1fr_auto]

        sm:grid-cols-[60px_1fr_180px_100px]
        sm:px-6
      "
    >
      {/* Rank */}
      <span className="font-semibold text-gray-500">
        #{rank}
      </span>

      {/* Employee */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {initials}
        </div>

        <div className="min-w-0">
          <p className="truncate font-medium text-gray-900">
            {employee.name}
          </p>

          {/* Department shown here on mobile */}
          <p className="truncate text-sm text-gray-500 sm:hidden">
            {employee.department}
          </p>
        </div>
      </div>

      {/* Department - desktop only */}
      <span className="hidden text-sm text-gray-600 sm:block">
        {employee.department}
      </span>

      {/* Points */}
      <span className="text-right font-semibold text-gray-900">
        {employee.points.toLocaleString()}
        <span className="ml-1 text-xs font-normal text-gray-500">
          pts
        </span>
      </span>
    </div>
  );
}

