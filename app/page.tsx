"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the splash screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="loader"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative w-16 h-16"
              >
                <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 opacity-80" />
                <div className="absolute inset-2 rounded-full border-r-2 border-purple-500 opacity-60" />
                <div className="absolute inset-4 rounded-full border-b-2 border-cyan-500 opacity-40" />
                <Terminal size={24} className="absolute inset-0 m-auto text-indigo-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm font-['Space_Grotesk'] tracking-[0.2em] text-slate-400 uppercase"
              >
                Initializing
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen noise relative">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Contact />
          
          <footer className="py-8 text-center border-t border-white/5 relative z-10">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Pravesh Verma. Built with Next.js & Tailwind CSS.
            </p>
          </footer>
        </main>
      )}
    </>
  );
}
