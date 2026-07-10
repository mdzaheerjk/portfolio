import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive resume of Zaheer JK — AI/ML Engineer.",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
