import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { GitHubContent } from "@/components/sections/github-content";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "GitHub",
  description: "GitHub profile, repositories, and contribution activity.",
};

export default function GitHubPage() {
  return (
    <PageTransition>
      <PageHeader
        title="GitHub"
        subtitle={`Open source contributions and repositories by ${siteConfig.name}.`}
      />
      <GitHubContent />
    </PageTransition>
  );
}
