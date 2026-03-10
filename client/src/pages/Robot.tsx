/* ============================================================
   RAMs 7729 – Robot Showcase Page
   ============================================================ */

import { useState } from "react";
import { ChevronRight, Cpu, Cog, Zap, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/hero-robot-bkahc7tXS4xcRpjELDzZYA.webp";
const CAD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/robot-cad-XUwV5eL6pNC5hbSy5kmEF3.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/team-workshop-KrrMDxPamSFM37KfrU9FLv.webp";

const subsystems = [
  {
    id: "drivetrain",
    icon: Cog,
    name: "Tank Drive",
    tag: "Drivetrain",
    summary: "Dual-side differential drive for reliable and predictable movement.",
    details:
      "Our 2026 KitBot uses a traditional tank drive configuration with two independent drive motors — one for the left side and one for the right side. This simple yet effective drivetrain provides excellent traction and predictable handling on the competition field. The tank drive is controlled through arcade or tank drive input, allowing the driver to smoothly accelerate, decelerate, and rotate the robot with precision.",
    specs: [
      { label: "Drive Motors", value: "2× Falcon 500" },
      { label: "Gearbox", value: "KitBot Gearbox" },
      { label: "Max Speed", value: "~3.5 m/s" },
      { label: "Wheelbase", value: "KitBot Standard" },
    ],
  },
  {
    id: "intake",
    icon: Zap,
    name: "Game Piece Intake",
    tag: "Manipulator",
    summary: "Efficient intake mechanism for collecting game pieces from the field.",
    details:
      "Our intake system uses a single Falcon 500 motor driving compliant wheels to collect game pieces from the floor. The intake is mounted at an optimal angle to smoothly guide pieces into the robot's storage area. A beam-break sensor detects when a piece is fully indexed, allowing the drive team to know when the robot is ready to score. The intake can be quickly raised or lowered depending on game strategy.",
    specs: [
      { label: "Intake Motor", value: "Falcon 500" },
      { label: "Wheel Material", value: "Compliant Wheels" },
      { label: "Sensor", value: "Beam-break Detector" },
      { label: "Control", value: "Simple On/Off" },
    ],
  },

  {
    id: "vision",
    icon: Eye,
    name: "Vision System",
    tag: "Sensing & Autonomy",
    summary: "Camera-based game piece detection and field awareness.",
    details:
      "We use a USB camera mounted on the robot to detect game pieces and field targets. The vision pipeline processes images to identify game piece colors and positions, allowing the robot to autonomously align with scoring targets. The camera feed is also available to the drive team on the driver station for real-time situational awareness during matches.",
    specs: [
      { label: "Camera", value: "USB Webcam" },
      { label: "Pipeline FPS", value: "30 FPS" },
      { label: "Detection", value: "Color-based" },
      { label: "Processing", value: "OpenCV" },
    ],
  },
];

export default function Robot() {
  const [activeTab, setActiveTab] = useState("drivetrain");
  const active = subsystems.find((s) => s.id === activeTab)!;

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">2026 Season</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Our <span className="text-[oklch(0.82_0.18_85)]">Robot</span>
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              Built from the 2026 KitBot platform, our robot features a tank drive, game piece intake,
              and vision system. Here's a deep dive into the engineering decisions that shaped our competition robot.
            </p>
          </AnimatedSection>
        </div>
      </section>



      {/* Subsystem Explorer */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">Technical Breakdown</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-10"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Subsystem Explorer
            </h2>
          </AnimatedSection>

          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            {subsystems.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeTab === s.id
                    ? "bg-[oklch(0.82_0.18_85)] text-[oklch(0.1_0.005_260)]"
                    : "bg-[oklch(0.18_0.008_260)] text-[oklch(0.65_0.01_260)] hover:text-[oklch(0.82_0.18_85)] border border-[oklch(0.28_0.008_260)]"
                }`}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                <s.icon className="w-4 h-4" />
                {s.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[oklch(0.18_0.008_260)] rounded-lg p-7 border border-[oklch(0.28_0.008_260)]">
              <div className="flex items-center gap-3 mb-4">
                <active.icon className="w-6 h-6 text-[oklch(0.82_0.18_85)]" />
                <div>
                  <span
                    className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {active.tag}
                  </span>
                  <h3
                    className="text-2xl font-bold text-[oklch(0.94_0.005_65)]"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {active.name}
                  </h3>
                </div>
              </div>
              <p className="text-[oklch(0.75_0.005_65)] font-semibold mb-4 text-sm">{active.summary}</p>
              <p className="text-[oklch(0.6_0.01_260)] leading-relaxed text-sm">{active.details}</p>
            </div>

            <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)]">
              <h4
                className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Specifications
              </h4>
              <div className="space-y-4">
                {active.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5">
                    <span
                      className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {spec.label}
                    </span>
                    <span className="text-[oklch(0.85_0.005_65)] text-sm font-semibold">{spec.value}</span>
                    <div className="h-px bg-[oklch(0.28_0.008_260)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAD + Build Process */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={150}>
              <img
                src={CAD_IMG}
                alt="Robot CAD render with exploded view"
                className="w-full rounded-lg border border-[oklch(0.28_0.008_260)]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <div className="section-label mb-3">Design Process</div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                From CAD to <span className="text-[oklch(0.82_0.18_85)]">Competition</span>
              </h2>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-4">
                Our 2026 robot is built on the KitBot platform, a proven foundation that allows us to focus on
                game-specific mechanisms and strategy. We customize the KitBot with our own intake system,
                electrical components, and software to create a competitive robot.
              </p>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-6">
                The six-week build season follows an iterative design process: prototype, test,
                refine, and repeat. We use a combination of assembly, customization, and integration to
                deliver a reliable robot for competition.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Robot Platform", value: "2026 KitBot" },
                  { label: "Control System", value: "WPILib / Java" },
                  { label: "Build Time", value: "6 weeks" },
                  { label: "Robot Weight", value: "~120 lbs" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.18_0.008_260)] rounded p-3 border border-[oklch(0.28_0.008_260)]">
                    <div
                      className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {item.label}
                    </div>
                    <div className="text-[oklch(0.85_0.005_65)] font-semibold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Build Progress */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">Build Season Progress</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-8"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              2025 Build Timeline
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { week: "Week 1", title: "Kickoff & Strategy", desc: "Game analysis, strategy sessions, and initial concept sketches. CAD team begins drivetrain design.", status: "complete" },
              { week: "Week 2", title: "Prototype", desc: "Physical prototypes of key mechanisms. Testing game piece intake concepts with different wheel types.", status: "complete" },
              { week: "Week 3", title: "Design Lock", desc: "Final design decisions made. Full robot CAD assembly completed. Manufacturing begins.", status: "complete" },
              { week: "Week 4", title: "Fabrication", desc: "CNC routing, welding, and assembly of the main chassis and elevator structure.", status: "complete" },
              { week: "Week 5", title: "Integration", desc: "Electrical wiring, motor controller configuration, and initial software testing on the robot.", status: "complete" },
              { week: "Week 6", title: "Bag & Ship", desc: "Final tuning, autonomous testing, and driver practice. Robot shipped to competition.", status: "complete" },
            ].map((phase, i) => (
              <AnimatedSection key={phase.week} delay={i * 60}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-5 border border-[oklch(0.28_0.008_260)] h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[oklch(0.82_0.18_85)] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {phase.week}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.82_0.18_85)]" />
                  </div>
                  <h4
                    className="text-base font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {phase.title}
                  </h4>
                  <p className="text-[oklch(0.6_0.01_260)] text-xs leading-relaxed">{phase.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
