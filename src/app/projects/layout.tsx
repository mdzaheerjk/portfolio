import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI/ML projects spanning machine learning, deep learning, NLP, computer vision, and generative AI.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
