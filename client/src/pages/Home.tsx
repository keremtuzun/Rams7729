/* ============================================================
   RAMs 7729 – Home Page
   Design: Dark Technical Command Center
   Sections: Hero, Pillars, Current Season, Stats, CTA
   ============================================================ */

import { Link } from "wouter";
import { ChevronRight, Cpu, Users, Globe, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/hero-robot-bkahc7tXS4xcRpjELDzZYA.webp";
const ROBOT_CAD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/robot-cad-XUwV5eL6pNC5hbSy5kmEF3.webp";
const COMPETITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/competition-action-Cdqbt5HaniwNwW3LWxrwt7.webp";

const pillars = [
  {
    icon: Cpu,
    title: "Engineering Excellence",
    desc: "From swerve drive systems to vision-guided automation, our mechanical and software teams push the boundaries of what student-built robots can achieve.",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    desc: "Over 30 students across mechanical, programming, electrical, CAD, media, and strategy sub-teams collaborate to build a robot in just six weeks.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    desc: "We run STEM workshops, mentor younger students, and compete internationally — bringing the excitement of robotics to our broader community.",
  },
];

const stats = [
  { value: "2019", label: "Rookie Year" },
  { value: "30+", label: "Team Members" },
  { value: "6+", label: "Seasons" },
  { value: "3+", label: "Awards Won" },
];

export default function Home() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="RAMs 7729 robot on the competition field"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.008_260/0.92)] via-[oklch(0.1_0.008_260/0.7)] to-[oklch(0.1_0.008_260/0.3)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.008_260)] via-transparent to-transparent" />
        </div>

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Content */}
        <div className="relative container pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="section-label mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[oklch(0.82_0.18_85)]" />
              FIRST Robotics Competition · Team #7729
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-6"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.02em" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">RAMs</span> 7729
              <br />
              <span className="text-[oklch(0.94_0.005_65)]">Robotics</span>
            </h1>

            <p className="text-[oklch(0.75_0.005_65)] text-lg leading-relaxed mb-8 max-w-lg">
              Designing, building, and programming competition robots from Koç School, Istanbul.
              Where engineering meets passion.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/robot" className="btn-gold px-6 py-3 rounded flex items-center gap-2 text-sm">
                See Our Robot <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-outline-gold px-6 py-3 rounded flex items-center gap-2 text-sm">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-[oklch(0.82_0.18_85)] to-transparent" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[oklch(0.11_0.008_260)] border-y border-[oklch(0.28_0.008_260)]">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div
                    className="text-3xl lg:text-4xl font-bold text-[oklch(0.82_0.18_85)] mb-1"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[oklch(0.55_0.01_260)] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="section-label mb-3">What Drives Us</div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[oklch(0.94_0.005_65)]"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Our Three Pillars
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 120}>
                <div className="card-hover bg-[oklch(0.18_0.008_260)] rounded-lg p-7 h-full">
                  <div className="w-12 h-12 rounded bg-[oklch(0.82_0.18_85/0.12)] border border-[oklch(0.82_0.18_85/0.25)] flex items-center justify-center mb-5">
                    <pillar.icon className="w-6 h-6 text-[oklch(0.82_0.18_85)]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Season Robot ── */}
      <section className="py-20 lg:py-28 bg-[oklch(0.11_0.008_260)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="section-label mb-3">2025 Season</div>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  Meet Our <span className="text-[oklch(0.82_0.18_85)]">Current Robot</span>
                </h2>
                <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-4">
                  Built for the 2025 FRC season, our robot features a swerve drive base for
                  omnidirectional movement, a multi-stage elevator mechanism, and a precision
                  intake-shooter system.
                </p>
                <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-7">
                  The programming team implemented autonomous path-following using odometry and
                  vision-assisted targeting with AprilTag detection, giving the robot competitive
                  accuracy on the field.
                </p>
                <Link
                  href="/robot"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded text-sm"
                >
                  Full Robot Breakdown <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative rounded-lg overflow-hidden border border-[oklch(0.28_0.008_260)]">
                <img
                  src={ROBOT_CAD_IMG}
                  alt="RAMs 7729 robot CAD render with subsystem labels"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[oklch(0.1_0.008_260)] to-transparent">
                  <span
                    className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    2025 Season · Swerve Drive · Elevator · Vision
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Competitions Preview ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={COMPETITION_IMG}
              alt="FRC competition arena with robots in action"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.008_260/0.9)] to-[oklch(0.1_0.008_260/0.5)]" />
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <AnimatedSection>
                  <div className="max-w-lg">
                    <div className="section-label mb-3">On the Field</div>
                    <h2
                      className="text-4xl lg:text-5xl font-bold text-white mb-4"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      Competing at the <span className="text-[oklch(0.82_0.18_85)]">Highest Level</span>
                    </h2>
                    <p className="text-[oklch(0.8_0.005_65)] mb-6 text-sm leading-relaxed">
                      From the Bosphorus Regional to international events, RAMs 7729 competes
                      with determination and sportsmanship at every tournament.
                    </p>
                    <Link
                      href="/competitions"
                      className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded text-sm"
                    >
                      View Results <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)] border-y border-[oklch(0.28_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-[oklch(0.82_0.18_85)]" />
                <div>
                  <div
                    className="text-2xl font-bold text-[oklch(0.94_0.005_65)]"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    2019 Rookie All-Star Award
                  </div>
                  <div className="text-[oklch(0.6_0.01_260)] text-sm">
                    Central Missouri Regional — Recognized for outstanding rookie performance
                  </div>
                </div>
              </div>
              <Link
                href="/competitions"
                className="btn-outline-gold px-6 py-2.5 rounded text-sm flex-shrink-0"
              >
                All Achievements
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative text-center">
          <AnimatedSection>
            <div
              className="text-xs tracking-[0.2em] uppercase text-[oklch(0.82_0.18_85)] mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Get Involved
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Ready to Build the Future?
            </h2>
            <p className="text-[oklch(0.6_0.01_260)] max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you're a student, sponsor, or STEM enthusiast — there's a place for you
              in the RAMs 7729 community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold px-8 py-3 rounded text-sm">
                Join the Team
              </Link>
              <Link href="/sponsors" className="btn-outline-gold px-8 py-3 rounded text-sm">
                Become a Sponsor
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
