"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Praveshvermaa/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pravesh-verma/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:praveshdhakad62@@gmail.com", label: "Email" },
];

const floatingBadges = [
  { label: "Next.js", x: "10%", y: "20%", delay: 0 },
  { label: "React", x: "80%", y: "15%", delay: 0.5 },
  { label: "Node.js", x: "85%", y: "70%", delay: 1 },
  { label: "MongoDB", x: "5%", y: "75%", delay: 1.5 },
  { label: "Supabase", x: "50%", y: "85%", delay: 2 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient pt-20"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-full text-xs font-medium text-slate-300 pointer-events-none"
          style={{ left: badge.x, top: badge.y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + badge.delay, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
          {badge.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="section-shell text-center">
        <div className="section-shell__inner">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-indigo-300 font-medium mb-8 border border-indigo-500/20"
        >
          <Sparkles size={14} className="text-indigo-400" />
          <span>Open to Full-Time Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-4 font-['Space_Grotesk'] leading-none"
        >
          <span className="text-slate-100">Pravesh</span>
          <br />
          <span className="gradient-text">Verma</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500" />
          <span className="text-xl md:text-2xl font-semibold text-indigo-400">
            Full Stack Developer
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed"
        >
          Building scalable web apps with{" "}
          <span className="text-indigo-300 font-medium">MERN</span>,{" "}
          <span className="text-purple-300 font-medium">Next.js</span> and{" "}
          <span className="text-cyan-300 font-medium">modern cloud tools</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-card hover:bg-white/8 text-slate-200 font-semibold rounded-xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card hover:border-indigo-500/30 rounded-xl border border-white/8 text-slate-400 hover:text-indigo-400 transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll down</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
