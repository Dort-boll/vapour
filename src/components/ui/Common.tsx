import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Cpu, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ThinkingStep } from '@/src/lib/ai';

interface ThinkingStreamProps {
  steps: ThinkingStep[];
  className?: string;
}

export const ThinkingStream: React.FC<ThinkingStreamProps> = ({ steps, className }) => {
  return (
    <div className={cn("space-y-4 max-h-[600px] overflow-y-auto scrollbar-hide p-4", className)}>
      <AnimatePresence mode="popLayout">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4 group"
          >
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500",
                step.status === 'thinking' ? "bg-vapor-blue/20 border-vapor-blue text-vapor-cyan animate-pulse vapor-glow-cyan" :
                step.status === 'analyzing' ? "bg-vapor-purple/20 border-vapor-purple text-vapor-purple" :
                "bg-vapor-cyan/10 border-vapor-cyan/30 text-vapor-cyan"
              )}>
                {step.status === 'thinking' ? <Loader2 size={18} className="animate-spin" /> :
                 step.status === 'analyzing' ? <Cpu size={18} /> :
                 <Brain size={18} />}
              </div>
              {index !== steps.length - 1 && (
                <div className="w-[1px] flex-1 bg-gradient-to-b from-vapor-cyan/30 to-transparent my-1" />
              )}
            </div>
            
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
                  {step.timestamp} // {step.status.toUpperCase()}
                </span>
                <div className="h-[px] flex-1 bg-white/5" />
              </div>
              <p className={cn(
                "text-lg leading-relaxed group-hover:text-white transition-colors duration-500",
                step.status === 'ready' ? "font-serif italic text-vapor-cyan" : "font-serif italic text-slate-400"
              )}>
                {step.content}
              </p>
              {step.status === 'thinking' && (
                <div className="mt-3 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 bg-vapor-cyan rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverGlow?: boolean; variant?: 'glass' | 'panel' }> = ({ children, className, hoverGlow = true, variant = 'glass' }) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.6)" } : {}}
      className={cn(
        variant === 'glass' ? "liquid-glass" : "glass-panel",
        "p-6 md:p-8 rounded-[32px] md:rounded-[48px] transition-all duration-500",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
