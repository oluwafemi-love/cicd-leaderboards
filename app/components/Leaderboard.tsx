import LeaderboardRow from "./LeaderboardRow";

const employees = [
  {
    id: 1,
    name: "Ada Johnson",
    department: "Engineering",
    points: 950,
  },
  { id: 2, name: "David Smith", department: "Design", points: 875 },
  {
    id: 3,
    name: "Sarah Williams",
    department: "Marketing",
    points: 820,
  },
  {
    id: 4,
    name: "Michael Brown",
    department: "Engineering",
    points: 790,
  },
  { id: 5, name: "James Wilson", department: "Sales", points: 650 },
];

export default function Leaderboard() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {" "}
      {/* Table header */}{" "}
      <div className="grid grid-cols-[60px_1fr_180px_100px] border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-600">
        {" "}
        <span>Rank</span> <span>Employee</span>{" "}
        <span>Department</span>{" "}
        <span className="text-right">Points</span>{" "}
      </div>{" "}
      {/* Employees */}{" "}
      <div>
        {" "}
        {employees.map((employee, index) => (
          <LeaderboardRow
            key={employee.id}
            rank={index + 1}
            employee={employee}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
}
