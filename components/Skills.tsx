"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    emoji: "💬",
    color: "indigo",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    color: "purple",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Context API", "ShadCN"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "emerald",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    emoji: "🗄️",
    color: "blue",
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    color: "orange",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel", "VS Code"],
  },
];

const colorMap: Record<string, { pill: string; dot: string; header: string }> = {
  indigo: {
    pill: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/40",
    dot: "bg-indigo-500",
    header: "text-indigo-400",
  },
  purple: {
    pill: "bg-purple-500/10 border-purple-500/25 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/40",
    dot: "bg-purple-500",
    header: "text-purple-400",
  },
  emerald: {
    pill: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/40",
    dot: "bg-emerald-500",
    header: "text-emerald-400",
  },
  blue: {
    pill: "bg-blue-500/10 border-blue-500/25 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/40",
    dot: "bg-blue-500",
    header: "text-blue-400",
  },
  orange: {
    pill: "bg-orange-500/10 border-orange-500/25 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400/40",
    dot: "bg-orange-500",
    header: "text-orange-400",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-shell">
        <div className="section-shell__inner" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">My toolbox</span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm">
            Technologies and tools I&apos;ve worked with across the full development stack.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.emoji}</span>
                  <div>
                    <h3 className={`font-semibold text-sm uppercase tracking-wider ${c.header}`}>
                      {group.category}
                    </h3>
                    <div className={`mt-1 h-0.5 w-8 rounded-full ${c.dot}`} />
                  </div>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${c.pill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
