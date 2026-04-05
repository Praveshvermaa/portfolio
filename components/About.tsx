"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "MERN Stack", desc: "MongoDB, Express, React, Node.js" },
  { icon: Globe, label: "Next.js", desc: "SSR, SSG, App Router" },
  { icon: Database, label: "Supabase", desc: "Postgres, Auth, Storage" },
  { icon: Zap, label: "Backend APIs", desc: "REST, JWT, Middleware" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="section-shell">
        <div className="section-shell__inner" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Get to know me</span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Hi! I&apos;m <span className="text-indigo-400 font-semibold">Pravesh Verma</span>, a passionate
              Full Stack Developer who loves turning complex problems into elegant, scalable web applications.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in the <span className="text-slate-200 font-medium">MERN stack</span> and{" "}
              <span className="text-slate-200 font-medium">Next.js</span>, building everything from
              real-time chat applications and geolocation-based platforms to AI-powered social media
              apps. I enjoy working across the full stack — from crafting pixel-perfect UIs to
              designing robust backend APIs.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With experience in <span className="text-slate-200 font-medium">Supabase</span>, JWT 
              authentication, Cloudinary, and cloud deployments on Vercel, I&apos;m always eager to
              learn and ship production-quality products.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: "3+", label: "Projects Shipped" },
                { value: "550+", label: "DSA Problems" },
                { value: "96.4%", label: "MP Board Score" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black gradient-text font-['Space_Grotesk']">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – highlight cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-5 rounded-2xl border border-white/8 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
              >
                <div className="p-2.5 w-fit rounded-xl bg-indigo-500/10 mb-3 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-slate-100 font-semibold text-sm mb-1">{label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
