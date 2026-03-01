export interface SocialEngScenario {
  id: string;
  type: "phone" | "sms" | "in-person";
  title: string;
  message: string;
  sender: string;
  isScam: boolean;
  redFlags: string[];
}

export const socialEngScenarios: SocialEngScenario[] = [
  {
    id: "se1",
    type: "phone",
    title: "IT Department Call",
    sender: "Unknown Caller — claims to be IT Support",
    message:
      "Hi, this is Mike from IT. We've detected a virus on your workstation. I need your login credentials to run a remote scan immediately, or we'll have to disable your account.",
    isScam: true,
    redFlags: [
      "IT would never ask for your password over the phone",
      "Creates urgency with threat of account disabling",
      "No way to verify caller identity",
      "Legitimate IT can access your machine without your password",
    ],
  },
  {
    id: "se2",
    type: "sms",
    title: "Package Delivery",
    sender: "+1-800-555-0199",
    message:
      "USPS: Your package could not be delivered. Confirm your address here to reschedule: http://usps-redeliver.xyz/track?id=83921",
    isScam: true,
    redFlags: [
      "Suspicious URL (.xyz domain, not usps.com)",
      "USPS uses official apps or usps.com for tracking",
      "Generic message with no tracking number details",
      "Link likely leads to credential harvesting page",
    ],
  },
  {
    id: "se3",
    type: "phone",
    title: "Bank Fraud Alert",
    sender: "Your bank's official number (spoofed)",
    message:
      "This is an automated message from your bank. We have detected unauthorized transactions on your account. Press 1 to speak with a fraud specialist and provide your card number for verification.",
    isScam: true,
    redFlags: [
      "Banks never ask for full card numbers over the phone",
      "Caller ID can be spoofed to show legitimate numbers",
      "Creates panic about unauthorized transactions",
      "Always hang up and call the number on your card instead",
    ],
  },
  {
    id: "se4",
    type: "sms",
    title: "Two-Factor Code",
    sender: "Google",
    message: "G-482910 is your Google verification code. Don't share this code with anyone. https://g.co/verify",
    isScam: false,
    redFlags: [],
  },
  {
    id: "se5",
    type: "in-person",
    title: "Tailgating Attempt",
    sender: "Person in delivery uniform at secure door",
    message:
      '"Hey, I\'ve got a big delivery for the 3rd floor but I forgot my access badge in the truck. Can you hold the door for me? I\'ll just be a minute."',
    isScam: true,
    redFlags: [
      "Classic tailgating / piggybacking social engineering",
      "Uses social pressure and a plausible excuse",
      "Delivery personnel should have visitor badges",
      "Always direct unknown people to reception/security",
    ],
  },
  {
    id: "se6",
    type: "sms",
    title: "Appointment Reminder",
    sender: "Dr. Smith's Office",
    message:
      "Reminder: You have an appointment with Dr. Smith on March 15 at 2:00 PM. Reply C to confirm or R to reschedule. Reply STOP to opt out.",
    isScam: false,
    redFlags: [],
  },
];
