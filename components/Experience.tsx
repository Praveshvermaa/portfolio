"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Milko Business App",
    period: "Jan 2025 – Mar 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Worked on the company's core business application, developing and maintaining full-stack features using modern web technologies. Contributed to both frontend and backend codebases, improved API performance, and collaborated with the product team to ship new features.",
    achievements: [
      "Built and integrated REST APIs for business logic modules",
      "Developed responsive UI components using React and Tailwind CSS",
      "Improved application performance by optimizing database queries",
      "Participated in code reviews and agile development sprints",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

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
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Work history</span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-indigo-500 border-2 border-indigo-300 shadow-lg shadow-indigo-500/50 -translate-x-1/2" />

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card rounded-2xl p-7 border border-white/8 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-slate-100 font-bold text-xl font-['Space_Grotesk']">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={14} className="text-indigo-400" />
                      <span className="text-indigo-300 font-semibold text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-1 justify-end">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs justify-end">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
