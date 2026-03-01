export interface ThreatScenario {
  id: string;
  type: "phishing" | "password" | "malicious-url";
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface PhishingEmail {
  id: string;
  from: string;
  subject: string;
  body: string;
  isPhishing: boolean;
  indicators: string[];
}

export interface UrlChallenge {
  id: string;
  url: string;
  isMalicious: boolean;
  explanation: string;
}

export const phishingEmails: PhishingEmail[] = [
  {
    id: "p1",
    from: "security@bankk-of-america.com",
    subject: "Urgent: Your account has been compromised!",
    body: "Dear Customer,\n\nWe have detected suspicious activity on your account. Please click the link below immediately to verify your identity and secure your account.\n\nhttp://bankk-of-america-secure.xyz/verify\n\nFailure to act within 24 hours will result in account suspension.\n\nBank of America Security Team",
    isPhishing: true,
    indicators: [
      "Misspelled domain (bankk-of-america)",
      "Urgency tactics ('immediately', '24 hours')",
      "Suspicious link (.xyz domain)",
      "Generic greeting ('Dear Customer')",
    ],
  },
  {
    id: "p2",
    from: "noreply@github.com",
    subject: "Your GitHub repository has a new pull request",
    body: "Hi there,\n\nA new pull request has been opened on your repository 'my-project'.\n\nPR #42: Fix typo in README.md\nOpened by @contributor123\n\nView the pull request on GitHub:\nhttps://github.com/user/my-project/pull/42\n\nGitHub",
    isPhishing: false,
    indicators: [],
  },
  {
    id: "p3",
    from: "paypa1-support@mail.com",
    subject: "Action Required: Confirm Your PayPal Transaction",
    body: "Hello,\n\nA payment of $499.99 was made from your PayPal account. If you did not authorize this transaction, click below to cancel:\n\nhttp://paypa1-verify.net/cancel-transaction\n\nIf you do not respond within 12 hours, the transaction will be finalized.\n\nPayPal Support",
    isPhishing: true,
    indicators: [
      "Sender uses 'paypa1' (number 1 instead of letter l)",
      "External domain (paypa1-verify.net) not PayPal",
      "Pressure tactic (12-hour deadline)",
      "Large unexpected transaction amount",
    ],
  },
  {
    id: "p4",
    from: "notifications@linkedin.com",
    subject: "You appeared in 5 searches this week",
    body: "Hi,\n\nYou appeared in 5 searches this week. See who's looking at your profile.\n\nhttps://www.linkedin.com/me/search-appearances\n\nLinkedIn Notifications",
    isPhishing: false,
    indicators: [],
  },
  {
    id: "p5",
    from: "admin@your-company-it.support",
    subject: "Password Expiry Notice - Immediate Action Required",
    body: "Dear Employee,\n\nYour network password will expire today. To avoid losing access, update your password now by clicking the link below:\n\nhttp://company-password-reset.tk/update\n\nIT Support Department",
    isPhishing: true,
    indicators: [
      "Unusual sender domain (.support TLD)",
      "Suspicious link (.tk domain - often used for phishing)",
      "Urgency ('expire today', 'Immediate Action')",
      "No personal identification",
    ],
  },
];

export const urlChallenges: UrlChallenge[] = [
  {
    id: "u1",
    url: "https://www.googIe.com/login",
    isMalicious: true,
    explanation: "Uses capital 'I' instead of lowercase 'l' in 'Google' — a common homograph attack.",
  },
  {
    id: "u2",
    url: "https://www.amazon.com/dp/B08N5WRWNW",
    isMalicious: false,
    explanation: "Legitimate Amazon product URL with standard format.",
  },
  {
    id: "u3",
    url: "http://192.168.1.1:8080/admin/free-iphone.exe",
    isMalicious: true,
    explanation: "Uses raw IP address, non-standard port, and serves an executable file (.exe).",
  },
  {
    id: "u4",
    url: "https://docs.google.com/spreadsheets/d/1abc123",
    isMalicious: false,
    explanation: "Standard Google Docs URL with proper HTTPS and domain.",
  },
  {
    id: "u5",
    url: "https://microsoft-security-update.totallylegit.ru/download",
    isMalicious: true,
    explanation: "Fake Microsoft domain on a .ru TLD with suspicious subdomain.",
  },
  {
    id: "u6",
    url: "https://www.dropbox.com/s/abc123/document.pdf",
    isMalicious: false,
    explanation: "Standard Dropbox shared file link.",
  },
  {
    id: "u7",
    url: "http://free-prizes-winner.click/claim-now",
    isMalicious: true,
    explanation: "Suspicious .click TLD, promises free prizes, uses HTTP instead of HTTPS.",
  },
  {
    id: "u8",
    url: "https://stackoverflow.com/questions/12345",
    isMalicious: false,
    explanation: "Standard Stack Overflow question URL.",
  },
];

export const commonPasswords = [
  "123456", "password", "123456789", "12345678", "12345",
  "1234567", "1234567890", "qwerty", "abc123", "111111",
  "password1", "iloveyou", "admin", "letmein", "welcome",
];

export const passwordCriteria = [
  { id: "length", label: "At least 12 characters", test: (p: string) => p.length >= 12 },
  { id: "uppercase", label: "Contains uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { id: "lowercase", label: "Contains lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { id: "number", label: "Contains a number", test: (p: string) => /\d/.test(p) },
  { id: "special", label: "Contains special character", test: (p: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p) },
  { id: "no-common", label: "Not a common password", test: (p: string) => !commonPasswords.includes(p.toLowerCase()) },
];
