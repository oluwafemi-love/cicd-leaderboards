import { describe, expect, it } from "vitest";
import { calculateLeaderboard } from "./leaderboard";
import type { Employee } from "@/app/types/model";

describe("calculateLeaderboard", () => {
  const employees: Employee[] = [
    {
      id: 1,
      name: "Ada Johnson",
      department: "Engineering",
      points: 950,
    },
    {
      id: 2,
      name: "David Smith",
      department: "Design",
      points: 875,
    },
    {
      id: 3,
      name: "Sarah Williams",
      department: "Marketing",
      points: 820,
    },
  ];

  it("sorts employees by points from highest to lowest", () => {
    const result = calculateLeaderboard(employees);

    expect(result[0].name).toBe("Ada Johnson");
    expect(result[1].name).toBe("David Smith");
    expect(result[2].name).toBe("Sarah Williams");
  });

  it("assigns ranks based on the sorted order", () => {
    const result = calculateLeaderboard(employees);

    expect(result[0].rank).toBe(1);
    expect(result[1].rank).toBe(2);
    expect(result[2].rank).toBe(3);
  });

  it("preserves employee data", () => {
    const result = calculateLeaderboard(employees);

    expect(result[0]).toMatchObject({
      id: 1,
      name: "Ada Johnson",
      department: "Engineering",
      points: 950,
      rank: 1,
    });
  });

  it("does not mutate the original employee array", () => {
    const originalEmployees = [...employees];

    calculateLeaderboard(employees);

    expect(employees).toEqual(originalEmployees);
  });

  it("returns an empty array when given no employees", () => {
    const result = calculateLeaderboard([]);

    expect(result).toEqual([]);
  });
});

