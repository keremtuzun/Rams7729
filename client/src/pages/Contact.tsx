/* ============================================================
   RAMs 7729 – Contact Page
   ============================================================ */

import { useState } from "react";
import { Mail, MapPin, Instagram, Youtube, Github, Send, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.", {
        description: "Thank you for reaching out to RAMs 7729.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">Get in Touch</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">Contact</span> Us
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              Whether you're interested in joining the team, becoming a sponsor, or just want
              to learn more about RAMs 7729 — we'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)]">
                  <h3
                    className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded bg-[oklch(0.82_0.18_85/0.1)] border border-[oklch(0.82_0.18_85/0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[oklch(0.82_0.18_85)]" />
                      </div>
                      <div>
                        <div
                          className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider mb-0.5"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          Email
                        </div>
                        <a
                          href="mailto:rams7729@kocschool.k12.tr"
                          className="text-[oklch(0.82_0.005_65)] text-sm hover:text-[oklch(0.82_0.18_85)] transition-colors"
                        >
                          rams7729@kocschool.k12.tr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded bg-[oklch(0.82_0.18_85/0.1)] border border-[oklch(0.82_0.18_85/0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[oklch(0.82_0.18_85)]" />
                      </div>
                      <div>
                        <div
                          className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider mb-0.5"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          Location
                        </div>
                        <p className="text-[oklch(0.82_0.005_65)] text-sm">
                          Koç School
                          <br />
                          Tuzla, Istanbul, Türkiye
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)]">
                  <h3
                    className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    Follow Us
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: Instagram,
                        label: "Instagram",
                        handle: "@rams7729",
                        url: "https://instagram.com/rams7729",
                        desc: "Match highlights, build updates, team moments",
                      },
                      {
                        icon: Youtube,
                        label: "YouTube",
                        handle: "RAMs 7729",
                        url: "https://youtube.com",
                        desc: "Match videos, reveal videos, tutorials",
                      },
                      {
                        icon: Github,
                        label: "GitHub",
                        handle: "rams-7729",
                        url: "https://github.com/rams-7729",
                        desc: "Open-source robot code and projects",
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] hover:border-[oklch(0.82_0.18_85/0.4)] transition-all group"
                      >
                        <social.icon className="w-5 h-5 text-[oklch(0.6_0.01_260)] group-hover:text-[oklch(0.82_0.18_85)] transition-colors flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[oklch(0.85_0.005_65)] text-sm font-semibold">{social.handle}</div>
                          <div className="text-[oklch(0.5_0.01_260)] text-xs truncate">{social.desc}</div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[oklch(0.4_0.008_260)] group-hover:text-[oklch(0.82_0.18_85)] transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)]">
                  <h3
                    className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-4"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    External Profiles
                  </h3>
                  <div className="space-y-2">
                    {[
                      { label: "The Blue Alliance", url: "https://www.thebluealliance.com/team/7729" },
                      { label: "FIRST Inspires Profile", url: "https://frc-events.firstinspires.org/team/7729" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] hover:border-[oklch(0.82_0.18_85/0.4)] transition-all group text-sm"
                      >
                        <span className="text-[oklch(0.75_0.005_65)] group-hover:text-[oklch(0.82_0.18_85)] transition-colors">
                          {link.label}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-[oklch(0.4_0.008_260)] group-hover:text-[oklch(0.82_0.18_85)] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={80} className="lg:col-span-3">
              <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-7 border border-[oklch(0.28_0.008_260)] h-full">
                <h3
                  className="text-2xl font-bold text-[oklch(0.94_0.005_65)] mb-6"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[oklch(0.6_0.01_260)] text-xs uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] rounded px-4 py-2.5 text-[oklch(0.85_0.005_65)] text-sm placeholder:text-[oklch(0.4_0.008_260)] focus:outline-none focus:border-[oklch(0.82_0.18_85/0.6)] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[oklch(0.6_0.01_260)] text-xs uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] rounded px-4 py-2.5 text-[oklch(0.85_0.005_65)] text-sm placeholder:text-[oklch(0.4_0.008_260)] focus:outline-none focus:border-[oklch(0.82_0.18_85/0.6)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[oklch(0.6_0.01_260)] text-xs uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] rounded px-4 py-2.5 text-[oklch(0.85_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.82_0.18_85/0.6)] transition-colors"
                    >
                      <option value="" disabled>Select a topic...</option>
                      <option value="join">Joining the Team</option>
                      <option value="sponsor">Sponsorship Inquiry</option>
                      <option value="outreach">Outreach / Workshop Request</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[oklch(0.6_0.01_260)] text-xs uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] rounded px-4 py-2.5 text-[oklch(0.85_0.005_65)] text-sm placeholder:text-[oklch(0.4_0.008_260)] focus:outline-none focus:border-[oklch(0.82_0.18_85/0.6)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold w-full py-3 rounded flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[oklch(0.1_0.005_260)] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
