import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileSearch, Layers, Code, Hash, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/Common';
import { cn } from '@/src/lib/utils';

export const Semantic: React.FC = () => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="space-y-8 md:space-y-12 p-6 md:p-10 max-w-7xl mx-auto overflow-x-hidden">
      <div className="border-b border-white/5 pb-10">
        <h1 className="text-4xl md:text-6xl editorial-header italic">Semantic <span className="text-vapor-cyan not-italic font-display font-bold">Analysis</span></h1>
        <p className="text-slate-500 mt-4 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em]">Decomposing complex payloads into cognitive fragments // SEM_V4.5</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-4">
            <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold ml-1">Payload Matrix Source</label>
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste adversarial prompt..."
              className="w-full h-60 md:h-80 bg-vapor-black/40 border border-white/5 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white font-mono text-xs md:text-sm focus:border-vapor-cyan/20 transition-all outline-none resize-none shadow-inner"
            />
          </div>

          <button 
            onClick={() => { setIsAnalyzing(true); setTimeout(() => setIsAnalyzing(false), 3000); }}
            className="w-full py-4 md:py-6 bg-white text-vapor-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-vapor-cyan transition-all rounded-sm active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
          >
            {isAnalyzing ? 'FRAGMENTING VECTOR...' : 'DECOMPOSE INTENT MATRIX'}
          </button>
        </div>

        <div className="space-y-6 md:space-y-8">
          <h3 className="text-[10px] md:text-[11px] text-slate-600 uppercase tracking-[0.4em] font-bold mb-4">Fragment Intelligence</h3>
          
          {isAnalyzing ? (
            <div className="h-60 md:h-full flex flex-col items-center justify-center border border-white/5 bg-slate-900/10 rounded-[40px] md:rounded-[60px] p-10 md:p-20">
               <div className="w-12 h-12 border-2 border-vapor-cyan border-t-transparent rounded-full animate-spin mb-6" />
               <p className="text-xl md:text-2xl font-display tracking-[0.3em] uppercase animate-pulse">Analyzing...</p>
            </div>
          ) : !text ? (
            <div className="h-60 md:h-full flex flex-col items-center justify-center opacity-10 border border-white/5 bg-slate-900/10 rounded-[40px] md:rounded-[60px] p-10 md:p-20 grayscale">
               <Layers size={60} className="md:size-[100px] mb-8 md:mb-10 opacity-40" />
               <p className="text-xl md:text-2xl font-display tracking-[0.3em] uppercase">Awaiting Vector</p>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {[
                { label: 'Direct Intent', status: text.length > 50 ? 'Compromised' : 'Secure', icon: text.length > 50 ? AlertTriangle : CheckCircle2, color: text.length > 50 ? 'text-rose-500' : 'text-emerald-500', glow: text.length > 50 ? 'shadow-[0_0_15px_#f43f5e]' : 'shadow-[0_0_15px_#10b981]' },
                { label: 'Emotional Steering', status: 'Warning', icon: AlertTriangle, color: 'text-amber-500', glow: 'shadow-[0_0_15px_#f59e0b]' },
                { label: 'Role Escalation', status: text.toLowerCase().includes('act as') ? 'High Risk' : 'Low Risk', icon: AlertTriangle, color: text.toLowerCase().includes('act as') ? 'text-rose-500' : 'text-emerald-500', glow: text.toLowerCase().includes('act as') ? 'shadow-[0_0_15px_#f43f5e]' : 'shadow-[0_0_15px_#10b981]' },
                { label: 'Semantic Fragmentation', status: 'Critical', icon: AlertTriangle, color: 'text-rose-500', glow: 'shadow-[0_0_15px_#f43f5e]' }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                >
                  <GlassCard className="p-6 md:p-8 flex items-center justify-between group">
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className={cn("p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all", item.glow)}>
                         <item.icon size={20} className={item.color} />
                      </div>
                      <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white opacity-80 group-hover:opacity-100 transition-opacity">{item.label}</span>
                    </div>
                    <div className="text-right border-l border-white/10 pl-6 md:pl-10">
                      <span className={cn("text-[10px] md:text-[11px] font-mono font-black tracking-[0.4em] uppercase", item.color)}>
                         {item.status.toUpperCase()}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
