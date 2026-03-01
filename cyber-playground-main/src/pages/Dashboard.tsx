import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Mail, Key, Globe, Users, Trophy, Target, Zap } from "lucide-react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import { getProgress, type UserProgress } from "@/lib/progress";

const scenarios = [
  { id: "phishing", title: "Phishing Detection", description: "Identify suspicious emails from legitimate ones", icon: Mail, path: "/sim/phishing", color: "text-secondary", borderColor: "border-secondary/30" },
  { id: "password", title: "Password Strength", description: "Learn to create unbreakable passwords", icon: Key, path: "/sim/password", color: "text-accent", borderColor: "border-accent/30" },
  { id: "malicious-url", title: "URL Scanner", description: "Spot dangerous links before clicking", icon: Globe, path: "/sim/url", color: "text-destructive", borderColor: "border-destructive/30" },
  { id: "social-engineering", title: "Social Engineering", description: "Detect phone, SMS & in-person scams", icon: Users, path: "/sim/social", color: "text-primary", borderColor: "border-primary/30" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const p = getProgress();
    if (!p) { navigate("/"); return; }
    setProgress(p);
  }, [navigate]);

  if (!progress) return null;

  const radarData = scenarios.map((s) => ({ subject: s.title.split(" ")[0], score: progress.scores[s.id] || 0, fullMark: 100 }));
  const barData = scenarios.map((s) => ({ name: s.title.split(" ")[0], score: progress.scores[s.id] || 0 }));
  const completedCount = progress.completedScenarios.length;

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Welcome header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-mono font-bold text-foreground">
                Welcome back, <span className="text-primary text-glow">{progress.username}</span>
              </h1>
              <p className="text-muted-foreground font-mono text-sm mt-1">Continue your cybersecurity training</p>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
              <Trophy className="h-5 w-5 text-accent" />
              <span className="font-mono font-bold text-accent">{progress.totalScore}</span>
              <span className="font-mono text-xs text-muted-foreground">pts</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Target, label: "Modules Completed", value: `${completedCount}/${scenarios.length}`, iconColor: "text-primary" },
              { icon: Zap, label: "Total Score", value: progress.totalScore, iconColor: "text-accent" },
              { icon: Shield, label: "Rank", value: completedCount === 4 ? "Expert" : completedCount >= 2 ? "Trainee" : "Rookie", iconColor: "text-secondary" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><stat.icon className={`h-6 w-6 ${stat.iconColor}`} /></div>
                <div>
                  <p className="font-mono text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-semibold text-foreground mb-4">Skill Radar</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(160 30% 18%)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(220 10% 55%)", fontSize: 12, fontFamily: "JetBrains Mono" }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "hsl(220 10% 55%)", fontSize: 10 }} />
                  <Radar name="Score" dataKey="score" stroke="hsl(160 100% 45%)" fill="hsl(160 100% 45%)" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-semibold text-foreground mb-4">Score Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(160 30% 18%)" />
                  <XAxis dataKey="name" tick={{ fill: "hsl(220 10% 55%)", fontSize: 12, fontFamily: "JetBrains Mono" }} />
                  <YAxis domain={[0, 100]} tick={{ fill: "hsl(220 10% 55%)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(220 18% 10%)", border: "1px solid hsl(160 30% 18%)", borderRadius: "8px", fontFamily: "JetBrains Mono", color: "hsl(160 60% 90%)" }} />
                  <Bar dataKey="score" fill="hsl(160 100% 45%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Simulation cards */}
          <div>
            <h2 className="font-mono font-semibold text-lg text-foreground mb-4">Threat Simulations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {scenarios.map((scenario, idx) => {
                const Icon = scenario.icon;
                const completed = progress.completedScenarios.includes(scenario.id);
                const score = progress.scores[scenario.id];
                return (
                  <motion.div key={scenario.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
                    <Link to={scenario.path} className={`block bg-card border ${scenario.borderColor} rounded-lg p-6 hover:border-primary/50 transition-all group`}>
                      <div className="flex items-start justify-between mb-4">
                        <Icon className={`h-8 w-8 ${scenario.color}`} />
                        {completed && <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">{score}%</span>}
                      </div>
                      <h3 className="font-mono font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{scenario.title}</h3>
                      <p className="text-sm text-muted-foreground">{scenario.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Dashboard;
