import Leaderboard from "./components/Leaderboard";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900">
      {" "}
      <div className="mx-auto max-w-5xl">
        {" "}
        <header className="mb-8">
          {" "}
          <p className="mb-2 text-sm font-medium text-blue-600">
            {" "}
            Acme Corporation{" "}
          </p>{" "}
          <h1 className="text-3xl font-bold tracking-tight">
            {" "}
            Employee Leaderboard{" "}
          </h1>{" "}
          <p className="mt-2 text-gray-600">
            {" "}
            See how everyone is performing across the team.{" "}
          </p>{" "}
        </header>{" "}
        <Leaderboard />{" "}
      </div>{" "}
    </main>
  );
}
