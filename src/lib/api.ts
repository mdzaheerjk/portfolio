import { siteConfig } from "@/data/site";

export async function fetchGitHubUser(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(username: string) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "AI & Machine Learning Engineer",
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.profileImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gulbarga",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.kaggle,
      siteConfig.medium,
    ],
  };
}
