export type Hackathon = {
  id: string;
  name: string;
  result: string;
  year: string;
  venue: string;
  problem: string;
  team: string[];
  takeaway: string;
  photos: { src: string; caption: string; orientation: "wide" | "tall" | "square" }[];
};

export const hackathons: Hackathon[] = [
  {
    id: "soa-ideathon-2025",
    name: "SOA Ideathon 2025",
    result: "Runner-up · 2nd of 400+ teams · ₹20,000",
    year: "2025",
    venue: "SOA University",
    problem: "Domain-specific innovation pitch under tight constraints.",
    team: ["Soumya Sagar Nayak", "Sreyan P", "Saanjh Nayak", "Avijit Chowdhury", "Utkarsh Sinha"],
    takeaway:
      "From 400+ to 50 to 2. A reminder that an idea is cheap — the team that can defend it wins.",
    photos: [
      { src: "/gallery/soa-ideathon-cheque.jpg", caption: "Runner-up · ₹20,000 cheque · SOA Ideathon 2025", orientation: "wide" },
      { src: "/gallery/soa-ideathon02.jpg", caption: "On stage · SOA Ideathon 2025", orientation: "square" }
    ]
  },
  {
    id: "nalanda-24hr-2026",
    name: "24-Hour Hackathon · NIT Foundation",
    result: "Did not place — bigger lessons than the win",
    year: "2026",
    venue: "Nalanda Institute of Technology, Bhubaneswar",
    problem: "Detect illegal mining activity — a hard, multi-modal, real-world problem.",
    team: ["Soumya Sagar Nayak", "Utkarsh Sinha", "Muskan Gupta"],
    takeaway:
      "Tough questions in the panel showed exactly where the idea broke. Execution and edge cases — not the pitch — are the actual job.",
    photos: [
      { src: "/gallery/nalanda-team.jpg", caption: "Team build · 24h · Nalanda Institute of Technology", orientation: "wide" },
      { src: "/gallery/nalanda-02.jpg", caption: "Late-night working session · Nalanda 24h", orientation: "square" }
    ]
  }
];
