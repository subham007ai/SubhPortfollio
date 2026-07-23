export type Stop = {
  id: string;
  year: string;
  school: string;
  detail: string;
  note?: string;
};

export const journey: Stop[] = [
  {
    id: "mlz",
    year: "—2017",
    school: "Mount Litera Zee School, Bhubaneswar",
    detail: "Pre-school through Class 6",
    note: "First brush with computers. Curiosity, not credentials."
  },
  {
    id: "gso",
    year: "2017–2020",
    school: "Gauri Shankar (Middle School)",
    detail: "Class 7 – early high school",
    note: "Foundations year — when the basics started to make sense."
  },
  {
    id: "bgs",
    year: "2020–2024",
    school: "Bridgewell Global School",
    detail: "10th in 2022 · 89% — 12th in 2024 · 68%",
    note: "Picked the science / CS lane. First lines of real code happened here."
  },
  {
    id: "soa",
    year: "Oct 2024 – Jan 2028",
    school: "Siksha 'O' Anusandhan University",
    detail: "B.Tech Computer Science · Artificial Intelligence & Machine Learning",
    note: "Where the AI/ML arc actually begins."
  }
];
