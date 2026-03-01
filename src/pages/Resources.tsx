import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Shield,
  Mail,
  Key,
  Globe,
  Users,
  ExternalLink,
  AlertTriangle,
  Lock,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import PageTransition from "@/components/PageTransition";
import { getProgress } from "@/lib/progress";

const tips = [
  {
    icon: Mail,
    title: "Phishing Defense",
    color: "text-secondary",
    items: [
      "Always verify the sender's email address carefully",
      "Hover over links before clicking to see the real URL",
      "Be suspicious of urgent or threatening language",
      "Never provide passwords or sensitive data via email",
      "When in doubt, contact the sender through a known channel",
    ],
  },
  {
    icon: Key,
    title: "Password Security",
    color: "text-accent",
    items: [
      "Use a unique password for every account",
      "Make passwords at least 12 characters long",
      "Use a password manager to generate and store passwords",
      "Enable two-factor authentication (2FA) everywhere",
      "Never share passwords via email, chat, or phone",
    ],
  },
  {
    icon: Globe,
    title: "Safe Browsing",
    color: "text-destructive",
    items: [
      "Check for HTTPS and valid certificates",
      "Watch for misspelled domain names (homograph attacks)",
      "Avoid clicking shortened URLs from unknown sources",
      "Be cautious of .exe, .zip downloads from unfamiliar sites",
      "Use browser extensions that block malicious sites",
    ],
  },
  {
    icon: Users,
    title: "Social Engineering",
    color: "text-primary",
    items: [
      "Verify identity before sharing any information",
      "Don't let strangers tailgate into secure areas",
      "Be wary of unsolicited calls claiming to be IT or management",
      "Never plug in unknown USB drives",
      "Report suspicious contacts to your security team",
    ],
  },
  {
    icon: Wifi,
    title: "Network Safety",
    color: "text-secondary",
    items: [
      "Avoid using public Wi-Fi for sensitive activities",
      "Use a VPN when connecting to untrusted networks",
      "Keep your home router firmware updated",
      "Disable auto-connect for Wi-Fi and Bluetooth",
      "Monitor your network for unknown connected devices",
    ],
  },
  {
    icon: Lock,
    title: "Device Security",
    color: "text-accent",
    items: [
      "Keep your OS and software up to date",
      "Enable automatic security updates",
      "Use full-disk encryption on laptops",
      "Lock your device when stepping away",
      "Install reputable antivirus software",
    ],
  },
];

const resources = [
  { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
  { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
  { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
  { name: "Krebs on Security", url: "https://krebsonsecurity.com/" },
  { name: "SANS Security Awareness", url: "https://www.sans.org/security-awareness-training/" },
];

const Resources = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getProgress()) navigate("/");
  }, [navigate]);

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-mono font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Learning Resources
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Essential cybersecurity tips and best practices
            </p>
          </div>

          {/* Tips grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-card border border-border rounded-lg p-5 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${section.color}`} />
                    <h3 className="font-mono font-semibold text-foreground text-sm">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <AlertTriangle className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* External resources */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-mono font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              External Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ExternalLink className="h-4 w-4 group-hover:text-primary" />
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Resources;
