import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Hackathons, competitions, awards, badges, and recognition.",
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
