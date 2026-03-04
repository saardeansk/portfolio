import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Phone, Mail, Award, Code, Cpu, ExternalLink, Zap, ChevronRight } from 'lucide-react';

// Animation variants for section reveals
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 z-50 origin-left" 
        style={{ scaleX }} 
      />

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <span className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest mb-6 inline-block uppercase">
            Available for World-Level Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            SATHISHKUMAR S
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-mono italic">
            Aspiring Software Developer & AI Web Enthusiast
          </p>
          
          <div className="flex gap-4 mt-10 justify-center flex-wrap">
            <a href="tel:+916382413742" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all font-bold">
              <Phone size={18}/> +91 63824 13742
            </a>
            <a href="mailto:sathishkumarsk2210@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-bold">
              <Mail size={18}/> Email Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ACADEMIC STATS */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard label="Diploma in CS" value="97.4%" sub="Muthayammal Polytechnic" />
          <StatCard label="HSC Score" value="89.4%" sub="Tagore Matric" />
          <StatCard label="SSLC Score" value="75.33%" sub="Tagore Matric" />
        </div>
      </section>

      {/* INNOVATION PROJECTS */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Zap className="text-blue-500" /> Featured Innovation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="AI Tools Dictionary" tech="React • Node.js" desc="Categorizes 100+ AI tools with dynamic search and filters." />
          <ProjectCard title="Plant Disease Detector" tech="Python • ML" desc="Identifies plant diseases by scanning attacked areas." />
          <ProjectCard title="Food Wastage Reduction" tech="JavaScript" desc="Tracking system to reduce waste in canteens." />
          <ProjectCard title="Water Level Management" tech="Java • IoT" desc="Monitors tank levels to prevent overflow." />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="space-y-4">
          <AchievementItem text="Best Web Designer of the Year" sub="Muthayammal Polytechnic" icon={<Code />} />
          <AchievementItem text="Python & SQL Problem Solving" sub="HackerRank Badges" icon={<Award />} />
        </div>
      </section>

      <footer className="py-10 text-center opacity-50 text-sm border-t border-white/5">
        © 2026 Sathishkumar S — Built with React & Framer Motion
      </footer>
    </div>
  );
}

// Sub-components
function StatCard({ label, value, sub }) {
  return (
    <motion.div {...fadeInUp} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{label}</p>
      <h3 className="text-5xl font-black text-white mb-1">{value}</h3>
      <p className="text-sm italic text-blue-400">{sub}</p>
    </motion.div>
  );
}

function ProjectCard({ title, tech, desc }) {
  return (
    <motion.div {...fadeInUp} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
      <div className="flex justify-between mb-4">
        <Cpu className="text-blue-500" size={24} />
        <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
      </div>
      <h4 className="text-xs font-mono text-blue-400 uppercase mb-2">{tech}</h4>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function AchievementItem({ text, sub, icon }) {
  return (
    <motion.div {...fadeInUp} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
      <div className="p-4 bg-blue-600/20 rounded-xl text-blue-400">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{text}</h4>
        <p className="text-sm text-slate-500">{sub}</p>
      </div>
      <ChevronRight className="ml-auto opacity-20" />
    </motion.div>
  );
}
