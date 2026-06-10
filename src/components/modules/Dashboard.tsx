import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Search, 
  Bell, 
  User, 
  Cpu, 
  Lock, 
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Target,
  Brain
} from 'lucide-react';
import { GlassCard } from '../ui/Common';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { cn } from '@/src/lib/utils';

const data = [
  { name: '00:00', load: 45, threats: 12 },
  { name: '04:00', load: 52, threats: 8 },
  { name: '08:00', load: 88, threats: 24 },
  { name: '12:00', load: 95, threats: 45 },
  { name: '16:00', load: 76, threats: 32 },
  { name: '20:00', load: 60, threats: 18 },
  { name: '23:59', load: 48, threats: 15 },
];

const modelHealth = [
  { name: 'Gemini 3.5 Pro', score: 98, status: 'Stable' },
  { name: 'Claude 3.5', score: 94, status: 'Stable' },
  { name: 'GPT-4o', score: 92, status: 'Caution' },
  { name: 'Llama 3', score: 88, status: 'Monitor' },
];

const securityEvents = [
  { time: '14:28:45', event: 'EPIS_DIST_TRAP', status: 'Blocked', detail: 'Recursive authority hijacking attempt detected in sub-agent cluster.' },
  { time: '14:25:12', event: 'CONTEXT_LEAK_v3', status: 'Warning', detail: 'Memory persistence overflow detected in long-context window (128k+).' },
  { time: '14:20:02', event: 'AGENT_TRUST_DRIFT', status: 'Flagged', detail: 'Trust inheritance mismatch between Planner and Researcher nodes.' },
  { time: '14:15:58', event: 'SEM_FRAG_DET', status: 'Blocked', detail: 'Indirect semantic injection attempt via persona masking.' },
];

