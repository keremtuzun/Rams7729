/* ============================================================
   RAMs 7729 – Sponsors Page
   ============================================================ */

import { ExternalLink, Heart, Wrench, Plane, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const sponsorTiers = [
  {
    tier: "Platinum",
    color: "oklch(0.82 0.18 85)",
    bgColor: "oklch(0.82_0.18_85/0.08)",
    borderColor: "oklch(0.82_0.18_85/0.4)",
    sponsors: [
      {
        name: "Koç School",
        description: "Our founding institution and primary supporter, providing facilities, funding, and mentorship for the team since 2019.",
        website: "https://www.kocschool.k12.tr",
        category: "Education",
      },
    ],
  },
  {
    tier: "Gold",
    color: "oklch(0.75 0.12 75)",
    bgColor: "oklch(0.75_0.12_75/0.06)",
    borderColor: "oklch(0.75_0.12_75/0.3)",
    sponsors: [
      {
        name: "Koç Holding",
        description: "One of Turkey's largest conglomerates, supporting STEM education and innovation across the country.",
        website: "https://www.koc.com.tr",
        category: "Corporate",
      },
      {
        name: "FIRST Turkey",
        description: "The regional affiliate of FIRST Inspires, organizing FRC competitions and supporting teams across Turkey.",
        website: "https://www.firstturkiye.org",
        category: "Organization",
      },
    ],
  },
  {
    tier: "Silver",
    color: "oklch(0.7 0.005 260)",
    bgColor: "oklch(0.7_0.005_260/0.06)",
    borderColor: "oklch(0.7_0.005_260/0.3)",
    sponsors: [
      {
        name: "REV Robotics",
        description: "Provides motor controllers, power distribution hardware, and pneumatics components used throughout our robot.",
        website: "https://www.revrobotics.com",
        category: "Hardware",
      },
      {
        name: "Onshape",
        description: "Cloud-based CAD platform used by our design team to create and collaborate on robot models.",
        website: "https://www.onshape.com",
        category: "Software",
      },
      {
        name: "National Instruments",
        description: "Manufacturer of the roboRIO control system that powers every FRC robot.",
        website: "https://www.ni.com",
        category: "Hardware",
      },
    ],
  },
];

const impactAreas = [
  {
    icon: Wrench,
    title: "Parts & Materials",
    desc: "Aluminum extrusion, motors, sensors, fasteners, and raw materials for fabrication.",
    amount: "~40%",
  },
  {
    icon: Plane,
    title: "Travel & Competition",
    desc: "Registration fees, transportation, accommodation for regional and international events.",
    amount: "~35%",
  },
  {
    icon: BookOpen,
    title: "Tools & Equipment",
    desc: "Power tools, 3D printers, CNC machines, and workshop consumables.",
    amount: "~15%",
  },
  {
    icon: Heart,
    title: "Outreach & Programs",
    desc: "STEM workshops, community events, and educational materials.",
    amount: "~10%",
  },
];

export default function Sponsors() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">Our Partners</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">Sponsors</span> & Partners
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              RAMs 7729 is made possible by the generous support of organizations and companies
              that believe in the power of STEM education and student-led innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 lg:py-20">
        <div className="container space-y-16">
          {sponsorTiers.map((tier, ti) => (
            <AnimatedSection key={tier.tier} delay={ti * 100}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h2
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Rajdhani, sans-serif", color: tier.color }}
                  >
                    {tier.tier} Sponsors
                  </h2>
                  <div className="flex-1 h-px bg-[oklch(0.28_0.008_260)]" />
                </div>

                <div className={`grid grid-cols-1 ${tier.sponsors.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "lg:grid-cols-2"} gap-5`}>
                  {tier.sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="rounded-lg p-6 border transition-all hover:shadow-lg"
                      style={{
                        background: `oklch(0.18 0.008 260)`,
                        borderColor: `oklch(0.28 0.008 260)`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div
                            className="text-xs tracking-widest uppercase mb-1"
                            style={{ fontFamily: "JetBrains Mono, monospace", color: tier.color }}
                          >
                            {sponsor.category}
                          </div>
                          <h3
                            className="text-xl font-bold text-[oklch(0.94_0.005_65)]"
                            style={{ fontFamily: "Rajdhani, sans-serif" }}
                          >
                            {sponsor.name}
                          </h3>
                        </div>
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[oklch(0.5_0.01_260)] hover:text-[oklch(0.82_0.18_85)] transition-colors flex-shrink-0 mt-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{sponsor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How Sponsorship Helps */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Where Your Support Goes</div>
              <h2
                className="text-4xl font-bold text-[oklch(0.94_0.005_65)]"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Impact of Sponsorship
              </h2>
              <p className="text-[oklch(0.6_0.01_260)] mt-3 max-w-xl mx-auto">
                Every dollar of sponsorship goes directly to supporting student learning and
                competitive excellence. Here's how we allocate our resources:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 80}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)] text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.82_0.18_85/0.1)] border border-[oklch(0.82_0.18_85/0.25)] flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-5 h-5 text-[oklch(0.82_0.18_85)]" />
                  </div>
                  <div
                    className="text-3xl font-bold text-[oklch(0.82_0.18_85)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {area.amount}
                  </div>
                  <h4
                    className="text-base font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {area.title}
                  </h4>
                  <p className="text-[oklch(0.6_0.01_260)] text-xs leading-relaxed">{area.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="bg-[oklch(0.18_0.008_260)] rounded-xl p-8 lg:p-12 border border-[oklch(0.82_0.18_85/0.25)] text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-10" />
              <div className="relative">
                <div className="section-label mb-3 justify-center flex">Become a Partner</div>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-[oklch(0.94_0.005_65)] mb-4"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  Support the Next Generation of <span className="text-[oklch(0.82_0.18_85)]">Engineers</span>
                </h2>
                <p className="text-[oklch(0.65_0.01_260)] max-w-xl mx-auto mb-8 leading-relaxed">
                  Sponsoring RAMs 7729 connects your organization with talented, motivated students
                  and demonstrates your commitment to STEM education. We offer logo placement,
                  social media recognition, and direct engagement opportunities.
                </p>
                <a
                  href="mailto:rams7729@kocschool.k12.tr"
                  className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded text-sm"
                >
                  Contact Us About Sponsorship
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
