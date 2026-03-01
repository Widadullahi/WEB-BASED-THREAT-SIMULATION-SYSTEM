import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Terminal, Lock, ChevronRight } from "lucide-react";
import { getProgress, initProgress } from "@/lib/progress";
import { z } from "zod";

const usernameSchema = z
  .string()
  .trim()
  .min(2, "Username must be at least 2 characters")
  .max(30, "Username must be under 30 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores");

const Landing = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const result = usernameSchema.safeParse(username);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    const existing = getProgress();
    if (existing && existing.username === result.data) {
      navigate("/dashboard");
    } else {
      initProgress(result.data);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background scanline flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-4 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-border glow-primary">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-mono font-bold text-primary text-glow">
            CYBERLAB
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            Threat Simulation Training System
          </p>
        </div>

        {/* Terminal-style features */}
        <div
          className="bg-card border border-border rounded-lg p-4 space-y-2 font-mono text-sm animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span>system_init &gt; loading modules...</span>
          </div>
          <div className="text-primary pl-6">✓ phishing_detection.module</div>
          <div className="text-primary pl-6">✓ password_analysis.module</div>
          <div className="text-primary pl-6">✓ url_scanner.module</div>
          <div className="text-primary pl-6">✓ social_engineering.module</div>
          <div className="text-success pl-6">
            ✓ All systems operational
          </div>
        </div>

        {/* Login form */}
        <form
          onSubmit={handleStart}
          className="bg-card border border-border rounded-lg p-6 space-y-4 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Lock className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Enter credentials to begin
            </span>
          </div>
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-1">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              className="w-full bg-muted border border-border rounded-md px-3 py-2 font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="agent_name"
              maxLength={30}
              autoFocus
            />
            {error && (
              <p className="text-destructive text-xs font-mono mt-1">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-mono font-semibold py-2.5 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary"
          >
            Initialize Session
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>

        <p
          className="text-center text-xs text-muted-foreground font-mono animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          Safe learning environment • No real threats • Progress saved locally
        </p>
      </div>
    </div>
  );
};

export default Landing;
