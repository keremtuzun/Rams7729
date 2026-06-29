import ChatInterface from "@/components/ChatInterface";

export default function AiPage() {
  return (
    <div className="flex flex-col h-full max-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-[#111] border-b border-[#222] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img
              src="/logo.jpg"
              alt="RAMS logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-none">RAMS AI</h1>
            <p className="text-xs text-white/40">FRC Team 7729 · 2026 REBUILT</p>
          </div>
        </div>

        {/* Cross-navigation to the rest of the single site */}
        <nav className="flex items-center gap-2 text-xs font-medium">
          <a
            href="/"
            className="px-3 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            ← Main Site
          </a>
          <a
            href="/strategy"
            className="px-3 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            Scouting Platform
          </a>
        </nav>
      </header>

      {/* Chat area */}
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
}
