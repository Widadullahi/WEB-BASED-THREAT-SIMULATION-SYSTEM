import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { urlChallenges } from "@/lib/scenarios";
import { getProgress, updateScore } from "@/lib/progress";

const UrlSim = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  const challenge = urlChallenges[currentIndex];
  const answered = answers[challenge.id] !== undefined;

  const handleAnswer = (isMalicious: boolean) => {
    if (answered) return;
    setAnswers((prev) => ({
      ...prev,
      [challenge.id]: isMalicious === challenge.isMalicious,
    }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIndex < urlChallenges.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const correct = Object.values(answers).filter(Boolean).length;
      const score = Math.round((correct / urlChallenges.length) * 100);
      updateScore("malicious-url", score);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowFeedback(false);
    setFinished(false);
  };

  if (finished) {
    const correct = Object.values(answers).filter(Boolean).length;
    const score = Math.round((correct / urlChallenges.length) * 100);
    return (
      <DashboardLayout>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border border-border glow-primary">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-mono font-bold text-foreground">
            Simulation Complete
          </h2>
          <p className="font-mono text-4xl font-bold text-primary text-glow">
            {score}%
          </p>
          <p className="text-muted-foreground">
            You correctly identified {correct} out of {urlChallenges.length}{" "}
            URLs.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-md font-mono text-sm hover:border-primary transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> Retry
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary"
            >
              Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-mono font-bold text-lg text-foreground flex items-center gap-2">
            <Globe className="h-5 w-5 text-destructive" />
            Malicious URL Scanner
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {currentIndex + 1} / {urlChallenges.length}
          </span>
        </div>

        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / urlChallenges.length) * 100}%`,
            }}
          />
        </div>

        <p className="text-sm text-muted-foreground">
          Analyze the URL below and determine if it's safe or malicious.
        </p>

        {/* URL display */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="font-mono text-xs text-muted-foreground mb-2">URL:</p>
          <p className="font-mono text-sm text-foreground break-all bg-muted rounded px-3 py-2">
            {challenge.url}
          </p>
        </div>

        {/* Action buttons */}
        {!answered && (
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 bg-card border border-success/30 text-success font-mono py-3 rounded-md hover:bg-success/10 transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-5 w-5" /> Safe
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 bg-card border border-destructive/30 text-destructive font-mono py-3 rounded-md hover:bg-destructive/10 transition-colors flex items-center justify-center gap-2"
            >
              <ShieldAlert className="h-5 w-5" /> Malicious
            </button>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`border rounded-lg p-4 space-y-2 ${
              answers[challenge.id]
                ? "border-success/30 bg-success/5"
                : "border-destructive/30 bg-destructive/5"
            }`}
          >
            <div className="flex items-center gap-2">
              {answers[challenge.id] ? (
                <CheckCircle className="h-5 w-5 text-success" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-destructive" />
              )}
              <span className="font-mono font-semibold text-foreground">
                {answers[challenge.id] ? "Correct!" : "Incorrect!"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {challenge.explanation}
            </p>
            <button
              onClick={handleNext}
              className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary"
            >
              {currentIndex < urlChallenges.length - 1
                ? "Next URL →"
                : "See Results →"}
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UrlSim;
