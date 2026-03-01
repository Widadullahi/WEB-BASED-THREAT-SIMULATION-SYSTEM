import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Key, Eye, EyeOff, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { passwordCriteria, commonPasswords } from "@/lib/scenarios";
import { getProgress, updateScore } from "@/lib/progress";

const PasswordSim = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  const results = passwordCriteria.map((c) => ({
    ...c,
    passed: c.test(password),
  }));

  const passedCount = results.filter((r) => r.passed).length;
  const score = Math.round((passedCount / passwordCriteria.length) * 100);

  const strengthLabel =
    score >= 100 ? "Excellent" : score >= 66 ? "Good" : score >= 33 ? "Fair" : "Weak";
  const strengthColor =
    score >= 100
      ? "text-success"
      : score >= 66
      ? "text-primary"
      : score >= 33
      ? "text-accent"
      : "text-destructive";

  const handleSubmit = () => {
    if (password.length === 0) return;
    updateScore("password", score);
    setSubmitted(true);
  };

  const crackTime = () => {
    if (password.length === 0) return "—";
    if (commonPasswords.includes(password.toLowerCase())) return "< 1 second";
    const charset =
      (/[a-z]/.test(password) ? 26 : 0) +
      (/[A-Z]/.test(password) ? 26 : 0) +
      (/\d/.test(password) ? 10 : 0) +
      (/[^a-zA-Z\d]/.test(password) ? 32 : 0);
    const combinations = Math.pow(charset, password.length);
    const guessesPerSec = 1e10;
    const seconds = combinations / guessesPerSec;
    if (seconds < 1) return "< 1 second";
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
    return "millions of years";
  };

  return (
    <DashboardLayout>
      <div className="max-w-lg mx-auto space-y-6">
        <h2 className="font-mono font-bold text-lg text-foreground flex items-center gap-2">
          <Key className="h-5 w-5 text-accent" />
          Password Strength Analyzer
        </h2>

        <p className="text-sm text-muted-foreground">
          Type a password below to analyze its strength. Learn what makes a
          password secure.
        </p>

        {/* Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.slice(0, 128));
              setSubmitted(false);
            }}
            className="w-full bg-card border border-border rounded-md px-4 py-3 font-mono text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pr-12"
            placeholder="Enter a test password..."
            maxLength={128}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        {/* Strength bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-muted-foreground">
              STRENGTH
            </span>
            <span className={`font-mono text-sm font-bold ${strengthColor}`}>
              {password.length > 0 ? strengthLabel : "—"}
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                score >= 100
                  ? "bg-success"
                  : score >= 66
                  ? "bg-primary"
                  : score >= 33
                  ? "bg-accent"
                  : "bg-destructive"
              }`}
              style={{ width: `${password.length > 0 ? score : 0}%` }}
            />
          </div>
        </div>

        {/* Crack time */}
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <p className="font-mono text-xs text-muted-foreground mb-1">
            ESTIMATED CRACK TIME
          </p>
          <p className="font-mono text-xl font-bold text-primary text-glow">
            {crackTime()}
          </p>
        </div>

        {/* Criteria */}
        <div className="bg-card border border-border rounded-lg p-4 space-y-3">
          <p className="font-mono text-xs text-muted-foreground">CRITERIA</p>
          {results.map((r) => (
            <div key={r.id} className="flex items-center gap-2">
              {password.length > 0 ? (
                r.passed ? (
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                )
              ) : (
                <div className="h-4 w-4 rounded-full border border-muted-foreground/30 flex-shrink-0" />
              )}
              <span
                className={`font-mono text-sm ${
                  password.length > 0
                    ? r.passed
                      ? "text-foreground"
                      : "text-muted-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={password.length === 0}
            className="w-full bg-primary text-primary-foreground font-mono py-2.5 rounded-md hover:opacity-90 transition-opacity glow-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit Score
          </button>
        ) : (
          <div className="text-center space-y-3">
            <p className="font-mono text-primary text-glow">
              Score saved: {score}%
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary"
            >
              Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PasswordSim;
