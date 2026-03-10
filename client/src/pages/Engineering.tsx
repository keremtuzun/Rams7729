/* ============================================================
   RAMs 7729 – Engineering Page
   ============================================================ */

import { Code2, Cpu, Cog, BarChart3, GitBranch, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const CAD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418944140/X4Be2XfiomkNw7gY9gk5Hg/robot-cad-XUwV5eL6pNC5hbSy5kmEF3.webp";

const engineeringAreas = [
  {
    icon: Cog,
    title: "Mechanical Design",
    items: [
      { label: "Frame Material", detail: "1×1 and 2×1 aluminum extrusion (80/20 profile)" },
      { label: "Drivetrain", detail: "Swerve drive with MK4i modules — enables holonomic movement" },
      { label: "Manufacturing", detail: "CNC router, laser cutter, 3D printing (PLA/PETG), manual mill" },
      { label: "Weight Management", detail: "Strategic use of pocketing patterns to reduce mass while maintaining strength" },
      { label: "Fasteners", detail: "Primarily #10-32 and 1/4-20 bolts with Loctite on critical joints" },
    ],
  },
  {
    icon: Code2,
    title: "Software Architecture",
    items: [
      { label: "Language", detail: "Java with WPILib framework (FRC standard)" },
      { label: "Command Pattern", detail: "Command-based robot programming for modular, testable subsystems" },
      { label: "Autonomous", detail: "PathPlanner for trajectory generation and following" },
      { label: "State Machines", detail: "Finite state machines for complex multi-step sequences (e.g., score cycle)" },
      { label: "Version Control", detail: "Git/GitHub with feature branches and pull request reviews" },
    ],
  },
  {
    icon: Cpu,
    title: "Electrical & Controls",
    items: [
      { label: "Main Controller", detail: "NI roboRIO 2.0 — the FRC standard control system" },
      { label: "Motor Controllers", detail: "REV Spark MAX (NEO motors), CTRE Falcon 500 (TalonFX)" },
      { label: "Power Distribution", detail: "REV Power Distribution Hub (PDH) with 20 channels" },
      { label: "Communication", detail: "CAN bus for motor controllers; PWM for servos" },
      { label: "Pneumatics", detail: "REV Pneumatics Hub with double-solenoid valves for actuators" },
    ],
  },
  {
    icon: BarChart3,
    title: "Sensors & Feedback",
    items: [
      { label: "Wheel Encoders", detail: "CANCoder absolute magnetic encoders on each swerve module" },
      { label: "IMU", detail: "Pigeon 2.0 gyroscope/accelerometer for field-relative driving" },
      { label: "Vision", detail: "Limelight 3 for AprilTag detection and pose estimation" },
      { label: "Game Piece Detection", detail: "Beam-break sensors for intake indexing" },
      { label: "Limit Switches", detail: "Magnetic limit switches for elevator home position" },
    ],
  },
];

const codeSnippet = `// Swerve Drive Pose Estimator with Vision Fusion
SwerveDrivePoseEstimator poseEstimator = 
  new SwerveDrivePoseEstimator(
    kinematics,
    gyro.getRotation2d(),
    modulePositions,
    initialPose,
    stateStdDevs,    // wheel odometry trust
    visionStdDevs    // vision measurement trust
  );

// Fuse AprilTag vision measurement
poseEstimator.addVisionMeasurement(
  limelightPose,
  Timer.getFPGATimestamp() - latency
);`;

export default function Engineering() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="container relative">
          <AnimatedSection>
            <div className="section-label mb-3">Technical Deep Dive</div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              <span className="text-[oklch(0.82_0.18_85)]">Engineering</span>
            </h1>
            <p className="text-[oklch(0.65_0.01_260)] max-w-2xl leading-relaxed text-lg">
              A comprehensive look at the technical systems, design decisions, and engineering
              methodologies that define RAMs 7729's approach to competitive robotics.
            </p>
          </AnimatedSection>
        </div>
      </section>



      {/* Engineering Areas */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-3">Systems Overview</div>
            <h2
              className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-10"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Technical Specifications
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {engineeringAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 100}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-7 border border-[oklch(0.28_0.008_260)] h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded bg-[oklch(0.82_0.18_85/0.12)] border border-[oklch(0.82_0.18_85/0.25)] flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-[oklch(0.82_0.18_85)]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-[oklch(0.94_0.005_65)]"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {area.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {area.items.map((item) => (
                      <div key={item.label} className="grid grid-cols-[140px_1fr] gap-3 items-start">
                        <span
                          className="text-[oklch(0.82_0.18_85)] text-xs uppercase tracking-wider pt-0.5"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {item.label}
                        </span>
                        <span className="text-[oklch(0.7_0.01_260)] text-sm leading-relaxed">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Architecture */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="section-label mb-3">Software</div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-5"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Programming <span className="text-[oklch(0.82_0.18_85)]">Architecture</span>
              </h2>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-4">
                Our software team uses the WPILib command-based framework, which structures the
                robot code into independent subsystems and composable commands. This architecture
                makes it easy to test individual mechanisms in isolation and combine them into
                complex autonomous sequences.
              </p>
              <p className="text-[oklch(0.65_0.01_260)] leading-relaxed mb-6">
                Autonomous routines are generated using PathPlanner, which allows the strategy
                team to design paths visually and the programming team to tune trajectory
                following parameters. Vision pose estimation is fused with wheel odometry using
                a Kalman filter for robust field localization.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: GitBranch, label: "Version Control", value: "GitHub" },
                  { icon: Layers, label: "Architecture", value: "Command-Based" },
                  { icon: BarChart3, label: "Path Planning", value: "PathPlanner" },
                  { icon: Cpu, label: "Simulation", value: "WPILib Sim" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.18_0.008_260)] rounded p-3 border border-[oklch(0.28_0.008_260)] flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-[oklch(0.82_0.18_85)] flex-shrink-0" />
                    <div>
                      <div
                        className="text-[oklch(0.5_0.01_260)] text-xs uppercase tracking-wider"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {item.label}
                      </div>
                      <div className="text-[oklch(0.85_0.005_65)] text-sm font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>


          </div>
        </div>
      </section>

      {/* Testing & Iteration */}
      <section className="py-16 bg-[oklch(0.11_0.008_260)]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Methodology</div>
              <h2
                className="text-4xl font-bold text-[oklch(0.94_0.005_65)]"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Testing & Iteration
              </h2>
              <p className="text-[oklch(0.6_0.01_260)] mt-3 max-w-xl mx-auto">
                We believe in data-driven engineering. Every design decision is validated through
                testing, and every failure is an opportunity to improve.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Prototype", desc: "Build quick, low-fidelity prototypes to validate mechanism concepts before committing to final materials." },
              { step: "02", title: "Test", desc: "Run controlled tests with measurable metrics — cycle time, consistency, force requirements, and reliability." },
              { step: "03", title: "Analyze", desc: "Review data, identify failure modes, and compare against design requirements and game strategy needs." },
              { step: "04", title: "Iterate", desc: "Implement targeted improvements and repeat the cycle until the mechanism meets competition standards." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 80}>
                <div className="bg-[oklch(0.18_0.008_260)] rounded-lg p-6 border border-[oklch(0.28_0.008_260)] h-full">
                  <div
                    className="text-4xl font-bold text-[oklch(0.82_0.18_85/0.3)] mb-3"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {item.step}
                  </div>
                  <h4
                    className="text-lg font-bold text-[oklch(0.94_0.005_65)] mb-2"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[oklch(0.6_0.01_260)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
