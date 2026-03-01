import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Mail,
  Key,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpenText,
  GraduationCap,
  Building2,
  Layers3,
  Activity,
  Trophy,
  Server,
  Database,
  BrainCircuit,
  Star,
} from "lucide-react";

const trainingModules = [
  {
    title: "Phishing Analysis",
    description: "Users analyze realistic emails to identify spoofing, urgency tricks, unsafe links, and data-harvesting requests.",
    icon: Mail,
    route: "/sim/phishing",
    tone: "teal",
  },
  {
    title: "Password Lab",
    description: "Users test password quality and learn how weak credentials are exposed to brute-force and dictionary attacks.",
    icon: Key,
    route: "/sim/password",
    tone: "cyan",
  },
  {
    title: "URL Safety Check",
    description: "Users inspect URLs for typo domains, suspicious paths, and deceptive structures before clicking.",
    icon: Globe,
    route: "/sim/url",
    tone: "slate",
  },
  {
    title: "Social Engineering",
    description: "Users practice spotting manipulation tactics in messages and conversations.",
    icon: Users,
    route: "/sim/social",
    tone: "amber",
  },
];

const toneStyles: Record<string, { card: string; icon: string; badge: string }> = {
  teal: {
    card: "border-teal-200/80 bg-gradient-to-br from-teal-50 to-white",
    icon: "text-teal-700 bg-white border border-teal-200",
    badge: "text-teal-700 bg-teal-100",
  },
  cyan: {
    card: "border-cyan-200/80 bg-gradient-to-br from-cyan-50 to-white",
    icon: "text-cyan-700 bg-white border border-cyan-200",
    badge: "text-cyan-700 bg-cyan-100",
  },
  slate: {
    card: "border-slate-200/80 bg-gradient-to-br from-slate-50 to-white",
    icon: "text-slate-700 bg-white border border-slate-200",
    badge: "text-slate-700 bg-slate-100",
  },
  amber: {
    card: "border-amber-200/80 bg-gradient-to-br from-amber-50 to-white",
    icon: "text-amber-700 bg-white border border-amber-200",
    badge: "text-amber-700 bg-amber-100",
  },
};

const projectStats = [
  { label: "Threat Modules", value: "4" },
  { label: "Methodology", value: "Agile Iterative" },
  { label: "Data Storage", value: "LocalStorage" },
  { label: "Deployment", value: "Vercel" },
];

const objectives = [
  "Design a simple and user-friendly interface for cybersecurity learning.",
  "Develop practical simulations for phishing, weak passwords, malicious URLs, and social engineering.",
  "Provide immediate feedback that explains mistakes and safer alternatives.",
  "Track user progress and performance to evaluate learning outcomes.",
];

const workflowSteps = [
  "Select a threat scenario.",
  "Analyze indicators in the scenario.",
  "Submit decision.",
  "Receive instant feedback and score.",
  "Save progress for future sessions.",
];

const architectureCards = [
  {
    title: "Client Application",
    text: "React-based interface for navigation, simulations, and feedback rendering.",
    icon: Server,
  },
  {
    title: "Data Persistence",
    text: "LocalStorage stores user attempts, scores, and progress history.",
    icon: Database,
  },
  {
    title: "Simulation Engine",
    text: "Scenario logic evaluates user responses and returns educational feedback.",
    icon: BrainCircuit,
  },
];

