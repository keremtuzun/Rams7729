import { Link } from "wouter";
import { Home, Zap } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="relative text-center px-4">
          <div
            className="text-[12rem] font-bold text-[oklch(0.82_0.18_85/0.08)] leading-none mb-4 select-none"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            404
          </div>
          <div className="w-12 h-12 rounded-lg bg-[oklch(0.82_0.18_85)] flex items-center justify-center mx-auto mb-6 -mt-16 relative z-10">
            <Zap className="w-6 h-6 text-[oklch(0.1_0.005_260)]" />
          </div>
          <h1
            className="text-4xl font-bold text-[oklch(0.94_0.005_65)] mb-3"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Page Not Found
          </h1>
          <p className="text-[oklch(0.6_0.01_260)] mb-8 max-w-sm mx-auto">
            Looks like this page got knocked out of bounds. Let's get you back on the field.
          </p>
          <Link href="/" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded text-sm">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
