import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, ChevronRight } from "lucide-react";
import { getProgress, initProgress } from "@/lib/progress";
import { z } from "zod";

const usernameSchema = z
  .string()
  .trim()
  .min(2, "Username must be at least 2 characters")
  .max(30, "Username must be under 30 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores");

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const existing = getProgress();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const result = usernameSchema.safeParse(username);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    if (existing && existing.username === result.data) {
      navigate("/dashboard");
      return;
    }
    initProgress(result.data);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 space-y-5">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100">
            <Shield className="h-7 w-7 text-teal-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Start Training</h1>
          <p className="text-sm text-gray-600">Enter your username to continue to CyberGuard dashboard.</p>
        </div>

        {existing && (
          <div className="rounded-md border border-teal-200 bg-teal-50 px-3 py-2 text-xs text-teal-700">
            Last local user: <span className="font-semibold">{existing.username}</span>
          </div>
        )}

        <form onSubmit={handleStart} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">USERNAME</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                className="w-full bg-gray-50 border border-gray-300 rounded-md pl-9 pr-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="agent_name"
                maxLength={30}
                autoFocus
              />
            </div>
            {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2.5 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
          >
            Enter Dashboard
            <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
