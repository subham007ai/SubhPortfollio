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
    note: "Where I first started using computers and got curious about technology."
  },
  {
    id: "gso",
    year: "2017–2020",
    school: "Gauri Shankar (Middle School)",
    detail: "Class 7 – early high school",
    note: "Middle school years. Built a strong foundation in math and logical problem-solving."
  },
  {
    id: "bgs",
    year: "2020–2024",
    school: "Bridgewell Global School",
    detail: "10th in 2022 · 89% — 12th in 2024 · 68%",
    note: "High School (Science). Started learning Python, fundamental programming, and chose the AI/ML path."
  },
  {
    id: "soa",
    year: "Oct 2024 – Jan 2028",
    school: "Siksha 'O' Anusandhan University",
    detail: "B.Tech Computer Science · Artificial Intelligence & Machine Learning",
    note: "Undergraduate degree. Actively building machine learning models, shipping full-stack projects, and competing in hackathons."
  }
];
