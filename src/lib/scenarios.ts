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
    body: "Dear Customer,\n\nOur fraud system flagged unusual account activity. To protect your access, confirm your identity immediately using the secure link below.\n\nhttp://bankk-of-america-secure.xyz/verify\n\nIf no action is taken within 24 hours, account access may be restricted.\n\nBank of America Security Team",
    isPhishing: true,
    indicators: [
      "Look-alike sender domain (bankk-of-america)",
      "Urgency and deadline pressure",
      "Suspicious verification link on .xyz",
      "Generic greeting instead of your actual name",
    ],
  },
  {
    id: "p2",
    from: "noreply@github.com",
    subject: "Your GitHub repository has a new pull request",
    body: "Hi there,\n\nA new pull request was opened on your repository 'my-project'.\n\nPR #42: Fix typo in README.md\nOpened by @contributor123\n\nReview it on GitHub:\nhttps://github.com/user/my-project/pull/42\n\nGitHub",
    isPhishing: false,
    indicators: [],
  },
  {
    id: "p3",
    from: "paypa1-support@mail.com",
    subject: "Action Required: Confirm Your PayPal Transaction",
    body: "Hello,\n\nA charge of $499.99 was requested from your PayPal account. If this transaction is not yours, cancel it now at the link below.\n\nhttp://paypa1-verify.net/cancel-transaction\n\nNo response within 12 hours will be treated as confirmation.\n\nPayPal Support",
    isPhishing: true,
    indicators: [
      "Brand typo: 'paypa1' uses 1 instead of l",
      "Domain is not an official PayPal domain",
      "Short deadline used to force rushed action",
      "Unexpected high-value transaction lure",
    ],
  },
  {
    id: "p4",
    from: "notifications@linkedin.com",
    subject: "You appeared in 5 searches this week",
    body: "Hi,\n\nYou appeared in 5 searches this week. View profile activity here:\n\nhttps://www.linkedin.com/me/search-appearances\n\nLinkedIn Notifications",
    isPhishing: false,
    indicators: [],
  },
  {
    id: "p5",
    from: "admin@your-company-it.support",
    subject: "Password Expiry Notice - Immediate Action Required",
    body: "Dear Employee,\n\nYour network password is set to expire today. To avoid a lockout, update it now using the link below:\n\nhttp://company-password-reset.tk/update\n\nIT Support Department",
    isPhishing: true,
    indicators: [
      "Unusual sender domain for internal IT",
      "Password reset link uses suspicious .tk domain",
      "Urgent phrasing to discourage verification",
      "No employee-specific details in the message",
    ],
  },
];

export const urlChallenges: UrlChallenge[] = [
  {
    id: "u1",
    url: "https://www.googIe.com/login",
    isMalicious: true,
    explanation: "The domain swaps lowercase 'l' with capital 'I' in 'Google', a common homograph trick.",
  },
  {
    id: "u2",
    url: "https://www.amazon.com/dp/B08N5WRWNW",
    isMalicious: false,
    explanation: "This follows a normal Amazon product URL format on the official domain over HTTPS.",
  },
  {
    id: "u3",
    url: "http://192.168.1.1:8080/admin/free-iphone.exe",
    isMalicious: true,
    explanation: "Red flags include a raw IP address, unusual port, and executable file download bait.",
  },
  {
    id: "u4",
    url: "https://docs.google.com/spreadsheets/d/1abc123",
    isMalicious: false,
    explanation: "This matches a standard Google Docs URL pattern with the expected domain and HTTPS.",
  },
  {
    id: "u5",
    url: "https://microsoft-security-update.totallylegit.ru/download",
    isMalicious: true,
    explanation: "It imitates Microsoft via subdomain wording on an unrelated domain and TLD.",
  },
  {
    id: "u6",
    url: "https://www.dropbox.com/s/abc123/document.pdf",
    isMalicious: false,
    explanation: "This is consistent with a typical Dropbox shared file link on the official domain.",
  },
  {
    id: "u7",
    url: "http://free-prizes-winner.click/claim-now",
    isMalicious: true,
    explanation: "Giveaway bait, suspicious domain, and no HTTPS encryption make this high risk.",
  },
  {
    id: "u8",
    url: "https://stackoverflow.com/questions/12345",
    isMalicious: false,
    explanation: "This is a standard Stack Overflow question URL on the expected domain.",
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
