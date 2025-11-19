import { motion } from 'framer-motion'

function LuxuryLayout({ children }) {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 bg-[#050709]" />
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.12)_25px,rgba(255,255,255,0.12)_26px,transparent_27px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.12)_25px,rgba(255,255,255,0.12)_26px,transparent_27px)] bg-[length:28px_28px]" />

      {/* Cobalt aura */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(18,64,160,0.25),transparent_70%)] blur-3xl" />

      {/* Top navigation (minimal, premium) */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_20px_rgba(25,113,194,0.8)]" />
          <span className="tracking-widest uppercase text-xs text-cyan-200/70">Silent Power</span>
        </div>
        <motion.a
          whileHover={{ y: -1 }}
          href="#"
          className="text-xs md:text-sm text-cyan-100/70 hover:text-cyan-50 transition-colors"
        >
          Inquire
        </motion.a>
      </header>

      {children}

      {/* Footer tagline */}
      <footer className="relative z-20 px-6 md:px-10 py-10">
        <p className="text-cyan-100/50 text-xs">
          Crafted in matte graphite, rim-lit cobalt and liquid gold.
        </p>
      </footer>
    </div>
  )
}

export default LuxuryLayout
