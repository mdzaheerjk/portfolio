"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications, certCategories } from "@/data/certifications";
import { formatDate } from "@/lib/utils";
import { ExternalLink, Award } from "lucide-react";

export default function CertificationsPage() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All"
    ? certifications
    : certifications.filter((c) => c.category === category);

  return (
    <PageTransition>
      <PageHeader
        title="Certifications"
        subtitle={`${certifications.length} certifications from leading platforms and institutions.`}
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {certCategories.map((cat) => (
              <Badge
                key={cat}
                variant={category === cat ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.05}>
              <Card className="overflow-hidden hover:border-primary/50 transition-colors h-full">
                <div className="relative h-40 bg-background/50 flex items-center justify-center">
                  <Image src={cert.image} alt={cert.title} width={80} height={80} />
                  <Award className="absolute top-3 right-3 w-5 h-5 text-primary" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted mb-3">{formatDate(cert.date)}</p>
                  <p className="text-xs text-muted mb-2">ID: {cert.credentialId}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skillsLearned.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[10px]">{skill}</Badge>
                    ))}
                  </div>
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="w-full">
                      <ExternalLink className="w-3 h-3" /> Verify
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
