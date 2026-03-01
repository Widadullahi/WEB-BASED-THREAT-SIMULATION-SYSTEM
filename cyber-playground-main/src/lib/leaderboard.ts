export interface LeaderboardEntry {
  username: string;
  totalScore: number;
  completedCount: number;
  lastActive: string;
}

const LB_KEY = "cyberlab_leaderboard";

export const getLeaderboard = (): LeaderboardEntry[] => {
  try {
    const data = localStorage.getItem(LB_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const updateLeaderboard = (entry: LeaderboardEntry): void => {
  try {
    const lb = getLeaderboard();
    const idx = lb.findIndex((e) => e.username === entry.username);
    if (idx >= 0) {
      lb[idx] = entry;
    } else {
      lb.push(entry);
    }
    lb.sort((a, b) => b.totalScore - a.totalScore);
    localStorage.setItem(LB_KEY, JSON.stringify(lb.slice(0, 50)));
  } catch (e) {
    console.error("Failed to update leaderboard:", e);
  }
};
