"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, MapPin, MessageCircle, Bot, BookOpen } from "lucide-react";

const projects = [
  {
    id: "skilllink",
    title: "SkillLink",
    icon: MapPin,
    description:
      "A geolocation-based skill marketplace where users can discover and connect with skilled professionals nearby. Features real-time chat, interactive Leaflet maps, and a seamless booking experience.",
    tech: ["Next.js", "TypeScript", "Supabase", "Leaflet", "Tailwind CSS", "Real-time Chat"],
    github: "https://github.com/Praveshvermaa/SkillLink",
    demo: "http://skill-link-five-ruby.vercel.app/",
    accent: "indigo",
    gradient: "from-indigo-600/20 to-purple-600/10",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
    borderHover: "hover:border-indigo-500/40",
    glowColor: "hover:shadow-indigo-500/10",
  },
  {
    id: "vibeverse",
    title: "VibeVerse",
    icon: Bot,
    description:
      "AI-powered social media platform with NLP-based sentiment analysis for posts, Cloudinary media storage, real-time feeds, and a modern React + Express architecture.",
    tech: ["React", "Express", "MongoDB", "NLP", "Cloudinary", "REST API"],
    github: "https://github.com/Praveshvermaa/Your-Post-Client",
    demo: "https://your-post-client.vercel.app/",
    accent: "purple",
    gradient: "from-purple-600/20 to-pink-600/10",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/40",
    glowColor: "hover:shadow-purple-500/10",
  },
  {
    id: "noteshub",
    title: "NotesHub",
    icon: BookOpen,
    description:
      "Full-stack academic notes sharing platform with JWT authentication, Cloudinary file uploads, and a rating-based filtering system to surface the best study materials.",
    tech: ["React", "Node.js", "MongoDB", "JWT Auth", "Cloudinary", "Express"],
    github: "https://github.com/Praveshvermaa/NotesHub-Client",
    demo: "http://notes-hub-client-weld.vercel.app/",
    accent: "cyan",
    gradient: "from-cyan-600/20 to-teal-600/10",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
    glowColor: "hover:shadow-cyan-500/10",
  },
];

const accentColors: Record<string, string> = {
  indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  purple: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="py-28 relative">
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
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What I&apos;ve built</span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4">
            A selection of full-stack applications built with modern technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className={`relative glass-card rounded-2xl p-6 border border-white/8 ${project.borderHover} transition-all duration-300 hover:shadow-xl ${project.glowColor} flex flex-col group overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                {/* Card content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${project.iconBg} shrink-0`}>
                      <Icon size={20} className={project.iconColor} />
                    </div>
                    <h3 className="text-slate-100 font-bold text-xl font-['Space_Grotesk'] mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-full border ${accentColors[project.accent]} font-medium`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:bg-white/5"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
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
