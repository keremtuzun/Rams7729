/* ============================================================
   RAMs 7729 – Competitions & Results Page
   ============================================================ */

import { Trophy, MapPin, Calendar, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const COMP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/competition-action-Cdqbt5HaniwNwW3LWxrwt7.webp";

const seasons = [
  {
    year: "2026",
    events: [
      {
        name: "Bosphorus Regional",
        location: "Başakşehir, Istanbul, Türkiye",
        date: "March 6–8, 2026",
        rank: 30,
        record: "4-8-0",
        awards: [],
        tba: "https://www.thebluealliance.com/event/2026tuis2",
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        name: "Bosphorus Regional",
        location: "Istanbul, Türkiye",
        date: "March 2025",
        rank: 22,
        record: "6-6-0",
        awards: ["Excellence in Engineering (Nominee)"],
        tba: "https://www.thebluealliance.com/team/7729/2025",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        name: "Bosphorus Regional",
        location: "Istanbul, Türkiye",
        date: "March 2024",
        rank: 18,
        record: "7-5-0",
        awards: [],
        tba: "https://www.thebluealliance.com/team/7729/2024",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        name: "Bosphorus Regional",
        location: "Istanbul, Türkiye",
        date: "March 2023",
        rank: 15,
        record: "8-4-0",
        awards: [],
        tba: "https://www.thebluealliance.com/team/7729/2023",
      },
      {
        name: "Aerospace Valley Regional",
        location: "Lancaster, California, USA",
        date: "April 2023",
        rank: 28,
        record: "5-7-0",
        awards: [],
        tba: "https://www.thebluealliance.com/team/7729/2023",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        name: "Bosphorus Regional",
        location: "Istanbul, Türkiye",
        date: "March 2022",
        rank: 20,
        record: "6-6-0",
        awards: [],
        tba: "https://www.thebluealliance.com/team/7729/2022",
      },
    ],
  },
  {
    year: "2019",
    events: [
      {
        name: "Central Missouri Regional",
        location: "Columbia, Missouri, USA",
        date: "March 2019",
        rank: 14,
        record: "7-5-0",
        awards: ["Rookie All-Star Award 🏆"],
        tba: "https://www.thebluealliance.com/team/7729/2019",
      },
    ],
  },
];

export default function Competitions() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">On the Field</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">Competitions</span> & Results
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              A complete record of RAMs 7729's competitive journey — from our rookie season
              in Missouri to regional events in Turkey and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container">
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden border border-[oklch(0.28_0.008_260)]">
              <img
                src={COMP_IMG}
                alt="FRC competition arena with robots in action"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.008_260/0.6)] to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[oklch(0.11_0.008_260)] border-y border-[oklch(0.28_0.008_260)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "6+", label: "Seasons Competed" },
              { value: "8+", label: "Events Attended" },
              { value: "1", label: "Major Award" },
              { value: "2", label: "Countries Competed" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80}>
                <div>
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

      {/* Season Results */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">Season by Season</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-10"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Competition History
            </h2>
          </AnimatedSection>

          <div className="space-y-10">
            {seasons.map((season, si) => (
              <AnimatedSection key={season.year} delay={si * 60}>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <h3
                      className="text-3xl font-bold text-[oklch(0.82_0.18_85)]"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {season.year}
                    </h3>
                    <div className="flex-1 h-px bg-[oklch(0.28_0.008_260)]" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {season.events.map((event) => (
                      <div
                        key={event.name}
                        className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)] hover:border-[oklch(0.82_0.18_85/0.4)] transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div>
                            <h4
                              className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-1"
                              style={{ fontFamily: "Rajdhani, sans-serif" }}
                            >
                              {event.name}
                            </h4>
                            <div className="flex items-center gap-1.5 text-[oklch(0.6_0.01_260)] text-xs">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </div>
                          </div>
                          <a
                            href={event.tba}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[oklch(0.5_0.01_260)] hover:text-[oklch(0.82_0.18_85)] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        <div className="flex items-center gap-2 text-[oklch(0.55_0.01_260)] text-xs mb-4">
                          <Calendar className="w-3 h-3" />
                          {event.date}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-[oklch(0.14_0.008_260)] rounded p-3">
                            <div
                              className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider mb-1"
                              style={{ fontFamily: "JetBrains Mono, monospace" }}
                            >
                              Rank
                            </div>
                            <div
                              className="text-2xl font-bold text-[oklch(0.82_0.18_85)]"
                              style={{ fontFamily: "Rajdhani, sans-serif" }}
                            >
                              #{event.rank}
                            </div>
                          </div>
                          <div className="bg-[oklch(0.14_0.008_260)] rounded p-3">
                            <div
                              className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider mb-1"
                              style={{ fontFamily: "JetBrains Mono, monospace" }}
                            >
                              Record
                            </div>
                            <div
                              className="text-2xl font-bold text-[oklch(0.85_0.005_65)]"
                              style={{ fontFamily: "Rajdhani, sans-serif" }}
                            >
                              {event.record}
                            </div>
                          </div>
                        </div>

                        {event.awards.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {event.awards.map((award) => (
                              <span
                                key={award}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[oklch(0.82_0.18_85/0.12)] border border-[oklch(0.82_0.18_85/0.3)] text-[oklch(0.82_0.18_85)] text-xs"
                              >
                                <Trophy className="w-3 h-3" />
                                {award}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rookie Award Highlight */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="bg-[oklch(0.18_0.008_260)] rounded-xl p-8 lg:p-10 border border-[oklch(0.82_0.18_85/0.3)]">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-[oklch(0.82_0.18_85/0.15)] border border-[oklch(0.82_0.18_85/0.3)] flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-7 h-7 text-[oklch(0.82_0.18_85)]" />
                </div>
                <div>
                  <div className="section-label mb-2">Highlight Achievement</div>
                  <h3
                    className="text-3xl font-bold text-[oklch(0.94_0.005_65)] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    2019 Rookie All-Star Award
                  </h3>
                  <p className="text-[oklch(0.65_0.01_260)] leading-relaxed max-w-2xl">
                    In our very first FRC season, RAMs 7729 traveled to the Central Missouri Regional
                    in Columbia, Missouri and earned the Rookie All-Star Award. This award recognizes
                    a first-year team that exemplifies a young but strong team, including robot
                    performance, community involvement, and overall program quality. It was a
                    defining moment that set the standard for everything that followed.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
