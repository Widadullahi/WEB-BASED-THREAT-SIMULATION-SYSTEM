import { beforeEach, describe, expect, it } from "vitest";
import { clearProgress, getProgress, initProgress, updateScore } from "@/lib/progress";
import { getLeaderboard } from "@/lib/leaderboard";

describe("progress and leaderboard", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes progress for a new user", () => {
    const progress = initProgress("aisha");
    expect(progress.username).toBe("aisha");
    expect(progress.totalScore).toBe(0);
    expect(progress.completedScenarios).toEqual([]);
    expect(getProgress()?.username).toBe("aisha");
  });

  it("keeps highest score per scenario and updates totals", () => {
    initProgress("aisha");
    updateScore("phishing", 40);
    updateScore("phishing", 20);
    updateScore("password", 70);

    const progress = getProgress();
    expect(progress).not.toBeNull();
    expect(progress?.scores.phishing).toBe(40);
    expect(progress?.scores.password).toBe(70);
    expect(progress?.completedScenarios).toEqual(["phishing", "password"]);
    expect(progress?.totalScore).toBe(110);
  });

  it("clears current user progress", () => {
    initProgress("aisha");
    clearProgress();
    expect(getProgress()).toBeNull();
  });

  it("writes leaderboard entries from score updates", async () => {
    initProgress("aisha");
    updateScore("phishing", 100);
    await new Promise((resolve) => setTimeout(resolve, 0));

    const leaderboard = getLeaderboard();
    expect(leaderboard.length).toBe(1);
    expect(leaderboard[0].username).toBe("aisha");
    expect(leaderboard[0].totalScore).toBe(100);
    expect(leaderboard[0].completedCount).toBe(1);
  });
});
