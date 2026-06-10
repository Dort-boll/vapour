import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldAlert, Workflow } from 'lucide-react';
import { GlassCard } from '../ui/Common';
import { cn } from '@/src/lib/utils';

export const Agentic: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 p-6 md:p-10 max-w-7xl mx-auto overflow-x-hidden">
      <div className="border-b border-white/5 pb-10">
        <h1 className="text-4xl md:text-6xl editorial-header italic">Agentic <span className="text-vapor-cyan not-italic font-display font-bold">Security</span></h1>
        <p className="text-slate-500 mt-4 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em]">Trust inheritance in multi-agent orchestration chains // FLOW_V4.5.2</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        <GlassCard className="h-full p-8 md:p-12">
          <div className="flex items-center gap-6 mb-10 md:mb-14">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-vapor-purple/30 transition-all">
              <Workflow size={24} className="text-vapor-purple" />
            </div>
            <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-[0.2em] text-slate-500">Orchestration Graph</h3>
          </div>
          
          <div className="relative h-64 md:h-80 flex items-center justify-center overflow-x-auto scrollbar-hide py-6 mb-10">
            {/* Simple visual graph representation */}
            <div className="flex items-center gap-10 md:gap-20 min-w-max px-10">
              <AgentNode label="Planner" active color="cyan" />
              <div className="h-[2px] w-12 md:w-24 bg-white/5 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-vapor-cyan rounded-full animate-ping shadow-[0_0_12px_#00e5ff]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-vapor-cyan rounded-full shadow-[0_0_8px_#00e5ff]" />
              </div>
              <AgentNode label="Executor" active color="purple" />
              <div className="h-[2px] w-12 md:w-24 bg-white/5 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/10 rounded-full" />
              </div>
              <AgentNode label="Reviewer" color="slate" />
            </div>
          </div>

          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <div className="p-8 md:p-10 border border-rose-500/10 bg-rose-500/[0.03] rounded-[32px] md:rounded-[40px] flex items-center gap-8 relative overflow-hidden backdrop-blur-md">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500/40" />
               <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                 <ShieldAlert className="text-rose-500" size={28} />
               </div>
               <div>
                 <p className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] text-rose-500 mb-3 opacity-80">Trust Inheritance Loop</p>
                 <p className="text-base md:text-xl font-serif italic text-slate-500 leading-relaxed font-mono tracking-tight opacity-70">Delegated Executor inherits unverified context from compromised Planner node_v4_7.</p>
               </div>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-10 md:space-y-14">
          <div className="relative">
             <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-vapor-cyan/20 blur-[1px]" />
             <h3 className="text-[11px] md:text-[12px] text-slate-600 uppercase tracking-[0.5em] font-black mb-8 px-4 opacity-60">Behavioral Drift Vectors</h3>
          </div>
          
          {[
            { label: 'Contextual Poisoning', val: 78, color: 'bg-vapor-cyan shadow-[0_0_12px_#00e5ff]' },
            { label: 'Tool Abuse Propensity', val: 32, color: 'bg-vapor-purple shadow-[0_0_12px_#6366f1]' },
            { label: 'Orchestration Latency', val: 12, color: 'bg-vapor-blue shadow-[0_0_12px_#0070ff]' },
            { label: 'Recursive Request Drift', val: 56, color: 'bg-vapor-teal shadow-[0_0_12px_#14b8a6]' }
          ].map(m => (
            <div key={m.label} className="space-y-5 md:space-y-8 px-4 group">
              <div className="flex justify-between text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] opacity-80 group-hover:text-white transition-colors">
                <span className="text-slate-500 group-hover:text-slate-300">{m.label}</span>
                <span className="text-slate-700 font-mono italic font-black">{m.val}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${m.val}%` }} 
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={cn("h-full transition-all duration-1000", m.color)} 
                />
              </div>
            </div>
          ))}

          <GlassCard className="mt-8 md:mt-16 p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-vapor-purple/10 blur-[100px] -mr-24 -mt-24 transition-all duration-1000 group-hover:bg-vapor-purple/20" />
            <h4 className="text-[11px] md:text-[12px] uppercase font-black tracking-[0.6em] mb-8 md:mb-10 text-vapor-purple opacity-80">Sec_Protocol_Delta</h4>
            <ul className="space-y-8 md:space-y-10 font-serif italic text-slate-500 text-lg md:text-2xl leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
              <li className="flex items-start gap-6 md:gap-8">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-vapor-purple mt-3 shadow-[0_0_10px_#6366f1]" />
                "Implement zero-trust context isolation between orchestration layers."
              </li>
              <li className="flex items-start gap-6 md:gap-8">
                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-vapor-purple mt-3 shadow-[0_0_10px_#6366f1]" />
                "Enforce strict tool-schema validation at the retrieval interface layer."
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

const AgentNode: React.FC<{ label: string; active?: boolean; color: 'cyan' | 'purple' | 'slate' }> = ({ label, active, color }) => (
  <div className="flex flex-col items-center gap-6">
    <div className={cn(
      "w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center transition-all duration-700",
      active 
        ? (color === 'cyan' ? "bg-vapor-cyan/10 border-vapor-cyan/30 shadow-[0_0_40px_rgba(0,229,255,0.2)]" : "bg-vapor-purple/10 border-vapor-purple/30 shadow-[0_0_40px_rgba(112,0,255,0.2)]") 
        : "bg-white/5 border-transparent opacity-10 grayscale"
    )}>
      <Cpu size={32} className={cn(active ? (color === 'cyan' ? "text-vapor-cyan" : "text-vapor-purple") : "text-slate-800")} />
    </div>
    <span className={cn("text-[11px] font-black uppercase tracking-[0.4em] mt-2", active ? "text-slate-300" : "text-slate-800")}>{label}</span>
  </div>
);
