import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zaheer JK for collaborations, internships, or inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