const contributions = [
  {
    title: "For Students",
    text: "Hands-on cybersecurity learning in a safe browser environment.",
    icon: GraduationCap,
  },
  {
    title: "For Institutions",
    text: "Lightweight platform suitable for awareness training and classroom demonstrations.",
    icon: Building2,
  },
  {
    title: "For Research",
    text: "Foundation for future extensions such as adaptive difficulty and broader threat categories.",
    icon: Layers3,
  },
  {
    title: "For Practice",
    text: "Moves learners from theory to practical decision-making behavior.",
    icon: Activity,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Landing = () => {
  const navigate = useNavigate();

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => goTo("home")} className="flex items-center gap-2 cursor-pointer">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-200">
              <Shield className="h-5 w-5 text-teal-700" />
            </span>
            <span className="font-bold text-lg tracking-tight">CyberGuard</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => goTo("overview")} className="text-sm text-slate-600 hover:text-teal-700">Overview</button>
            <button onClick={() => goTo("modules")} className="text-sm text-slate-600 hover:text-teal-700">Modules</button>
            <button onClick={() => goTo("methodology")} className="text-sm text-slate-600 hover:text-teal-700">Methodology</button>
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

      <section id="home" className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center relative">
          <motion.div className="lg:col-span-7 space-y-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
              <BookOpenText className="h-3.5 w-3.5" />
              Final Year Project: Web-Based Threat Simulation System
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Build Safer Online Habits Through
              <span className="block text-teal-700">Interactive Threat Scenarios</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              This platform is designed to improve cybersecurity awareness for students and non-technical users.
              It teaches practical response skills through controlled simulations and immediate feedback.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-7 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold inline-flex items-center gap-2 shadow-sm"
              >
                Enter Platform <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => goTo("overview")}
                className="px-7 py-3 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-semibold"
              >
                View Project Details
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-3 pt-2">
              {projectStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="font-semibold text-slate-900 mt-0.5">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50 p-6 shadow-lg" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.65, delay: 0.1 }}>
            <h3 className="font-semibold text-lg">Project Problem Statement</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Many users only understand cyber threats after they have already been affected. Existing training tools can be costly,
              technical, or inaccessible. This project addresses that gap with a simple, browser-based simulation system.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Safe and controlled learning environment",
                "Beginner-friendly simulations with practical context",
                "Immediate feedback for better retention",
                "Local progress tracking without complex setup",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-8" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-3">Project Objectives</h2>
            <p className="text-slate-600 text-lg">
              The landing page content below directly reflects the approved proposal objectives and expected academic output.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((item, i) => (
              <motion.div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-teal-700 mt-0.5" />
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-2xl mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-3">Core Simulation Modules</h2>
            <p className="text-slate-600">
              Each module represents a common real-world cyber threat and provides educational feedback after each user decision.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {trainingModules.map((module, idx) => {
              const Icon = module.icon;
              const style = toneStyles[module.tone];
              return (
                <motion.div
                  key={module.title}
                  className={`rounded-2xl border p-6 ${style.card} shadow-sm hover:shadow-md transition-shadow`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${style.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${style.badge}`}>Module</span>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{module.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{module.description}</p>
                  <button
                    onClick={() => navigate(module.route)}
                    className="mt-5 text-sm font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    Launch Module <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="methodology" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-3">Methodology and Workflow</h2>
            <p className="text-slate-600 mb-6">
              The project follows Agile development and a structured learning cycle for each simulation session.
            </p>
            <div className="space-y-3">
              {workflowSteps.map((step) => (
                <div key={step} className="flex items-start gap-2 text-slate-700 rounded-lg border border-slate-200 bg-white p-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <h3 className="text-xl font-semibold">System Architecture</h3>
            {architectureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold">{card.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-10" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-3">Expected Contributions</h2>
            <p className="text-slate-600">
              The project contributes to user education, institutional training, and future cybersecurity research extensions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {contributions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-slate-900 text-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-200 mb-4">
              <Star className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold mb-3">Project Clarifications</h2>
            <p className="text-slate-300">
              This platform is an educational simulation system and does not perform real offensive attacks.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Does this platform run real attacks?",
                a: "No. Every activity is controlled simulation for educational purposes only.",
              },
              {
                q: "Do learners need accounts?",
                a: "No. Progress is stored in the browser via LocalStorage.",
              },
              {
                q: "Who can use this system?",
                a: "Students, beginners, and non-technical users interested in practical cybersecurity awareness.",
              },
              {
                q: "Is this suitable for project defense?",
                a: "Yes. It demonstrates objectives, methodology, modules, and measurable user outcomes.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                <p className="font-semibold">{item.q}</p>
                <p className="text-slate-300 text-sm mt-1">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-700 bg-gradient-to-r from-teal-700/25 to-cyan-700/20 p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold">Ready to Begin the Training?</h3>
            <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
              Start any module and evaluate your cybersecurity decision-making skills.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => navigate("/login")}
                className="px-7 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold inline-flex items-center gap-2"
              >
                Start Practicing <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => goTo("modules")}
                className="px-7 py-3 rounded-lg border border-slate-500 text-slate-100 hover:bg-slate-800 font-semibold"
              >
                Review Modules
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
