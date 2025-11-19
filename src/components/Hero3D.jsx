import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Subtle container tilt/orbit to mimic camera move
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 18])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -6])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const glow = useTransform(scrollYProgress, [0, 1], [0.25, 0.9])
  const fogOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.6])

  return (
    <section ref={ref} className="relative h-[300vh] bg-[#070a0d]">
      {/* Sticky 3D stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Core 3D Object */}
        <motion.div
          style={{ rotateY, rotateX, scale }}
          className="relative h-full w-full"
        >
          <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Cinematic vignette and volumetric fog */}
          <motion.div
            style={{ opacity: fogOpacity }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(12,20,28,0)_0%,rgba(7,10,13,0.4)_60%,rgba(7,10,13,0.9)_100%)]" />
            <div className="absolute inset-0 mix-blend-screen" style={{
              background: 'radial-gradient(60% 40% at 50% 50%, rgba(7,53,122,0.35), transparent 70%)'
            }} />
            {/* Volumetric fog layers */}
            <div className="absolute -inset-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(10,16,24,0.55),transparent_60%)] blur-2xl" />
          </motion.div>

          {/* Rim lighting sweep */}
          <motion.div
            style={{ opacity: glow }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -inset-20 bg-[conic-gradient(from_210deg_at_50%_50%,rgba(12,96,192,0.2),transparent_25%,rgba(255,214,98,0.15),transparent_75%,rgba(12,96,192,0.2))] blur-3xl" />
          </motion.div>

          {/* HUD rings */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
              className="relative"
            >
              <div className="w-[60vmin] h-[60vmin] rounded-full border border-cyan-500/10 shadow-[0_0_80px_rgba(12,96,192,0.25)_inset]" />
              <div className="absolute inset-[6%] rounded-full border border-cyan-500/10" />
              <div className="absolute inset-[12%] rounded-full border border-cyan-500/10" />
              <div className="absolute inset-[18%] rounded-full border border-cyan-500/10" />
              <div className="absolute inset-[24%] rounded-full border border-cyan-500/10" />
            </motion.div>
          </div>

          {/* Gold data threads */}
          <GoldThreads progress={scrollYProgress} />

          {/* Copy overlay */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #b1c8ff, #79a6ff, #1c4ed8)',
                opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0])
              }}
            >
              Artifact of Intelligence
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-cyan-100/70"
              style={{ opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]) }}
            >
              A silent core in the void. Organic intuition entwines crystalline logic.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Narrative Scroll Sections */}
      <Narrative progress={scrollYProgress} />
    </section>
  )
}

function GoldThreads({ progress }) {
  // Animate dash offset and thickness as we scroll
  const dash = useTransform(progress, [0, 1], [1200, 0])
  const opacity = useTransform(progress, [0, 0.2, 1], [0.0, 0.35, 0.65])
  const width = useTransform(progress, [0, 1], [1, 2.5])

  return (
    <motion.svg
      className="pointer-events-none absolute inset-0"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
    >
      {[
        'M 100 700 C 250 650 350 600 500 620 C 650 640 750 700 900 680',
        'M 120 300 C 260 340 390 420 520 480 C 700 560 780 600 900 620',
        'M 80 520 C 240 520 360 480 520 520 C 740 570 820 640 940 700',
        'M 160 200 C 300 260 420 320 540 380 C 700 460 820 520 940 540',
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="url(#gold)"
          strokeWidth={width}
          strokeLinecap="round"
          strokeDasharray="1200"
          style={{ strokeDashoffset: dash }}
          opacity={0.8}
        />
      ))}
      <defs>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f7d98b" />
          <stop offset="50%" stopColor="#e7b85b" />
          <stop offset="100%" stopColor="#cfa44b" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

function Narrative({ progress }) {
  const op1 = useTransform(progress, [0.05, 0.2], [0, 1])
  const op2 = useTransform(progress, [0.35, 0.55], [0, 1])
  const op3 = useTransform(progress, [0.7, 0.95], [0, 1])

  return (
    <div className="relative z-10">
      <div className="h-screen flex items-end">
        <motion.div className="px-6 pb-16 max-w-3xl" style={{ opacity: op1 }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Dormant Core</h2>
          <p className="mt-4 text-cyan-100/80">
            It floats in obsidian silence. Warm breath against cold metal. The first impulse.
          </p>
        </motion.div>
      </div>
      <div className="h-screen flex items-center">
        <motion.div className="px-6 max-w-3xl" style={{ opacity: op2 }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">The Weave</h2>
          <p className="mt-4 text-cyan-100/80">
            Liquid glass curves find structure. Gold data threads stitch meaning into motion.
          </p>
        </motion.div>
      </div>
      <div className="h-screen flex items-start">
        <motion.div className="px-6 pt-24 max-w-3xl" style={{ opacity: op3 }}>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg,#cfa44b,#6aa6ff)'}}>
            Emergence
          </h2>
          <p className="mt-4 text-cyan-100/80">
            Chaos locks into a perfect emblem — a new category of silent power.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero3D
