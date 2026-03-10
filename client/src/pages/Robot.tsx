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
    name: "Swerve Drive",
    tag: "Drivetrain",
    summary: "Omnidirectional movement with four independently steerable modules.",
    details:
      "Our robot uses a custom swerve drive base with four MK4i swerve modules, each driven by a NEO brushless motor and steered by a NEO 550. This configuration allows the robot to move in any direction without rotating, enabling complex autonomous maneuvers and responsive driver control. The drivetrain is controlled using a closed-loop PID system with CANCoder absolute encoders for precise wheel angle feedback.",
    specs: [
      { label: "Drive Motors", value: "4× NEO Brushless" },
      { label: "Steer Motors", value: "4× NEO 550" },
      { label: "Max Speed", value: "~4.5 m/s" },
      { label: "Encoders", value: "CANCoder Absolute" },
    ],
  },
  {
    id: "elevator",
    icon: Zap,
    name: "Elevator Mechanism",
    tag: "Manipulator",
    summary: "Multi-stage linear elevator for reaching high scoring positions.",
    details:
      "A two-stage cascading elevator powered by dual NEO motors through a 10:1 gearbox gives the robot vertical reach of over 1.5 meters. The elevator uses a continuous loop of 3/16\" Dyneema cord and precision linear bearings for smooth, reliable extension. Position control is implemented with a motion-profiled PID controller, allowing the robot to reach preset heights autonomously.",
    specs: [
      { label: "Motors", value: "2× NEO (10:1 GB)" },
      { label: "Max Height", value: "1.52 m" },
      { label: "Stages", value: "2-stage cascade" },
      { label: "Control", value: "Motion-profiled PID" },
    ],
  },
  {
    id: "intake",
    icon: Cpu,
    name: "Intake & Shooter",
    tag: "Game Piece Handler",
    summary: "Precision intake and flywheel shooter for consistent scoring.",
    details:
      "The intake system uses compliant wheels driven by a single Falcon 500 motor to collect game pieces from the floor. A beam-break sensor detects when a piece is fully indexed. The shooter uses dual Falcon 500 motors spinning a pair of 4-inch polyurethane wheels at variable speeds, with a hood angle adjustment for different shot distances. Shooting parameters are tuned using a lookup table based on distance from the target.",
    specs: [
      { label: "Intake Motor", value: "Falcon 500" },
      { label: "Shooter Motors", value: "2× Falcon 500" },
      { label: "Wheel Diameter", value: "4 in polyurethane" },
      { label: "Sensor", value: "Beam-break + encoder" },
    ],
  },
  {
    id: "vision",
    icon: Eye,
    name: "Vision System",
    tag: "Sensing & Autonomy",
    summary: "AprilTag detection for field localization and auto-targeting.",
    details:
      "We use a Limelight 3 camera mounted at the front of the robot to detect AprilTag fiducial markers placed around the field. The vision pipeline runs at 90 FPS and provides pose estimates that are fused with wheel odometry using a Kalman filter in WPILib's SwerveDrivePoseEstimator. This gives the robot accurate field-relative positioning for autonomous path-following and driver-assist targeting.",
    specs: [
      { label: "Camera", value: "Limelight 3" },
      { label: "Pipeline FPS", value: "90 FPS" },
      { label: "Targets", value: "AprilTag (36h11)" },
      { label: "Fusion", value: "Kalman filter + odometry" },
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
            <div className="section-label mb-3">2025 Season</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Our <span className="text-[oklch(0.82_0.18_85)]">Robot</span>
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              Designed, built, and programmed entirely by students in six weeks. Here's a
              deep dive into the engineering decisions that shaped our 2025 competition robot.
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
                src={HERO_IMG}
                alt="RAMs 7729 robot on the competition field"
                className="w-full h-80 lg:h-[28rem] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.008_260/0.7)] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-3">
                  {["Swerve Drive", "Elevator", "Intake/Shooter", "Vision System", "AprilTag"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded bg-[oklch(0.82_0.18_85/0.15)] border border-[oklch(0.82_0.18_85/0.3)] text-[oklch(0.82_0.18_85)] text-xs"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                Every component is designed in Onshape before a single piece of metal is cut.
                Our CAD team creates detailed assemblies that allow the mechanical team to
                identify interference issues and optimize weight distribution before fabrication.
              </p>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-6">
                The six-week build season follows an iterative design process: prototype, test,
                refine, and repeat. We use a combination of CNC routing, laser cutting, and
                3D printing to manufacture custom parts with tight tolerances.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Design Tool", value: "Onshape" },
                  { label: "Control System", value: "WPILib / Java" },
                  { label: "Build Time", value: "6 weeks" },
                  { label: "Robot Weight", value: "~52 lbs" },
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
