import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience including internships, freelancing, research, and open source.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
