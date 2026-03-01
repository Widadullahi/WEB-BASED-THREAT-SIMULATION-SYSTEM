import { Shield, LogOut, BookOpen, Trophy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { clearProgress } from "@/lib/progress";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearProgress();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background scanline">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="font-mono font-bold text-primary text-glow">
              CYBERLAB
            </span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link to="/dashboard" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/simulations" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              Simulations
            </Link>
            <Link to="/resources" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors hidden sm:inline">
              <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> Learn</span>
            </Link>
            <Link to="/leaderboard" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors hidden sm:inline">
              <span className="flex items-center gap-1"><Trophy className="h-3.5 w-3.5" /> Ranks</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm font-mono text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
