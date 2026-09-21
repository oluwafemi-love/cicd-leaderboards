export type Employee = {
  id: number;
  name: string;
  department: string;
  points: number;
};


export type LeaderboardRowProps = {
  rank: number;
  employee: Employee;
  onAddPoints: (employeeId: number) => void;
};