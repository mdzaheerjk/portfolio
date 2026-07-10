import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on machine learning, deep learning, AI, NLP, and career development.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
