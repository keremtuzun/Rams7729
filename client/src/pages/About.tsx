/* ============================================================
   RAMs 7729 – About the Team Page
   ============================================================ */

import { Users, Wrench, Code2, Zap, PenTool, Camera, Target } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/team-workshop-KrrMDxPamSFM37KfrU9FLv.webp";

const subteams = [
  {
    icon: Wrench,
    name: "Mechanical",
    desc: "Designs and fabricates the physical robot structure, drivetrain, and game-specific mechanisms using aluminum extrusion, CNC machining, and 3D printing.",
    count: "8 members",
  },
  {
    icon: Code2,
    name: "Programming",
    desc: "Writes the robot control code in Java using WPILib, implementing autonomous routines, sensor fusion, and driver-assist features.",
    count: "6 members",
  },
  {
    icon: Zap,
    name: "Electrical",
    desc: "Designs and builds the robot's electrical system, including motor controllers, power distribution, sensors, and wiring harnesses.",
    count: "5 members",
  },
  {
    icon: PenTool,
    name: "CAD",
    desc: "Creates detailed 3D models of every robot component using Onshape, enabling virtual prototyping and precise manufacturing.",
    count: "5 members",
  },
  {
    icon: Camera,
    name: "Media",
    desc: "Documents the team's journey through photography, video production, and social media, sharing our story with the world.",
    count: "4 members",
  },
  {
    icon: Target,
    name: "Strategy",
    desc: "Analyzes game rules, scouting data, and alliance strategies to give our drive team the competitive edge during matches.",
    count: "4 members",
  },
];

const timeline = [
  { year: "2019", event: "Team founded at Koç School, Istanbul. Competed at Central Missouri Regional and won the Rookie All-Star Award." },
  { year: "2020", event: "Season cancelled due to COVID-19. Team continued virtual design and programming challenges." },
  { year: "2021", event: "Returned to competition with a new robot design. Participated in the Bosphorus Regional." },
  { year: "2022", event: "Expanded team roster to 30+ members. Introduced swerve drive for the first time." },
  { year: "2023", event: "Competed at the Bosphorus Regional and traveled to the Aerospace Valley Regional in California." },
  { year: "2024", event: "Implemented vision-based game piece detection and improved autonomous scoring routines." },
  { year: "2025", event: "Competing in the 2025 FRC season with our most advanced robot to date." },
];

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">Who We Are</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              About <span className="text-[oklch(0.82_0.18_85)]">RAMs 7729</span>
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              A student-driven FIRST Robotics Competition team from Koç School in Tuzla, Istanbul,
              Turkey — competing since 2019 with passion, precision, and purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story + Workshop Image */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={WORKSHOP_IMG}
                alt="RAMs 7729 students working in the robotics workshop"
                className="w-full rounded-lg border border-[oklch(0.28_0.008_260)] aspect-video object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="section-label mb-3">Our Story</div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Built by Students, <span className="text-[oklch(0.82_0.18_85)]">For Students</span>
              </h2>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-4">
                RAMs 7729 was founded in 2019 at Koç School, a leading educational institution in
                Tuzla, Istanbul. The team was created to give students hands-on experience in
                engineering, programming, and teamwork through the FIRST Robotics Competition —
                one of the world's premier STEM competitions for high school students.
              </p>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-4">
                In our very first season, we traveled to the United States and competed at the
                Central Missouri Regional, where we earned the prestigious Rookie All-Star Award —
                a recognition of outstanding performance and community engagement by a first-year team.
              </p>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed">
                Today, RAMs 7729 has grown to over 30 student members across six specialized
                sub-teams. We compete at regional events in Turkey and internationally, always
                striving to push our engineering capabilities further each season.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-teams */}
      <section className="py-16 lg:py-24 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Team Structure</div>
              <h2
                className="text-4xl font-bold text-[oklch(0.94_0.005_65)]"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Our Sub-Teams
              </h2>
              <p className="text-[oklch(0.6_0.01_260)] mt-3 max-w-xl mx-auto">
                Every student finds their place on RAMs 7729. Our six specialized sub-teams
                cover every aspect of building and competing with a world-class robot.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subteams.map((team, i) => (
              <AnimatedSection key={team.name} delay={i * 80}>
                <div className="card-hover bg-[oklch(0.18_0.008_260)] rounded-lg p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded bg-[oklch(0.82_0.18_85/0.1)] border border-[oklch(0.82_0.18_85/0.2)] flex items-center justify-center">
                      <team.icon className="w-5 h-5 text-[oklch(0.82_0.18_85)]" />
                    </div>
                    <span
                      className="text-[oklch(0.82_0.18_85)] text-xs"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {team.count}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {team.name}
                  </h3>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{team.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Our Journey</div>
              <h2
                className="text-4xl font-bold text-[oklch(0.94_0.005_65)]"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Team Timeline
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-[oklch(0.28_0.008_260)]" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <AnimatedSection key={item.year} delay={i * 80}>
                    <div className="flex gap-6 items-start">
                      <div
                        className="w-[4.5rem] flex-shrink-0 text-right text-[oklch(0.82_0.18_85)] font-bold text-lg"
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {item.year}
                      </div>
                      <div className="relative flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[oklch(0.82_0.18_85)] mt-1.5 relative z-10" />
                      </div>
                      <div className="pb-2">
                        <p className="text-[oklch(0.7_0.01_260)] text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)] border-t border-[oklch(0.28_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              {[
                { title: "Gracious Professionalism", desc: "We compete with integrity, respect opponents, and celebrate the achievements of all teams." },
                { title: "Coopertition®", desc: "We cooperate and compete simultaneously — sharing knowledge and supporting the broader FIRST community." },
                { title: "Continuous Learning", desc: "Every season brings new challenges. We embrace failure as a learning opportunity and iterate quickly." },
              ].map((val, i) => (
                <div key={val.title} className="px-4">
                  <div className="w-10 h-px bg-[oklch(0.82_0.18_85)] mx-auto mb-4" />
                  <h3
                    className="text-xl font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
