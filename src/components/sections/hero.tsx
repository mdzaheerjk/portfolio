"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, MapPin, ArrowDown } from "lucide-react";
import { siteConfig, typingRoles, heroStats } from "@/data/site";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/shared/social-icons";
import { FadeIn } from "@/components/ui/page-transition";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background" id="home">
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <p className="text-muted text-sm uppercase tracking-[0.2em] mb-6 font-medium">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1] tracking-tight text-primary">
                Hi, I&apos;m{" "}
                <span className="text-gradient">{siteConfig.name}</span>
              </h1>
              <p className="text-lg text-secondary mb-3 font-light">AI & Machine Learning Engineer</p>
              <div className="h-7 mb-8">
                <TypingAnimation texts={typingRoles} className="text-base text-muted font-light" />
              </div>
              <p className="text-muted mb-10 max-w-md leading-relaxed font-light">
                Building intelligent systems with machine learning, deep learning,
                and generative AI. Focused on clean engineering and real-world impact.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href={siteConfig.resumeUrl} download>
                  <Button variant="default" size="lg">
                    <Download className="w-4 h-4" /> Resume
                  </Button>
                </a>
                <Link href="/projects">
                  <Button variant="outline" size="lg">
                    <FolderOpen className="w-4 h-4" /> Projects
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg">
                    <Mail className="w-4 h-4" /> Contact
                  </Button>
                </Link>
              </div>

              <SocialIcons />
              <div className="flex items-center gap-2 mt-8 text-muted text-sm font-light">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {siteConfig.location}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} direction="left" className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end lg:translate-x-6 xl:translate-x-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: smoothEase }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-border overflow-hidden"
              >
                <Image
                  src={siteConfig.profileImage}
                  alt="Zaheer JK - Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "58% 18%" }}
                  priority
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        <div className="section-divider my-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {heroStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.08 * i}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(20,20,20,1)" }}
                transition={{ duration: 0.5, ease: smoothEase }}
                className="bg-card p-5 text-center"
              >
                <p className="text-2xl font-semibold text-primary tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] text-muted mt-1.5 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: smoothEase }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: smoothEase }}
        >
          <ArrowDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
