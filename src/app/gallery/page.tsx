"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Badge } from "@/components/ui/badge";
import { galleryItems } from "@/data/misc";
import { X } from "lucide-react";

const categories = ["all", "project", "certificate", "event", "college", "workshop", "hackathon"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const lightboxItem = galleryItems.find((item) => item.id === lightbox);

  return (
    <PageTransition>
      <PageHeader
        title="Gallery"
        subtitle="Project screenshots, certificates, events, and workshops."
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.03}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightbox(item.id)}
                className="relative aspect-square rounded-xl overflow-hidden glass cursor-pointer w-full"
                aria-label={`View ${item.title}`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-3">
                  <p className="text-xs font-medium">{item.title}</p>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={lightboxItem.image} alt={lightboxItem.title} fill className="object-contain bg-card" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold">{lightboxItem.title}</h3>
                {lightboxItem.description && (
                  <p className="text-sm text-muted mt-1">{lightboxItem.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
