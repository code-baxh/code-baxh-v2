export type InteractiveTestimonial = {
  id: string;
  company: string;
  logo: string; // company name/icon
  quote: string;
  name: string;
  role: string;
  encryptedText?: string; // optional encrypted display
};

export const INTERACTIVE_TESTIMONIALS: InteractiveTestimonial[] = [
  {
    id: "solare",
    company: "Solare",
    logo: "solare",
    quote:
      "Evervault balances flexibility and security extremely well. They've built clean and thoughtful abstractions over advanced security foundations, and the product just works. We barely have to think about it.",
    name: "Sylvain Utard",
    role: "Head of Platform, Solare",
    encryptedText: "M2VyVmF1bHQgYmFsYW5jZXMgZmxleGliaWxpdHk...",
  },
  {
    id: "morse",
    company: "Morse",
    logo: "morse",
    quote:
      "The engineering team delivered a clean, scalable architecture that kept up with our rapid growth. Everything was documented and maintainable from day one.",
    name: "Mike Hudack",
    role: "CEO, Morse",
    encryptedText: "VGhlIGVuZ2luZWVyaW5nIHRlYW0gZGVsaXZlcmVk...",
  },
  {
    id: "xp",
    company: "XP",
    logo: "xp",
    quote:
      "Fast execution without cutting corners. They shipped a production-ready product in weeks, and the code quality was top-tier from the start.",
    name: "João Victor Martins",
    role: "Product Manager, XP",
    encryptedText: "RmFzdCBleGVjdXRpb24gd2l0aG91dCBjdXR0aW5nIGNvcm5lcnM...",
  },
  {
    id: "overwolf",
    company: "Overwolf",
    logo: "overwolf",
    quote:
      "They handled complex backend systems with confidence. The payment integration was bulletproof, and scaling wasn't an afterthought.",
    name: "Liam Wiltshire",
    role: "Head of Payments, Overwolf",
    encryptedText: "VGhleSBoYW5kbGVkIGNvbXBsZXggYmFja2VuZCBzeXN0ZW1z...",
  },
  {
    id: "biller-genie",
    company: "Biller Genie",
    logo: "biller-genie",
    quote:
      "AI features that don't hallucinate. Grounded, evaluated, and cost-controlled. They spent time getting it right.",
    name: "Tyler Trushin",
    role: "VP Software Dev, Biller Genie",
    encryptedText: "QUkgZmVhdHVyZXMgdGhhdCBkb24ndCBoYWxsdWNpbmF0ZS4u...",
  },
];
