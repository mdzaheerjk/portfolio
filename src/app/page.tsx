import { HeroSection } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeExtras } from "@/components/sections/home-extras";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <HomeExtras />
    </>
  );
}
