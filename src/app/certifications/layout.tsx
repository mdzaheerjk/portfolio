import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications from Coursera, DeepLearning.AI, Google, IBM, AWS, and more.",
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
