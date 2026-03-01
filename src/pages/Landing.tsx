import { useNavigate } from "react-router-dom";
import {
  Shield,
  Mail,
  Key,
  Globe,
  Users,
  LineChart,
  CheckCircle2,
  ArrowRight,
  BookOpenText,
  Clock3,
  Laptop,
} from "lucide-react";

const trainingModules = [
  {
    title: "Phishing Analysis",
    description: "Practice identifying suspicious senders, fake urgency, and unsafe links in email scenarios.",
    icon: Mail,
    route: "/sim/phishing",
    tone: "teal",
  },
  {
    title: "Password Lab",
    description: "Test password quality and learn patterns attackers use to crack weak credentials.",
    icon: Key,
    route: "/sim/password",
    tone: "cyan",
  },
  {
    title: "URL Safety Check",
    description: "Inspect domains and paths to decide whether a link is trusted or malicious.",
    icon: Globe,
    route: "/sim/url",
    tone: "slate",
  },
  {
    title: "Social Engineering",
    description: "Detect manipulation techniques in phone, SMS, and in-person conversations.",
    icon: Users,
    route: "/sim/social",
    tone: "amber",
  },
];

const toneStyles: Record<string, { card: string; icon: string; badge: string }> = {
  teal: {
    card: "border-teal-200 bg-teal-50/60",
    icon: "text-teal-700 bg-white border border-teal-200",
    badge: "text-teal-700 bg-teal-100",
  },
  cyan: {
    card: "border-cyan-200 bg-cyan-50/60",
    icon: "text-cyan-700 bg-white border border-cyan-200",
    badge: "text-cyan-700 bg-cyan-100",
  },
  slate: {
    card: "border-slate-200 bg-slate-50/80",
    icon: "text-slate-700 bg-white border border-slate-200",
    badge: "text-slate-700 bg-slate-100",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/70",
    icon: "text-amber-700 bg-white border border-amber-200",
    badge: "text-amber-700 bg-amber-100",
  },
};

const Landing = () => {
  const navigate = useNavigate();

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => goTo("home")} className="flex items-center gap-2 cursor-pointer">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 border border-teal-200">
              <Shield className="h-5 w-5 text-teal-700" />
            </span>
            <span className="font-bold text-lg">CyberGuard</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => goTo("modules")} className="text-sm text-slate-600 hover:text-teal-700">Modules</button>
            <button onClick={() => goTo("approach")} className="text-sm text-slate-600 hover:text-teal-700">Approach</button>
            <button onClick={() => goTo("faq")} className="text-sm text-slate-600 hover:text-teal-700">FAQ</button>
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold"
            >
              Start Training
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700">
              <BookOpenText className="h-3.5 w-3.5" />
              Cybersecurity Learning Playground
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build Safer Online Habits Through
              <span className="block text-teal-700">Interactive Threat Scenarios</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              CyberGuard helps students and beginners practice real-world security decisions without exposing real systems to risk.
              You get immediate feedback, clear scoring, and progress tracking in your browser.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-7 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold inline-flex items-center gap-2"
              >
                Enter Platform <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => goTo("modules")}
                className="px-7 py-3 rounded-lg border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 font-semibold"
              >
                View Modules
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { label: "Modules", value: "4" },
                { label: "Local Save", value: "100%" },
                { label: "Skill Level", value: "Beginner+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                  <p className="font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <p className="font-semibold">Training Snapshot</p>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Live Demo</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { label: "Phishing Detection", score: 78, color: "bg-teal-500" },
                { label: "Password Security", score: 90, color: "bg-cyan-500" },
                { label: "URL Safety", score: 64, color: "bg-amber-500" },
                { label: "Social Engineering", score: 72, color: "bg-slate-500" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-semibold">{row.score}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className={`h-full ${row.color}`} style={{ width: `${row.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                <LineChart className="h-4 w-4 text-teal-700 mx-auto mb-1" />
                <p className="text-xs text-slate-500">Progress</p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                <Clock3 className="h-4 w-4 text-cyan-700 mx-auto mb-1" />
                <p className="text-xs text-slate-500">Realtime</p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                <Laptop className="h-4 w-4 text-slate-700 mx-auto mb-1" />
                <p className="text-xs text-slate-500">Browser</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold mb-3">Core Simulation Modules</h2>
            <p className="text-slate-600">
              Each module is focused on one common attack pattern and gives explanations for every decision, so learning is practical and measurable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {trainingModules.map((module) => {
              const Icon = module.icon;
              const style = toneStyles[module.tone];
              return (
                <div key={module.title} className={`rounded-xl border p-5 ${style.card}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${style.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${style.badge}`}>
                      Practice
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{module.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{module.description}</p>
                  <button
                    onClick={() => navigate("/login")}
                    className="mt-4 text-sm font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    Launch Module <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">How Learning Works</h2>
            <p className="text-slate-600 mb-6">
              The platform uses short scenario cycles: identify, decide, review feedback, and improve.
              This supports practical cybersecurity awareness without technical overload.
            </p>
            <div className="space-y-3">
              {[
                "Choose a threat simulation",
                "Analyze scenario details",
                "Submit your decision",
                "Review instant feedback",
                "Track score progression",
              ].map((step) => (
                <div key={step} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold mb-4">Who This Is For</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Students learning cybersecurity basics",
                "Non-technical users improving awareness",
                "Teams running lightweight training",
                "Lecturers demonstrating attack patterns",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-3 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-slate-900 text-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick FAQ</h2>
          <div className="space-y-3">
            {[
              {
                q: "Does this platform run real attacks?",
                a: "No. All scenarios are controlled simulations designed for safe learning only.",
              },
              {
                q: "Do I need an account?",
                a: "No account is required. Progress is stored locally in your browser.",
              },
              {
                q: "Can beginners use this?",
                a: "Yes. The platform is designed to be clear, practical, and beginner-friendly.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                <p className="font-semibold">{item.q}</p>
                <p className="text-slate-300 text-sm mt-1">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/login")}
              className="px-7 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold inline-flex items-center gap-2"
            >
              Start Practicing <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
