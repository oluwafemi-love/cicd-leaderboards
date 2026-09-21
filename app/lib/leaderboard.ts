import type { Employee } from "@/app/types/model";

export type RankedEmployee = Employee & {
  rank: number;
};

export function calculateLeaderboard(
  employees: Employee[],
): RankedEmployee[] {
  return [...employees]
    .sort((a, b) => b.points - a.points)
    .map((employee, index) => ({
      ...employee,
      rank: index + 1,
    }));
}
