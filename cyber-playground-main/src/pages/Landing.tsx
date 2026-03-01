import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://static.readdy.ai/image/07559bd7e62ffac92e35d8911f5a2be8/7047ff2c2d9f343197b11e061164ac52.png"
                alt="CyberGuard Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">CyberGuard</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollTo("features")}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Features
              </button>
              <button
                onClick={() => scrollTo("simulations")}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Simulations
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
                <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-teal-800 whitespace-nowrap">
                  Interactive Cybersecurity Training
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Cyber Threats in a Safe Environment
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learn to identify and respond to real-world cybersecurity threats through interactive simulations. Build your defense skills with phishing detection, password security, and malicious URL recognition.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg cursor-pointer whitespace-nowrap"
                >
                  Start Learning Now
                </button>
                <button
                  onClick={() => scrollTo("features")}
                  className="px-8 py-4 bg-white text-teal-600 text-base font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore Features
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">Threat Types</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">Browser-Based</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">Free</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">To Use</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20cybersecurity%20dashboard%20interface%20with%20threat%20detection%20analytics%20and%20security%20monitoring%20screens%20showing%20data%20visualization%20charts%20and%20alert%20systems%20in%20a%20clean%20professional%20tech%20environment%20with%20teal%20and%20cyan%20accent%20colors%20on%20light%20background%20minimalist%20design%20style&width=800&height=600&seq=hero1&orientation=landscape"
                  alt="Cybersecurity Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500 rounded-2xl opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500 rounded-2xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Training Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build strong cybersecurity awareness and defense skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-mail-line",
                title: "Phishing Detection",
                description:
                  "Learn to identify suspicious emails, fake sender addresses, and malicious attachments through realistic phishing scenarios.",
                tone: "teal",
              },
              {
                icon: "ri-lock-password-line",
                title: "Password Security",
                description:
                  "Practice creating strong passwords and understand common attack methods like brute force and dictionary attacks.",
                tone: "cyan",
              },
              {
                icon: "ri-link",
                title: "URL Analysis",
                description:
                  "Develop skills to recognize malicious URLs, domain spoofing, and suspicious link patterns before clicking.",
                tone: "teal",
              },
              {
                icon: "ri-line-chart-line",
                title: "Performance Analytics",
                description:
                  "Track your progress with detailed charts and metrics showing improvement across all threat categories.",
                tone: "cyan",
              },
              {
                icon: "ri-feedback-line",
                title: "Real-Time Feedback",
                description:
                  "Get instant feedback on your decisions with detailed explanations to reinforce learning and improve skills.",
                tone: "teal",
              },
              {
                icon: "ri-shield-check-line",
                title: "Safe Environment",
                description:
                  "Practice in a completely safe, simulated environment with no risk to real data or systems.",
                tone: "cyan",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`group p-8 rounded-2xl border hover:shadow-xl transition-all cursor-pointer ${
                  feature.tone === "teal"
                    ? "bg-gradient-to-br from-teal-50 to-white border-teal-100"
                    : "bg-gradient-to-br from-cyan-50 to-white border-cyan-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    feature.tone === "teal" ? "bg-teal-600" : "bg-cyan-600"
                  }`}
                >
                  <i className={`${feature.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="simulations" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Threat Simulations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on practice with the most common cybersecurity threats
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://readdy.ai/api/search-image?query=phishing%20email%20scam%20detection%20interface%20showing%20suspicious%20email%20with%20warning%20indicators%20and%20security%20alerts%20on%20clean%20white%20background%20with%20teal%20accent%20colors%20modern%20minimalist%20design&width=400&height=300&seq=sim1&orientation=landscape",
                alt: "Phishing Simulation",
                tag: "EMAIL SECURITY",
                title: "Phishing Emails",
                description:
                  "Identify fake emails, suspicious links, and social engineering tactics used by attackers to steal credentials.",
                tone: "teal",
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=password%20security%20strength%20meter%20interface%20with%20lock%20icons%20and%20security%20indicators%20showing%20password%20complexity%20analysis%20on%20clean%20white%20background%20with%20cyan%20accent%20colors%20modern%20design&width=400&height=300&seq=sim2&orientation=landscape",
                alt: "Password Attack Simulation",
                tag: "PASSWORD DEFENSE",
                title: "Password Attacks",
                description:
                  "Learn about weak passwords, brute force attacks, and best practices for creating unbreakable credentials.",
                tone: "cyan",
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=malicious%20url%20detection%20interface%20showing%20suspicious%20web%20links%20with%20security%20warnings%20and%20threat%20indicators%20on%20clean%20white%20background%20with%20teal%20accent%20colors%20modern%20design&width=400&height=300&seq=sim3&orientation=landscape",
                alt: "Malicious URL Simulation",
                tag: "WEB SECURITY",
                title: "Malicious URLs",
                description:
                  "Detect dangerous links, domain spoofing, and URL manipulation techniques before they compromise your security.",
                tone: "teal",
              },
            ].map((sim) => (
              <div key={sim.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={sim.image} alt={sim.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
                      sim.tone === "teal" ? "bg-teal-100" : "bg-cyan-100"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold whitespace-nowrap ${
                        sim.tone === "teal" ? "text-teal-700" : "text-cyan-700"
                      }`}
                    >
                      {sim.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{sim.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sim.description}</p>
                  <button
                    onClick={() => navigate("/login")}
                    className={`w-full px-6 py-3 text-white font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      sim.tone === "teal"
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-cyan-600 hover:bg-cyan-700"
                    }`}
                  >
                    Try Simulation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=cybersecurity%20education%20training%20concept%20with%20people%20learning%20digital%20security%20skills%20on%20computers%20showing%20charts%20and%20analytics%20in%20modern%20bright%20office%20environment%20with%20teal%20and%20cyan%20colors%20professional%20atmosphere&width=700&height=500&seq=about1&orientation=landscape"
                  alt="Cybersecurity Training"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Why Cybersecurity Training Matters</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In today&apos;s digital world, cyber threats are constantly evolving. Over 90% of successful cyberattacks start with human error. Our platform helps you develop the skills to recognize and respond to threats before they cause damage.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Beginner-Friendly",
                    description:
                      "No technical background required. Start learning from day one with intuitive simulations.",
                    tone: "teal",
                  },
                  {
                    title: "Practical Learning",
                    description:
                      "Learn by doing with realistic scenarios based on actual cybersecurity incidents.",
                    tone: "cyan",
                  },
                  {
                    title: "Track Progress",
                    description:
                      "Monitor your improvement with detailed analytics and performance metrics.",
                    tone: "teal",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.tone === "teal" ? "bg-teal-100" : "bg-cyan-100"
                      }`}
                    >
                      <i className={`ri-check-line text-xl ${item.tone === "teal" ? "text-teal-600" : "text-cyan-600"}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Strengthen Your Cyber Defense?
          </h2>
          <p className="text-xl text-teal-50 mb-10 leading-relaxed">
            Join thousands of users learning to protect themselves from cyber threats. Start your journey today.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-4 bg-white text-teal-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all hover:shadow-2xl cursor-pointer whitespace-nowrap"
          >
            Get Started for Free
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://static.readdy.ai/image/07559bd7e62ffac92e35d8911f5a2be8/7047ff2c2d9f343197b11e061164ac52.png"
                  alt="CyberGuard Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-bold text-white">CyberGuard</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Interactive cybersecurity training for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollTo("features")} className="text-gray-400 text-sm hover:text-teal-400 transition-colors cursor-pointer whitespace-nowrap">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("simulations")} className="text-gray-400 text-sm hover:text-teal-400 transition-colors cursor-pointer whitespace-nowrap">
                    Simulations
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("about")} className="text-gray-400 text-sm hover:text-teal-400 transition-colors cursor-pointer whitespace-nowrap">
                    About
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 text-sm">Documentation</span></li>
                <li><span className="text-gray-400 text-sm">Help Center</span></li>
                <li><span className="text-gray-400 text-sm">Privacy Policy</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex gap-3">
                <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <i className="ri-twitter-line text-lg text-white" />
                </span>
                <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <i className="ri-linkedin-line text-lg text-white" />
                </span>
                <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <i className="ri-github-line text-lg text-white" />
                </span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">© 2024 CyberGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
