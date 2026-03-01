import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, AlertTriangle, CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { phishingEmails, type PhishingEmail } from "@/lib/scenarios";
import { getProgress, updateScore } from "@/lib/progress";

const PhishingSim = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  const email = phishingEmails[currentIndex];
  const answered = answers[email.id] !== undefined;

  const handleAnswer = (isPhishing: boolean) => {
    if (answered) return;
    setAnswers((prev) => ({ ...prev, [email.id]: isPhishing === email.isPhishing }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIndex < phishingEmails.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const correct = Object.values(answers).filter(Boolean).length;
      const score = Math.round((correct / phishingEmails.length) * 100);
      updateScore("phishing", score);
      setShowResult(true);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setShowFeedback(false);
    setFinished(false);
  };

  if (showResult) {
    const correct = Object.values(answers).filter(Boolean).length;
    const score = Math.round((correct / phishingEmails.length) * 100);
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
            You correctly identified {correct} out of {phishingEmails.length} emails.
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
            <Mail className="h-5 w-5 text-secondary" />
            Phishing Detection
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {currentIndex + 1} / {phishingEmails.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / phishingEmails.length) * 100}%`,
            }}
          />
        </div>

        {/* Email display */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="border-b border-border px-4 py-3 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">FROM:</span>
              <span className="font-mono text-sm text-foreground">{email.from}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">SUBJ:</span>
              <span className="font-mono text-sm text-foreground font-semibold">
                {email.subject}
              </span>
            </div>
          </div>
          <div className="p-4">
            <pre className="font-mono text-sm text-card-foreground whitespace-pre-wrap leading-relaxed">
              {email.body}
            </pre>
          </div>
        </div>

        {/* Action buttons */}
        {!answered && (
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 bg-card border border-success/30 text-success font-mono py-3 rounded-md hover:bg-success/10 transition-colors"
            >
              ✓ Legitimate
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 bg-card border border-destructive/30 text-destructive font-mono py-3 rounded-md hover:bg-destructive/10 transition-colors"
            >
              ⚠ Phishing
            </button>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`border rounded-lg p-4 space-y-2 ${
              answers[email.id]
                ? "border-success/30 bg-success/5"
                : "border-destructive/30 bg-destructive/5"
            }`}
          >
            <div className="flex items-center gap-2">
              {answers[email.id] ? (
                <CheckCircle className="h-5 w-5 text-success" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-destructive" />
              )}
              <span className="font-mono font-semibold text-foreground">
                {answers[email.id] ? "Correct!" : "Incorrect!"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              This email is{" "}
              <strong className={email.isPhishing ? "text-destructive" : "text-success"}>
                {email.isPhishing ? "a phishing attempt" : "legitimate"}
              </strong>
              .
            </p>
            {email.isPhishing && email.indicators.length > 0 && (
              <div className="space-y-1 mt-2">
                <p className="text-xs font-mono text-muted-foreground">
                  RED FLAGS:
                </p>
                {email.indicators.map((ind, i) => (
                  <p key={i} className="text-xs text-accent pl-3 font-mono">
                    • {ind}
                  </p>
                ))}
              </div>
            )}
            <button
              onClick={handleNext}
              className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary"
            >
              {currentIndex < phishingEmails.length - 1 ? "Next Email →" : "See Results →"}
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PhishingSim;
