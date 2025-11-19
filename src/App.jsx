import LuxuryLayout from './components/LuxuryLayout'
import Hero3D from './components/Hero3D'

function App() {
  return (
    <LuxuryLayout>
      <Hero3D />

      {/* Final symbol section */}
      <section className="relative bg-[#070a0d]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                The Artifact resolves into a new emblem
              </h3>
              <p className="mt-4 text-cyan-100/80">
                By intent and iteration, the organic and the crystalline lock as one. Present your new category with poise: define it below and let the symbol glow with meaning.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <input
                  id="category"
                  placeholder="e.g., Cognitive Luxury Systems"
                  className="w-full md:w-auto flex-1 bg-[#0b0f14] border border-cyan-500/20 focus:border-cyan-400/50 outline-none text-cyan-50 placeholder:text-cyan-200/40 rounded-lg px-4 py-3 shadow-[0_0_0_1px_rgba(18,64,160,0.15)_inset]"
                />
                <button className="shrink-0 bg-gradient-to-br from-[#e8c77a] to-[#cfa44b] text-black font-semibold px-5 py-3 rounded-lg shadow-[0_6px_40px_rgba(207,164,75,0.35)] hover:shadow-[0_8px_44px_rgba(207,164,75,0.45)] transition-shadow">
                  Engrave
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(14,28,44,0.7),rgba(7,10,13,1))] border border-cyan-500/10 shadow-[inset_0_0_80px_rgba(12,96,192,0.2)] flex items-center justify-center">
                <div className="text-3xl md:text-5xl font-black tracking-wide bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(180deg,#e8c77a,#cfa44b,#6aa6ff)'}}>
                  YOUR SYMBOL
                </div>
              </div>
              <div className="absolute -inset-6 -z-[0] rounded-3xl bg-[conic-gradient(from_120deg_at_50%_50%,rgba(207,164,75,0.18),transparent_25%,rgba(16,74,153,0.25),transparent_70%,rgba(207,164,75,0.18))] blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </LuxuryLayout>
  )
}

export default App