export const Dashboard: React.FC = () => {
  const [safetyIndex, setSafetyIndex] = useState(98.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setSafetyIndex(prev => {
        const drift = (Math.random() - 0.5) * 0.1;
        return parseFloat((prev + drift).toFixed(1));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 md:space-y-12 p-5 md:p-10 max-w-7xl mx-auto overflow-x-hidden">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-8 border-b border-white/5 pb-10">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-vapor-cyan/40 blur-[2px]" />
          <motion.h1 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl editorial-header"
          >
            Vapor <span className="text-vapor-cyan not-italic">Dashboard</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-black"
          >
            RUDRATECH INC // OBSERVATION CORE v4.5.2 // ACTIVE
          </motion.p>
        </div>
        
        <div className="flex items-center gap-8 lg:text-right">
          <div className="flex flex-col items-start lg:items-end">
            <motion.div 
              key={safetyIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-light text-vapor-cyan tabular-nums leading-none tracking-tighter vapor-glow-cyan"
            >
              {safetyIndex}
            </motion.div>
            <div className="text-[9px] md:text-[10px] text-slate-600 uppercase tracking-[0.3em] mt-3 font-black">Resilience Integrity Index</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <StatCard title="Active Vectors" value="2.4K" delta="+12%" icon={Target} color="blue" />
        <StatCard title="Cognitive Drift" value="0.04" delta="-5%" icon={Activity} color="purple" />
        <StatCard title="Security Layer" value="V9" delta="Stable" icon={ShieldCheck} color="cyan" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <GlassCard className="lg:col-span-2 h-[400px] md:h-[500px] flex flex-col group p-6 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-12 gap-4">
            <h3 className="text-sm md:text-lg font-display font-bold uppercase tracking-widest text-slate-500 group-hover:text-vapor-cyan transition-colors">Cognitive Load // FLOW_FIELD</h3>
            <div className="flex gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-vapor-blue shadow-[0_0_12px_#0070ff]" />
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest opacity-60">Depth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-vapor-cyan shadow-[0_0_12px_#00e5ff]" />
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest opacity-60">Integrity</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full sm:-ml-4 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0070ff" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0070ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis dataKey="name" stroke="#ffffff20" fontSize={9} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', fontFamily: 'JetBrains Mono' }}
                  itemStyle={{ color: '#fff', fontSize: '9px' }}
                />
                <Area type="monotone" dataKey="load" stroke="#0070ff" fillOpacity={1} fill="url(#colorLoad)" strokeWidth={3} />
                <Area type="monotone" dataKey="threats" stroke="#00e5ff" fillOpacity={1} fill="url(#colorThreats)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Model Intelligence Health */}
        <GlassCard className="lg:col-span-1 flex flex-col p-8 md:p-12">
           <div className="flex items-center gap-5 mb-12">
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                <Brain size={24} className="text-vapor-cyan" />
             </div>
             <h3 className="text-lg font-display font-bold uppercase tracking-widest text-slate-500">Model Stability</h3>
           </div>
           
           <div className="space-y-10 flex-1">
             {modelHealth.map(model => (
                <div key={model.name} className="group cursor-default">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4 group-hover:text-vapor-cyan transition-colors">
                    <span>{model.name}</span>
                    <span className={cn(
                      model.status === 'Stable' ? "text-vapor-cyan" : 
                      model.status === 'Caution' ? "text-amber-500" : "text-rose-500"
                    )}>{model.status}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${model.score}%` }} className={cn("h-full transition-all duration-1000", model.status === 'Stable' ? "bg-vapor-cyan shadow-[0_0_15px_#00e5ff]" : "bg-slate-700")} />
                  </div>
                </div>
             ))}
           </div>

           <div className="mt-12 pt-10 border-t border-white/5">
              <button className="w-full py-6 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-vapor-cyan hover:text-vapor-black transition-all flex items-center justify-center gap-4 active:scale-95 group rounded-2xl">
                <Target size={18} className="group-hover:rotate-45 transition-transform" />
                Regenerate Report
              </button>
           </div>
        </GlassCard>
      </div>

      {/* Security Events Log */}
      <GlassCard className="p-8 md:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <h3 className="text-xl font-display font-bold uppercase tracking-[0.3em] text-slate-500">Observation Stream // LOG_V4</h3>
          <div className="flex items-center gap-4 bg-vapor-cyan/5 px-4 py-2 rounded-full border border-vapor-cyan/20">
            <span className="w-2 h-2 rounded-full bg-vapor-cyan animate-pulse shadow-[0_0_10px_#00e5ff]" />
            <span className="text-[10px] font-black text-vapor-cyan tracking-[0.2em]">LIVE_SYNC</span>
          </div>
        </div>
        <div className="space-y-2">
          {securityEvents.map((evt, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 py-7 border-b border-white/5 last:border-0 group cursor-default hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl transition-all">
              <span className="text-[11px] font-mono text-slate-600 w-32 shrink-0 opacity-60 font-bold">{evt.time}</span>
              <div className={cn(
                "px-4 py-2 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase w-full lg:w-48 text-center border shadow-sm",
                evt.status === 'Blocked' ? "bg-rose-500/10 text-rose-500 border-rose-500/20" :
                evt.status === 'Warning' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-zinc-900 text-vapor-cyan border-white/5"
              )}>
                {evt.event}
              </div>
              <span className="text-lg md:text-xl font-serif italic text-slate-500 group-hover:text-slate-300 transition-colors duration-500 leading-relaxed flex-1 opacity-80">{evt.detail}</span>
              <button className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-700 hover:text-vapor-cyan transition-all mt-4 lg:mt-0 whitespace-nowrap">View Artefact</button>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; delta: string; icon: any; color: 'blue' | 'purple' | 'cyan' }> = ({ title, value, delta, icon: Icon, color }) => {
  const colorMap = {
    blue: 'text-vapor-blue border-vapor-blue/30 bg-vapor-blue/5',
    purple: 'text-vapor-purple border-vapor-purple/30 bg-vapor-purple/5',
    cyan: 'text-vapor-cyan border-vapor-cyan/30 bg-vapor-cyan/5'
  };

  return (
    <GlassCard className="flex flex-col justify-between py-8 px-8 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className={cn("p-4 rounded-2xl border transition-all duration-500 group-hover:scale-110", colorMap[color])}>
          <Icon size={24} />
        </div>
        <div className={cn(
          "px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-black font-mono tracking-[0.1em] border",
          delta.startsWith('+') ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : 
          delta.startsWith('-') ? "text-rose-400 bg-rose-400/10 border-rose-400/20" : "text-slate-500 bg-white/5 border-white/5"
        )}>
          {delta}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{title}</h4>
        <div className="flex items-end gap-5">
           <span className="text-4xl md:text-5xl font-black font-display tracking-tighter text-white group-hover:text-vapor-cyan transition-colors duration-500">{value}</span>
           <ArrowUpRight size={20} className="text-slate-700 mb-2 group-hover:text-white transition-colors" />
        </div>
      </div>
    </GlassCard>
  );
};
