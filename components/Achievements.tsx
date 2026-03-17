"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Global Rank 1028",
    subtitle: "TCS CodeVita",
    description: "Competed globally and secured a top rank among thousands of participants in one of the largest coding contests.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-500/15",
    text: "text-amber-400"
  },
  {
    icon: Code,
    title: "550+ Problems Solved",
    subtitle: "DSA Journey",
    description: "Consistent problem solver across LeetCode, CodeChef, and GeeksforGeeks, mastering data structures and algorithms.",
    color: "from-emerald-400 to-cyan-500",
    bg: "bg-emerald-500/15",
    text: "text-emerald-400"
  },
  {
    icon: Medal,
    title: "State Topper (96.4%)",
    subtitle: "MP Board Exams",
    description: "Achieved outstanding academic excellence, securing the top rank in the Madhya Pradesh state board examinations.",
    color: "from-purple-400 to-pink-500",
    bg: "bg-purple-500/15",
    text: "text-purple-400"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Star size={16} className="fill-amber-400" />
            Milestones
            <Star size={16} className="fill-amber-400" />
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Highlights from my competitive programming and academic journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                {/* Glow behind card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 blur-md rounded-2xl pointer-events-none z-0 overflow-hidden" style={{ background: `linear-gradient(to right, ${item.color.split(' ')[0].replace('from-', 'var(--tw-gradient-from)')}, ${item.color.split(' ')[1].replace('to-', 'var(--tw-gradient-to)')})` }} />

                {/* Card Content */}
                <div className="relative z-10 glass-card rounded-2xl p-8 h-full border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-300">
                  {/* Background Icon */}
                  <Icon size={120} className={`absolute -right-6 -top-6 opacity-5 ${item.text}`} />

                  {/* Header Row */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}>
                    <Icon size={28} className={item.text} />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <div className={`text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.subtitle}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
