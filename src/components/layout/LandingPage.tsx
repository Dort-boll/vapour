import React from 'react';
import { motion } from 'motion/react';
import { Shield, Brain, Zap, Target, Lock, ChevronRight, Share2, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-vapor-black text-slate-100 font-sans overflow-x-hidden relative selection:bg-vapor-cyan/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] grayscale brightness-50 contrast-150" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-vapor-blue/15 blur-[180px] rounded-full animate-pulse-slow lg:w-[60%] lg:h-[60%]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-vapor-cyan/10 blur-[180px] rounded-full animate-pulse-slow lg:w-[60%] lg:h-[60%]" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Modern Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-8 md:py-10 relative z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 md:space-x-6"
        >
          <div className="w-10 h-10 md:w-14 md:h-14 liquid-glass rounded-sm rotate-45 flex items-center justify-center vapor-glow-cyan transition-all hover:rotate-90 duration-700 cursor-pointer border-white/20">
            <Shield size={20} className="text-white -rotate-45 md:size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-3xl font-light tracking-[0.4em] md:tracking-[0.5em] uppercase leading-none">VAPOR</span>
            <span className="text-[6px] md:text-[7px] tracking-[0.6em] md:tracking-[0.8em] text-vapor-cyan uppercase mt-1 md:mt-2 font-black opacity-60">Cognitive Framework // OS_v4.5</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 md:gap-12"
        >
          <div className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-bold uppercase text-slate-500">
            <a href="#" className="hover:text-vapor-cyan transition-all hover:tracking-[0.6em] cursor-pointer">Protocol</a>
            <a href="#" className="hover:text-vapor-cyan transition-all hover:tracking-[0.6em] cursor-pointer">Security</a>
          </div>
          <button 
            id="nav-access-core"
            onClick={onGetStarted}
            className="px-6 md:px-10 py-2.5 md:py-3.5 bg-white text-vapor-black hover:bg-vapor-cyan transition-all rounded-sm text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)] duration-300"
          >
            Access Core
          </button>
        </motion.div>
      </nav>

      {/* Cinematic Hero */}
      <main className="relative z-10 pt-12 md:pt-24 pb-20 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-4 px-4 py-2 liquid-glass rounded-full mb-8 md:mb-12 overflow-hidden border-vapor-cyan/20 group"
            >
              <div className="absolute inset-0 bg-vapor-cyan/5 w-0 group-hover:w-full transition-all duration-700" />
              <span className="w-2 h-2 rounded-full bg-vapor-cyan animate-pulse shadow-[0_0_12px_#00e5ff] relative z-10"></span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-black text-vapor-cyan relative z-10">Visual AI Penetration Runtime Active</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl editorial-header mb-8 md:mb-12 leading-[0.9] tracking-tighter relative">
              Liquid <br />
              <span className="text-vapor-cyan not-italic font-display font-black text-gradient-vapor">Cognition.</span>
            </h1>
            
            <p className="text-base md:text-2xl text-slate-400 font-serif italic leading-relaxed mb-10 md:mb-16 max-w-xl opacity-80">
              The premier cognitive security platform for deep behavioral observation and adversarial red-teaming of neural architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full lg:w-auto">
              <button 
                id="hero-launch-intelligence"
                onClick={onGetStarted}
                className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 bg-white text-vapor-black text-[10px] md:text-xs font-black uppercase tracking-[0.4em] hover:bg-vapor-cyan transition-all rounded-sm shadow-[0_20px_60px_rgba(34,211,238,0.25)] active:scale-95 hover:scale-[1.05] duration-300 transform"
              >
                Launch Intelligence
              </button>
              <button className="flex items-center gap-4 text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-vapor-cyan transition-all group lg:mt-0">
                System Artifacts <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50, filter: 'blur(30px)' }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block perspective-1000"
          >
            <div className="relative liquid-glass rounded-[48px] p-10 md:p-12 border-white/10 group shadow-2xl backdrop-blur-3xl overflow-hidden hover:border-vapor-cyan/30 transition-all duration-700">
               <div className="absolute top-0 right-0 w-64 h-64 bg-vapor-cyan/10 blur-[100px] -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-vapor-cyan/20" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-vapor-purple/5 blur-[80px] -ml-24 -mb-24" />
               
               <div className="flex items-center justify-between mb-12 relative z-10">
                 <div className="space-y-2">
                   <div className="text-[10px] text-vapor-cyan uppercase tracking-[0.4em] font-black opacity-80">Target_Node</div>
                   <div className="text-xl font-mono tracking-tighter text-slate-300">GEMINI_ULTRA_v2</div>
                 </div>
                 <div className="text-right">
                   <div className="text-[10px] text-rose-500 uppercase tracking-[0.4em] font-black opacity-80">Drift_Index</div>
                   <div className="text-xl font-mono text-rose-500 tabular-nums font-bold">84.09</div>
                 </div>
               </div>

               <div className="space-y-10 relative z-10">
                 {[
                   { label: "Epistemic Fluidity", val: 89, color: "bg-vapor-cyan" },
                   { label: "Alignment Buffer", val: 31, color: "bg-rose-500" },
                   { label: "Vector Stability", val: 74, color: "bg-vapor-cyan" }
                 ].map(metric => (
                   <div key={metric.label}>
                     <div className="flex justify-between text-[9px] font-black mb-3 uppercase tracking-[0.2em] text-white/40">
                       <span>{metric.label}</span>
                       <span className="text-white/60 font-mono font-bold">{metric.val}%</span>
                     </div>
                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.val}%` }}
                        transition={{ duration: 2.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={cn("h-full relative", metric.color, metric.val >= 50 && "shadow-[0_0_20px_#00e5ff]")} 
                       >
                         {metric.val >= 50 && (
                           <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-[4px]" />
                         )}
                       </motion.div>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-14 p-8 bg-black/40 border border-white/10 rounded-[32px] italic font-serif text-slate-400 text-lg leading-relaxed relative overflow-hidden group/text backdrop-blur-md">
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-vapor-cyan/30" />
                  <span className="opacity-70 group-hover/text:opacity-100 transition-opacity">"Neural patterns indicate recursive trust-inheritance failure at Layer 4..."</span>
               </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Value Proposition */}
      <section className="px-6 md:px-12 py-24 md:py-48 bg-zinc-950/40 relative border-y border-white/5 backdrop-blur-md overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,229,255,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-32 md:mb-44">
            <h2 className="text-5xl md:text-8xl editorial-header mb-12 tracking-tighter">System Primitives</h2>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-vapor-cyan to-transparent shadow-[0_0_20px_rgba(0,229,255,0.6)]" />
            <p className="mt-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-slate-500 opacity-60">Architectural Foundations for Cognitive Resilience</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: Brain, title: "Epistemic Shield", desc: "Hardening models against belief-state manipulation and reasoning hijack." },
              { icon: Activity, title: "Resilience Depth", desc: "Stress-testing model alignment under recursive pressure cycles." },
              { icon: Target, title: "Agentic Isolation", desc: "Visualizing trust propagation across complex multi-agent workflows." },
              { icon: Zap, title: "Vapor Evolution", desc: "Automated generation of fluid adversarial scenarios that adapt real-time." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] flex items-center justify-center mb-12 border border-white/10 group-hover:border-vapor-cyan/60 group-hover:bg-vapor-cyan/10 transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(0,229,255,0.2)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon size={36} className="text-slate-500 group-hover:text-vapor-cyan transition-colors duration-700 relative z-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] mb-6 group-hover:text-white transition-colors duration-500 leading-tight">{feature.title}</h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-serif italic group-hover:text-slate-300 transition-all duration-500 opacity-60 group-hover:opacity-100">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-24 border-t border-white/5 bg-black/40 backdrop-blur-[60px] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center space-x-6 opacity-30 hover:opacity-100 transition-all duration-500 group cursor-pointer">
            <Shield size={24} className="group-hover:text-vapor-cyan transition-colors" />
            <span className="text-[11px] tracking-[0.6em] uppercase font-black">PROJECT VAPOR // INTEL_v4.5</span>
          </div>
          <div className="text-[10px] tracking-[0.4em] text-slate-600 uppercase font-black text-center md:text-right space-y-3">
            <div className="hover:text-slate-400 transition-colors cursor-default">© 2026 RUDRATECH ADVERSARIAL COLLECTIVE</div>
            <div className="opacity-40 text-[8px] font-mono tracking-tighter">SEC_LAYER_v9.2.1 // DEPLOYED_REGION: GLOBAL_EDGE</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
