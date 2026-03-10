/* ============================================================
   RAMs 7729 – Outreach Page
   ============================================================ */

import { BookOpen, Users, Globe, Star, Podcast, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const OUTREACH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/outreach-stem-WYShCuPi7xpNCLwtzanDmc.webp";

const programs = [
  {
    icon: Podcast,
    title: "RAMs Robotics Podcast",
    tag: "Audio Series",
    desc: "We produce a monthly podcast featuring interviews with team members, engineering deep-dives, competition recaps, and discussions about STEM education. Episodes are available on all major podcast platforms, bringing the robotics experience to listeners worldwide.",
    impact: "1000+ listeners",
    frequency: "Monthly episodes",
  },
  {
    icon: Globe,
    title: "Virtual Istanbul Archaeology Museum Tour",
    tag: "Educational Program",
    desc: "A groundbreaking initiative to make cultural education accessible to underprivileged students. We've created a virtual 3D tour of Istanbul's archaeology museum, complete with interactive exhibits and educational content. Students can explore historical artifacts and learn about Istanbul's rich heritage from anywhere.",
    impact: "500+ students reached",
    frequency: "Ongoing access",
  },
  {
    icon: BookOpen,
    title: "STEM Workshops",
    tag: "Education",
    desc: "We run hands-on robotics workshops for elementary and middle school students, introducing them to programming, electronics, and mechanical design through interactive activities. Students build simple robots, learn basic coding concepts, and experience the excitement of making something move.",
    impact: "200+ students reached",
    frequency: "Monthly sessions",
  },
  {
    icon: Users,
    title: "FLL Mentorship",
    tag: "Mentorship",
    desc: "RAMs 7729 members mentor FIRST LEGO League (FLL) teams at Koç School and in the broader Istanbul community. We help younger students understand the engineering design process, prepare for competitions, and develop the teamwork skills that are central to FIRST's mission.",
    impact: "4 FLL teams mentored",
    frequency: "Seasonal program",
  },
];

const activities = [
  {
    year: "2025",
    title: "Virtual Museum Launch",
    desc: "Launched the Virtual Istanbul Archaeology Museum tour, providing free access to underprivileged students across Turkey.",
  },
  {
    year: "2025",
    title: "Podcast Series Begins",
    desc: "Started the RAMs Robotics Podcast with monthly episodes featuring team stories and engineering insights.",
  },
  {
    year: "2024",
    title: "Istanbul STEM Festival",
    desc: "Participated in the annual Istanbul STEM Festival with a robot demonstration booth, reaching over 500 visitors over two days.",
  },
  {
    year: "2024",
    title: "Koç School Science Fair",
    desc: "Hosted a robotics showcase at the school science fair, demonstrating robot capabilities to students and parents.",
  },
  {
    year: "2023",
    title: "FLL Regional Mentorship",
    desc: "Mentored three FLL Explore teams through their first season, with all three teams successfully completing their projects.",
  },
  {
    year: "2023",
    title: "Elementary School Visits",
    desc: "Visited four elementary schools in the Tuzla district with a portable robot demonstration and coding activity.",
  },
];

export default function Outreach() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">Beyond the Field</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">Outreach</span> & Community
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              RAMs 7729 believes that inspiring the next generation of engineers and making education
              accessible to all is just as important as winning on the field. Here's how we give back to our community.
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
                src={OUTREACH_IMG}
                alt="RAMs 7729 team members mentoring younger students in a STEM workshop"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.008_260/0.5)] to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-10 bg-[oklch(0.11_0.008_260)] border-y border-[oklch(0.28_0.008_260)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "1000+", label: "Podcast Listeners" },
              { value: "500+", label: "Museum Tour Users" },
              { value: "4", label: "FLL Teams Mentored" },
              { value: "3+", label: "Partner Schools" },
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

      {/* Programs */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">What We Do</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-10"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Our Programs
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 100}>
                <div className="card-hover bg-[oklch(0.18_0.008_260)] rounded-lg p-7 border border-[oklch(0.28_0.008_260)] h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded bg-[oklch(0.82_0.18_85/0.1)] border border-[oklch(0.82_0.18_85/0.2)] flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-5 h-5 text-[oklch(0.82_0.18_85)]" />
                    </div>
                    <div>
                      <span
                        className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {program.tag}
                      </span>
                      <h3
                        className="text-xl font-bold text-[oklch(0.94_0.005_65)]"
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed mb-5">{program.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] text-[oklch(0.7_0.01_260)] text-xs">
                      {program.impact}
                    </span>
                    <span className="px-3 py-1 rounded bg-[oklch(0.14_0.008_260)] border border-[oklch(0.28_0.008_260)] text-[oklch(0.7_0.01_260)] text-xs">
                      {program.frequency}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Log */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">Activity Log</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-10"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Recent Activities
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity, i) => (
              <AnimatedSection key={`${activity.year}-${activity.title}`} delay={i * 60}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-5 border border-[oklch(0.28_0.008_260)] h-full">
                  <div
                    className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {activity.year}
                  </div>
                  <h4
                    className="text-base font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {activity.title}
                  </h4>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{activity.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST Mission */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="bg-[oklch(0.18_0.008_260)] rounded-xl p-8 lg:p-10 border border-[oklch(0.28_0.008_260)] text-center">
              <div className="section-label mb-3 justify-center flex">Our Mission</div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-4"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Inspiring Young People to Be <span className="text-[oklch(0.82_0.18_85)]">Science and Technology Leaders</span>
              </h2>
              <p className="text-[oklch(0.65_0.01_260)] max-w-2xl mx-auto leading-relaxed">
                FIRST's mission is to inspire young people to be science and technology leaders
                and innovators by engaging them in exciting mentor-based programs that build
                science, engineering, and technology skills, inspire innovation, and foster
                well-rounded life capabilities including self-confidence, communication, and leadership.
                RAMs 7729 is proud to carry that mission forward in Istanbul and beyond — making sure
                that every student, regardless of background, has access to STEM education and opportunity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
