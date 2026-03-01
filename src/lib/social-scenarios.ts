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
    title: "Emergency IT Call",
    sender: "Unknown caller - claims to be IT support",
    message:
      "Hello, this is Chris from IT security. Your workstation appears infected and we must verify your account right now. Please read your username and password so we can begin the fix.",
    isScam: true,
    redFlags: [
      "Legitimate IT teams do not request your password by phone",
      "Urgency is used to reduce careful thinking",
      "Caller identity cannot be independently verified",
      "Account recovery can be done through official support channels",
    ],
  },
  {
    id: "se2",
    type: "sms",
    title: "Delivery Retry Text",
    sender: "+1-800-555-0199",
    message:
      "Delivery Alert: We could not deliver your package today. Confirm your address now: http://usps-redeliver.xyz/track?id=83921",
    isScam: true,
    redFlags: [
      "Tracking link uses an unofficial domain",
      "Carrier name is used to create false trust",
      "Message is generic and lacks verifiable shipment details",
      "Link can lead to credential theft or payment fraud pages",
    ],
  },
  {
    id: "se3",
    type: "phone",
    title: "Card Verification Request",
    sender: "Bank number shown on caller ID (possibly spoofed)",
    message:
      "This is your bank's fraud service. We detected suspicious card activity. Press 1 to connect and provide your full card number and security code for verification.",
    isScam: true,
    redFlags: [
      "Banks do not request full card details by unsolicited call",
      "Caller ID can be spoofed to mimic trusted numbers",
      "Fear-based messaging pushes immediate compliance",
      "Safe practice is to hang up and call the official number on your card",
    ],
  },
  {
    id: "se4",
    type: "sms",
    title: "Authentication Code Message",
    sender: "Google",
    message: "G-482910 is your Google verification code. Do not share this code with anyone. https://g.co/verify",
    isScam: false,
    redFlags: [],
  },
  {
    id: "se5",
    type: "in-person",
    title: "Door Access Tailgating",
    sender: "Person in delivery uniform at a secure entry door",
    message:
      "\"I have a heavy delivery for the third floor and left my badge in the van. Could you hold the door so I can drop this quickly?\"",
    isScam: true,
    redFlags: [
      "Classic tailgating attempt at a controlled entrance",
      "Social pressure is used to bypass policy",
      "No badge or approved visitor process is presented",
      "Correct action is to direct the person to reception/security",
    ],
  },
  {
    id: "se6",
    type: "sms",
    title: "Clinic Appointment Reminder",
    sender: "Dr. Smith's Office",
    message:
      "Reminder: You have an appointment on March 15 at 2:00 PM. Reply C to confirm or R to reschedule. Reply STOP to opt out.",
    isScam: false,
    redFlags: [],
  },
];
