import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Medal, Crown, User } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import { getProgress } from "@/lib/progress";
import { getLeaderboard, type LeaderboardEntry } from "@/lib/leaderboard";

const rankIcon = (index: number) => {
  if (index === 0) return <Crown className="h-5 w-5 text-accent" />;
  if (index === 1) return <Medal className="h-5 w-5 text-muted-foreground" />;
  if (index === 2) return <Medal className="h-5 w-5 text-accent/60" />;
  return <span className="font-mono text-sm text-muted-foreground w-5 text-center">{index + 1}</span>;
};

const Leaderboard = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const progress = getProgress();
    if (!progress) {
      navigate("/");
      return;
    }
    setCurrentUser(progress.username);
    setEntries(getLeaderboard());
  }, [navigate]);

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-accent" />
            <h1 className="text-2xl font-mono font-bold text-foreground">Leaderboard</h1>
          </div>

          {entries.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-mono text-sm">
                No scores yet. Complete simulations to appear on the leaderboard!
              </p>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 border-b border-border text-xs font-mono text-muted-foreground">
                <span className="w-8">#</span>
                <span>Agent</span>
                <span>Modules</span>
                <span>Score</span>
              </div>
              {entries.map((entry, idx) => (
                <motion.div
                  key={entry.username}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-3 items-center border-b border-border last:border-0 ${
                    currentUser === entry.username ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="w-8 flex justify-center">{rankIcon(idx)}</div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className={`font-mono text-sm ${currentUser === entry.username ? "text-primary font-bold" : "text-foreground"}`}>
                      {entry.username}
                    </span>
                    {currentUser === entry.username && (
                      <span className="text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">YOU</span>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{entry.completedCount}/4</span>
                  <span className="font-mono text-sm font-bold text-accent">{entry.totalScore}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Leaderboard;
