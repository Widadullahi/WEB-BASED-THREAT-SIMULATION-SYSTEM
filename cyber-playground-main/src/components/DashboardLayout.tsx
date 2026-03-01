import { Shield, LogOut, BookOpen, Trophy, LayoutDashboard, FlaskConical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { clearProgress } from "@/lib/progress";
import { NavLink } from "@/components/NavLink";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearProgress();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background scanline">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex flex-col gap-3 py-3 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="font-mono font-bold text-primary text-glow">
              CYBERLAB
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-2">
            <NavLink
              to="/dashboard"
              className="text-xs md:text-sm font-mono text-muted-foreground hover:text-primary transition-colors px-2.5 py-1.5 rounded-md border border-transparent"
              activeClassName="text-primary border-border bg-primary/10"
            >
              <span className="flex items-center gap-1.5"><LayoutDashboard className="h-3.5 w-3.5" /> Dashboard</span>
            </NavLink>
            <NavLink
              to="/simulations"
              className="text-xs md:text-sm font-mono text-muted-foreground hover:text-primary transition-colors px-2.5 py-1.5 rounded-md border border-transparent"
              activeClassName="text-primary border-border bg-primary/10"
            >
              <span className="flex items-center gap-1.5"><FlaskConical className="h-3.5 w-3.5" /> Simulations</span>
            </NavLink>
            <NavLink
              to="/resources"
              className="text-xs md:text-sm font-mono text-muted-foreground hover:text-primary transition-colors px-2.5 py-1.5 rounded-md border border-transparent"
              activeClassName="text-primary border-border bg-primary/10"
            >
              <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> Learn</span>
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="text-xs md:text-sm font-mono text-muted-foreground hover:text-primary transition-colors px-2.5 py-1.5 rounded-md border border-transparent"
              activeClassName="text-primary border-border bg-primary/10"
            >
              <span className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5" /> Ranks</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-xs md:text-sm font-mono text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1 px-2.5 py-1.5 rounded-md"
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
