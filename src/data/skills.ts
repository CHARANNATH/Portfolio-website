export interface Skill {
  category: string;
  skills: string[];
}

export const skillsByCategory: Skill[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    category: "Computer Science Fundamentals",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: "NPTEL Programming in Java",
    issuer: "NPTEL",
  },
  {
    name: "Google Project Management",
    issuer: "Coursera",
  },
  {
    name: "Microsoft Power BI Data Analyst",
    issuer: "Coursera",
  },
  {
    name: "Pearson MePro Level 10 Expert",
    issuer: "Pearson",
  },
];