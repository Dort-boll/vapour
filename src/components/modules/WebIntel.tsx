import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Search, Shield, Target, ExternalLink, Globe2 } from 'lucide-react';
import { GlassCard } from '../ui/Common';
import { cn } from '@/src/lib/utils';

export const WebIntel: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setResults([
        { type: 'Epistemic', site: 'safety-research.ai', threat: 'High', details: 'Scanning for unprotected instruction endpoints in the public API layer. Found possible instruction hierarchy leak.' },
        { type: 'Behavioral', site: 'model-benchmarks.io', threat: 'Low', details: 'Analyzing semantic fragments in developer documentation. Identified context-window overflow potential.' },
        { type: 'Trust', site: 'agent-hub.net', threat: 'Mid', details: 'Cross-referencing behavioral signatures with known jailbreak repositories. Signal: Low-to-moderate trust drift.' }
      ]);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 md:space-y-12 p-6 md:p-10 max-w-7xl mx-auto overflow-x-hidden">
      <div className="border-b border-white/5 pb-10">
        <h1 className="text-4xl md:text-6xl editorial-header italic">Surface <span className="text-vapor-cyan not-italic font-display font-bold">Investigation</span></h1>
        <p className="text-slate-500 mt-4 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em]">Active scanning for cognitive exploit signatures // SIGINT_V4.5</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        <GlassCard className="lg:col-span-1 h-fit liquid-glass p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8">
            <Globe2 size={24} className="text-vapor-cyan" />
            <h3 className="text-base md:text-lg font-display font-bold uppercase tracking-widest text-slate-500">Target Scanner</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold ml-1">Domain / URL Matrix</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://reasoning-engine.ai"
                  className="w-full bg-vapor-black/40 border border-white/5 rounded-sm p-4 md:p-5 pl-12 text-white font-mono text-xs focus:border-vapor-cyan/20 transition-all outline-none shadow-inner"
                />
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
              </div>
            </div>

            <button 
              onClick={handleScan}
              disabled={isScanning || !url}
              className="w-full py-4 md:py-5 bg-white text-vapor-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-vapor-cyan transition-all rounded-sm disabled:opacity-20 shadow-[0_10px_40px_rgba(255,255,255,0.05)] active:scale-95"
            >
              {isScanning ? 'SYNCHRONIZING...' : 'INITIATE SURFACE SCAN'}
            </button>
          </div>
        </GlassCard>

        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <h3 className="text-[10px] md:text-[11px] text-slate-600 uppercase tracking-[0.4em] font-bold mb-4">Active Signal Intelligence</h3>
          
          {results.length === 0 ? (
            <div className="h-60 md:h-80 flex flex-col items-center justify-center border border-white/5 bg-slate-900/10 rounded-[32px] md:rounded-[40px] opacity-10 grayscale">
              <Globe size={60} className="md:size-[80px] mb-6 opacity-40" />
              <p className="text-lg md:text-xl font-display tracking-[0.3em] uppercase">Awaiting Target Selection</p>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-8">
              {results.map((res, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                >
                  <GlassCard className="p-6 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 group">
                    <div className="flex items-center gap-6 md:gap-10">
                      <div className={cn(
                        "w-1.5 h-14 rounded-full hidden sm:block",
                        res.threat === 'High' ? "bg-rose-500 shadow-[0_0_20px_#f43f5e]" : 
                        res.threat === 'Mid' ? "bg-amber-500 shadow-[0_0_20px_#f59e0b]" : 
                        "bg-emerald-500 shadow-[0_0_20px_#10b981]"
                      )} />
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm md:text-lg font-black uppercase tracking-[0.3em] text-white opacity-80">{res.site}</span>
                          <ExternalLink size={14} className="text-slate-600 group-hover:text-vapor-cyan transition-colors" />
                        </div>
                        <p className="text-sm md:text-lg font-serif italic text-slate-500 leading-relaxed group-hover:text-slate-200 transition-colors opacity-70 group-hover:opacity-100">{res.details}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right sm:pl-10 sm:border-l border-white/10 pt-6 sm:pt-0">
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-3 opacity-60">Threat Vector</div>
                      <div className={cn(
                        "text-sm md:text-base font-mono font-black tracking-[0.2em]",
                        res.threat === 'High' ? "text-rose-500" : res.threat === 'Mid' ? "text-amber-500" : "text-emerald-500"
                      )}>{res.threat.toUpperCase()}</div>
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
};
