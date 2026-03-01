export interface UserProgress {
  username: string;
  completedScenarios: string[];
  scores: Record<string, number>;
  totalScore: number;
  lastActive: string;
}

const STORAGE_KEY = "cyberlab_progress";

export const getProgress = (): UserProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
};

export const initProgress = (username: string): UserProgress => {
  const progress: UserProgress = {
    username,
    completedScenarios: [],
    scores: {},
    totalScore: 0,
    lastActive: new Date().toISOString(),
  };
  saveProgress(progress);
  return progress;
};

export const updateScore = (scenarioId: string, score: number): UserProgress | null => {
  const progress = getProgress();
  if (!progress) return null;

  progress.scores[scenarioId] = Math.max(progress.scores[scenarioId] || 0, score);
  if (!progress.completedScenarios.includes(scenarioId)) {
    progress.completedScenarios.push(scenarioId);
  }
  progress.totalScore = Object.values(progress.scores).reduce((a, b) => a + b, 0);
  progress.lastActive = new Date().toISOString();
  saveProgress(progress);

  // Update leaderboard
  import("@/lib/leaderboard").then(({ updateLeaderboard }) => {
    updateLeaderboard({
      username: progress.username,
      totalScore: progress.totalScore,
      completedCount: progress.completedScenarios.length,
      lastActive: progress.lastActive,
    });
  }).catch(() => {});

  return progress;
};

export const clearProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
