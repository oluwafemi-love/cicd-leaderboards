type Employee = {
  id: number;
  name: string;
  department: string;
  points: number;
};

type LeaderboardRowProps = { rank: number; employee: Employee };

export default function LeaderboardRow({
  rank,
  employee,
}: LeaderboardRowProps) {
  const initials = employee.name
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <div className="grid grid-cols-[60px_1fr_180px_100px] items-center border-b border-gray-100 px-6 py-4 last:border-b-0">
      {" "}
      {/* Rank */}{" "}
      <span className="font-semibold text-gray-500">{rank}</span>{" "}
      {/* Employee */}{" "}
      <div className="flex items-center gap-3">
        {" "}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {" "}
          {initials}{" "}
        </div>{" "}
        <span className="font-medium">{employee.name}</span>{" "}
      </div>{" "}
      {/* Department */}{" "}
      <span className="text-sm text-gray-600">
        {" "}
        {employee.department}{" "}
      </span>{" "}
      {/* Points */}{" "}
      <span className="text-right font-semibold">
        {" "}
        {employee.points.toLocaleString()}{" "}
      </span>{" "}
    </div>
  );
}
