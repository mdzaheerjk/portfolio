import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills in programming, machine learning, deep learning, NLP, computer vision, and generative AI.",
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
