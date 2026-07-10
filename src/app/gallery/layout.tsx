import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Project screenshots, certificates, events, and workshops.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
