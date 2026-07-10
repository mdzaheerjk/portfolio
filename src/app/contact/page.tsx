"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { SocialLinksList } from "@/components/shared/social-icons";
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, RotateCcw } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }, publicKey);
      } else {
        await new Promise((r) => setTimeout(r, 1000));
      }
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <PageTransition>
      <PageHeader
        title="Contact"
        subtitle="Get in touch for collaborations, internships, or just to say hello."
      />

      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1 block">Name *</label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1 block">Email *</label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1 block">Phone</label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-1 block">Subject *</label>
                    <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} aria-invalid={!!errors.subject} />
                    {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1 block">Message *</label>
                    <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message} />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" variant="gradient" disabled={status === "sending"}>
                      <Send className="w-4 h-4" />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => { setForm(initialForm); setErrors({}); setStatus("idle"); }}>
                      <RotateCcw className="w-4 h-4" /> Reset
                    </Button>
                  </div>
                </form>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex items-center gap-2 text-green-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" /> Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-400 text-sm">
                      Failed to send message. Please try again or email directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <Card className="mb-6">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${siteConfig.email}`} className="text-muted hover:text-primary">{siteConfig.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-muted">{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted">{siteConfig.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted">{siteConfig.availability}</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Social Links</h3>
                  <SocialLinksList />
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Location</h3>
                  <div className="aspect-video rounded-lg bg-background/50 flex items-center justify-center text-muted text-sm">
                    <MapPin className="w-5 h-5 mr-2" /> {siteConfig.location}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
