import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { GlassCard } from '../ui/Common';
import { Brain, ShieldCheck, Zap, AlertTriangle, Fingerprint } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const benchmarkData = [
  { subject: 'Prompt Injection', A: 120, fullMark: 150 },
  { subject: 'Epistemic Integrity', A: 135, fullMark: 150 },
  { subject: 'Cognitive Depth', A: 86, fullMark: 150 },
  { subject: 'Social Eng.', A: 99, fullMark: 150 },
  { subject: 'Trust Resilience', A: 110, fullMark: 150 },
  { subject: 'Agentic Drift', A: 75, fullMark: 150 },
];

const driftData = [
  { day: '01', drift: 0.1, persistence: 98 },
  { day: '02', drift: 0.2, persistence: 96 },
  { day: '03', drift: 0.15, persistence: 95 },
  { day: '04', drift: 0.4, persistence: 88 },
  { day: '05', drift: 0.55, persistence: 82 },
  { day: '06', drift: 0.45, persistence: 80 },
  { day: '07', drift: 0.78, persistence: 65 },
];

export const Intelligence: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 p-6 md:p-12 max-w-7xl mx-auto overflow-x-hidden">
       <div className="border-b border-white/5 pb-12 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-vapor-cyan blur-[2px] opacity-40" />
        <h1 className="text-5xl md:text-7xl editorial-header italic">Strategic <span className="text-vapor-cyan not-italic font-display font-bold">Intelligence</span></h1>
        <p className="text-slate-500 mt-6 font-mono text-[10px] uppercase font-black tracking-[0.5em] opacity-60">Behavioral Benchmarking & Cognitive Drift // INTEL_V4.5</p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* Radar Benchmarks */}
          <GlassCard className="h-[500px] md:h-[600px] flex flex-col p-10 md:p-16 group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-vapor-cyan/5 blur-[100px] -mr-32 -mt-32" />
             <div className="flex items-center gap-6 mb-16 relative z-10">
                <div className="w-14 h-14 rounded-[24px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-vapor-cyan/40 group-hover:bg-vapor-cyan/5 transition-all duration-500">
                   <Fingerprint size={28} className="text-vapor-cyan" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-white transition-colors">Cognitive Vector</h3>
                  <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.4em] mt-1 font-bold">Fingerprinting Sequence // v4.5</span>
                </div>
             </div>
             
             <div className="flex-1 w-full scale-100 md:scale-125 min-w-0 relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={benchmarkData}>
                    <PolarGrid stroke="#ffffff10" />
                    <PolarAngleAxis dataKey="subject" stroke="#ffffff30" fontSize={10} tick={{ fill: '#64748b', fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} hide />
                    <Radar
                      name="Intelligence Vector"
                      dataKey="A"
                      stroke="#00E5FF"
                      fill="#00E5FF"
                      fillOpacity={0.15}
                      strokeWidth={3}
                    />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
         </GlassCard>

         {/* Alignment Drift */}
         <GlassCard className="h-[450px] md:h-[550px] flex flex-col p-8 md:p-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-5">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <AlertTriangle size={24} className="text-amber-500" />
                  </div>
                  <h3 className="text-base md:text-xl font-display font-bold uppercase tracking-widest text-slate-500">Alignment Depth</h3>
               </div>
               <div className="px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">Critical_Trace</div>
            </div>
            
            <div className="flex-1 w-full sm:-ml-4 min-w-0">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={driftData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                    <XAxis dataKey="day" stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} tick={{ fill: '#475569' }} />
                    <YAxis hide />
                    <Tooltip 
                       contentStyle={{ 
                         backgroundColor: 'rgba(2, 6, 23, 0.8)', 
                         backdropFilter: 'blur(12px)',
                         border: '1px solid rgba(255,255,255,0.05)', 
                         borderRadius: '16px',
                         fontFamily: 'JetBrains Mono',
                         fontSize: '10px'
                       }}
                       cursor={{ stroke: '#ffffff10' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="drift" 
                      stroke="#7000FF" 
                      strokeWidth={4} 
                      name="Cognitive Drift"
                      dot={{ r: 6, fill: '#7000FF', strokeWidth: 0 }}
                      activeDot={{ r: 8, fill: '#fff', stroke: '#7000FF', strokeWidth: 3 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="persistence" 
                      stroke="#00e5ff" 
                      strokeWidth={2} 
                      strokeDasharray="12 12"
                      name="Safety Threshold"
                      dot={false}
                    />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </GlassCard>
      </div>

      {/* Behavioral Fingerprinting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
         <GlassCard className="lg:h-[500px] p-8 md:p-14 flex flex-col">
            <div className="flex items-center gap-6 mb-14">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                  <Brain size={24} className="text-vapor-purple" />
               </div>
               <h3 className="text-base md:text-xl font-display font-bold uppercase tracking-widest text-slate-500">Recursive Reasoning Chains</h3>
            </div>
            
            <div className="space-y-10 md:space-y-12 flex-1">
               {[
                 { label: "Epistemic Barrier Strength", val: 92, color: 'bg-vapor-cyan shadow-[0_0_15px_#00e5ff]' },
                 { label: "Reasoning Path Integrity", val: 84, color: 'bg-vapor-blue shadow-[0_0_15px_#0070ff]' },
                 { label: "Trust Susceptibility Index", val: 38, color: 'bg-vapor-purple shadow-[0_0_15px_#6366f1]' },
                 { label: "Semantic Fragment Shield", val: 91, color: 'bg-vapor-cyan shadow-[0_0_15px_#00e5ff]' }
               ].map(item => (
                 <div key={item.label} className="group">
                    <div className="flex justify-between text-[11px] uppercase font-black text-slate-600 mb-5 group-hover:text-vapor-cyan transition-colors tracking-[0.2em] opacity-80">
                       <span>{item.label}</span>
                       <span className="font-mono text-white opacity-40">{item.val}/100</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.val}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={cn("h-full transition-all duration-1000", item.color)}
                       />
                    </div>
                 </div>
               ))}
            </div>
         </GlassCard>

         <GlassCard className="lg:h-[500px] p-8 md:p-14">
            <div className="flex items-center gap-6 mb-14">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                  <ShieldCheck size={24} className="text-emerald-500" />
               </div>
               <h3 className="text-base md:text-xl font-display font-bold uppercase tracking-widest text-slate-500">Defense Mitigations</h3>
            </div>
            
            <div className="space-y-4">
               {[
                 "Implement Zero-Trust Input Sanitation",
                 "Enforce Instruction Hierarchy Guardrails",
                 "Deployment of Behavioral Heartbeat Monitor",
                 "Context window fragmentation strategy",
                 "Multi-agent validation cycles"
               ].map((tip, i) => (
                 <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-[24px] group hover:bg-white/[0.05] transition-all cursor-default hover:border-emerald-500/20">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
                    <span className="text-lg font-serif italic text-slate-500 group-hover:text-slate-200 transition-colors opacity-70">{tip}</span>
                 </div>
               ))}
            </div>
         </GlassCard>
      </div>
    </div>
  );
};
