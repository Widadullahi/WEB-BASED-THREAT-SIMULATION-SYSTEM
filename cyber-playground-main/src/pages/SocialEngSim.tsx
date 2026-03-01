import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import { socialEngScenarios, type SocialEngScenario } from "@/lib/social-scenarios";
import { getProgress, updateScore } from "@/lib/progress";
import { shuffleArray } from "@/lib/utils";

const typeIcon = (type: SocialEngScenario["type"]) => {
  switch (type) {
    case "phone": return Phone;
    case "sms": return MessageSquare;
    case "in-person": return Users;
  }
};

const SocialEngSim = () => {
  const navigate = useNavigate();
  const [sessionScenarios, setSessionScenarios] = useState<SocialEngScenario[]>(
    () => shuffleArray(socialEngScenarios),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  const scenario = sessionScenarios[currentIndex];
  const answered = answers[scenario.id] !== undefined;
  const Icon = typeIcon(scenario.type);

  const handleAnswer = (isScam: boolean) => {
    if (answered) return;
    setAnswers((prev) => ({ ...prev, [scenario.id]: isScam === scenario.isScam }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIndex < sessionScenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const correct = Object.values(answers).filter(Boolean).length;
      const score = Math.round((correct / sessionScenarios.length) * 100);
      updateScore("social-engineering", score);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setSessionScenarios(shuffleArray(socialEngScenarios));
    setCurrentIndex(0);
    setAnswers({});
    setShowFeedback(false);
    setFinished(false);
  };

  if (finished) {
    const correct = Object.values(answers).filter(Boolean).length;
    const score = Math.round((correct / sessionScenarios.length) * 100);
    return (
      <DashboardLayout>
        <PageTransition>
          <div className="max-w-lg mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border border-border glow-primary">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-foreground">Simulation Complete</h2>
            <p className="font-mono text-4xl font-bold text-primary text-glow">{score}%</p>
            <p className="text-muted-foreground">
              You correctly identified {correct} out of {sessionScenarios.length} scenarios.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={handleRestart} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-md font-mono text-sm hover:border-primary transition-colors">
                <RotateCcw className="h-4 w-4" /> Retry
              </button>
              <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary">
                Dashboard <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </PageTransition>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-mono font-bold text-lg text-foreground flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Social Engineering Detection
            </h2>
            <span className="font-mono text-sm text-muted-foreground">
              {currentIndex + 1} / {sessionScenarios.length}
            </span>
          </div>

          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((currentIndex + (answered ? 1 : 0)) / sessionScenarios.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Scenario card */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="border-b border-border px-4 py-3 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">{scenario.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">{scenario.sender}</p>
                  </div>
                  <span className="ml-auto text-xs font-mono px-2 py-0.5 bg-muted rounded text-muted-foreground capitalize">
                    {scenario.type}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-sm text-card-foreground whitespace-pre-wrap leading-relaxed">
                    {scenario.message}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              {!answered && (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 bg-card border border-success/30 text-success font-mono py-3 rounded-md hover:bg-success/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="h-5 w-5" /> Legitimate
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 bg-card border border-destructive/30 text-destructive font-mono py-3 rounded-md hover:bg-destructive/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldAlert className="h-5 w-5" /> Scam
                  </button>
                </div>
              )}

              {/* Feedback */}
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-lg p-4 space-y-2 ${
                    answers[scenario.id] ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {answers[scenario.id] ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    )}
                    <span className="font-mono font-semibold text-foreground">
                      {answers[scenario.id] ? "Correct!" : "Incorrect!"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This scenario is{" "}
                    <strong className={scenario.isScam ? "text-destructive" : "text-success"}>
                      {scenario.isScam ? "a social engineering attack" : "legitimate"}
                    </strong>.
                  </p>
                  {scenario.isScam && scenario.redFlags.length > 0 && (
                    <div className="space-y-1 mt-2">
                      <p className="text-xs font-mono text-muted-foreground">RED FLAGS:</p>
                      {scenario.redFlags.map((flag, i) => (
                        <p key={i} className="text-xs text-accent pl-3 font-mono">• {flag}</p>
                      ))}
                    </div>
                  )}
                  <button onClick={handleNext} className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-mono text-sm glow-primary">
                    {currentIndex < sessionScenarios.length - 1 ? "Next Scenario →" : "See Results →"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default SocialEngSim;
