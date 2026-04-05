"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2055e998-dc60-4eff-9229-c8018d8f2cac",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-indigo-950/20 pointer-events-none" />

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
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">get in touch</span>
          <h2 className="section-title text-4xl md:text-5xl text-slate-100 mt-3">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email Card */}
            <a
              href="mailto:praveshdhakad62@gmail.com"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 flex flex-col items-start gap-4 transition-all duration-300 group hover:shadow-lg hover:shadow-indigo-500/10 block"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors">
                <Mail className="text-indigo-400" />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-1">Email Me</h3>
                <p className="text-slate-400 text-sm">praveshdhakad62@gmail.com</p>
              </div>
              <div className="mt-2 text-indigo-400 text-sm font-medium flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Write a message <ArrowUpRight size={14} />
              </div>
            </a>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Praveshvermaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-white/30 flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
              >
                <Github size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-slate-300 text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pravesh-verma/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#0A66C2]/40 flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:shadow-lg hover:shadow-[#0A66C2]/10"
              >
                <Linkedin size={28} className="text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
                <span className="text-slate-300 text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-100 mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none font-sans"
                  placeholder="Hello Pravesh, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${status === "success"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 border border-transparent"
                  }`}
              >
                {status === "idle" && (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
                {status === "submitting" && (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                    </motion.div>
                    Sending...
                  </span>
                )}
                {status === "success" && (
                  <span>Message Sent Successfully!</span>
                )}
                {status === "error" && (
                  <span>Failed to send. Please try again.</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
