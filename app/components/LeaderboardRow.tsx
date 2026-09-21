import type { LeaderboardRowProps } from "@/app/types/model";

export default function LeaderboardRow({
  rank,
  employee,
  onAddPoints,
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
        sm:grid-cols-[60px_1fr_180px_140px]
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

          {/* Mobile department */}
          <p className="truncate text-sm text-gray-500 sm:hidden">
            {employee.department}
          </p>
        </div>
      </div>

      {/* Desktop department */}
      <span className="hidden text-sm text-gray-600 sm:block">
        {employee.department}
      </span>

      {/* Points + button */}
      <div className="flex items-center justify-end gap-3">
        <span className="font-semibold text-gray-900">
          {employee.points.toLocaleString()}
          <span className="ml-1 text-xs font-normal text-gray-500">
            pts
          </span>
        </span>

        <button
          type="button"
          onClick={() => onAddPoints(employee.id)}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          +50
        </button>
      </div>
    </div>
  );
}