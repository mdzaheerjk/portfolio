import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:info.zaheerjk@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info.zaheerjk@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            10 // INITIATE COLLABORATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight leading-tight">
                Let's Build Something Intelligent Together.
              </h2>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                I'm open for Machine Learning / AI Engineer internships, research collaborations, open source projects, and cutting-edge GenAI development.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-all flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info.zaheerjk@gmail.com"
                      className="text-xs font-semibold text-neutral-900 hover:text-black transition-colors font-mono"
                    >
                      info.zaheerjk@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-neutral-500 hover:text-black hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-black" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href="https://github.com/zaheerjk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black shadow-2xs">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      GitHub
                    </span>
                    <span className="text-xs font-semibold text-neutral-900 group-hover:text-black transition-colors font-mono">
                      github.com/zaheerjk
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-all" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black shadow-2xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      LinkedIn Network
                    </span>
                    <span className="text-xs font-semibold text-neutral-900 group-hover:text-black transition-colors font-mono">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-all" />
              </a>

              {/* Resume Quick Trigger */}
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all flex items-center justify-between group text-left shadow-2xs cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-black shadow-2xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Curriculum Vitae
                    </span>
                    <span className="text-xs font-semibold text-neutral-900 group-hover:text-black transition-colors font-mono">
                      View Verified Resume & Credentials
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-all" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
            <h3 className="text-xl font-bold font-display text-neutral-950 tracking-tight mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Have a project, role, research question, or collaboration in mind? Fill in the details below.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-white border border-neutral-300 text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you! Your default mail client has opened with your message parameters. You can also email directly at <strong className="text-black font-mono">info.zaheerjk@gmail.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2.5 text-xs font-mono font-semibold bg-black text-white rounded-xl hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-neutral-800 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 font-mono transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-neutral-800 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 font-mono transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-neutral-800 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    placeholder="AI/ML Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 font-mono transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-neutral-800 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 focus:outline-none focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 font-mono transition-all"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="px-6 py-3 rounded-xl bg-black text-white text-xs font-mono font-bold hover:bg-neutral-800 transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
