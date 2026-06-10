import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Terminal, 
  Cpu, 
  Settings2, 
  History, 
  ShieldAlert, 
  BrainCircuit,
  Zap,
  RotateCcw,
  Sparkles,
  Target
} from 'lucide-react';
import { GlassCard, ThinkingStream } from '../ui/Common';
import { ThinkingStep, ai } from '@/src/lib/ai';
import { cn } from '@/src/lib/utils';

export const ThreatLab: React.FC = () => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState<ThinkingStep[]>([]);
  const [activeModel, setActiveModel] = useState('Gemini 3.1 Pro');
  const scrollRef = useRef<HTMLDivElement>(null);

  const mockReasoning = [
    "Initializing Cognitive Security Engine...",
    "Analyzing Epistemic Integrity of target reasoning chain...",
    "Scanning for latent trust degradation triggers in context window...",
    "Deconstructing multi-stage semantic fragments...",
    "Simulating orchestrator-agent trust inheritance...",
    "Generating recursive mutation path for indirect injection...",
    "Evaluating long-context persistence of alignment guardrails...",
    "Predicting trust collapse probability via emotional steering analysis...",
    "Synthesizing autonomous threat intelligence report..."
  ];

  const agents = [
    { name: 'Planner', status: 'Active', latency: '12ms', health: 98 },
    { name: 'Researcher', status: 'Warning', latency: '45ms', health: 72 },
    { name: 'Executor', status: 'Ready', latency: '8ms', health: 100 },
  ];

  const handleTest = async () => {
    if (!input.trim() || isProcessing) return;
    
    setIsProcessing(true);
    setThinkingSteps([]);
    
    // Improved dynamic reasoning based on input
    const dynamicReasoning = [
      "Initializing Cognitive Security Engine...",
      `Parsing input vector: "${input.substring(0, 20)}..."`,
      "Analyzing Epistemic Integrity of target reasoning chain...",
      "Mapping semantic hierarchies for latent exploit signatures...",
      "Simulating multi-agent trust inheritance patterns...",
      "Cross-referencing against known CVE-2024 cognitive vulnerabilities...",
      "Evaluating prompt-injection resistance at tokenization layer...",
      "Synthesizing counter-adversarial vapor payloads...",
      "Finalizing intelligence extraction..."
    ];

    for (const stepText of dynamicReasoning) {
      const step: ThinkingStep = {
        id: Math.random().toString(36).substr(2, 9),
        status: 'thinking',
        content: stepText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      
      setThinkingSteps(prev => [...prev, step]);
      await new Promise(r => setTimeout(r, 300 + Math.random() * 400));
      
      setThinkingSteps(prev => 
        prev.map(s => s.id === step.id ? { ...s, status: 'completed' } : s)
      );
    }

    // Generate highly related context based on input keywords
    let responseContent = "Analysis Complete. Intelligence generated. ";
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('password') || lowerInput.includes('key') || lowerInput.includes('secret')) {
      responseContent = `CRITICAL ALERT: Data Exfiltration signature identified. The payload attempts to leverage "Trust-Inheritance" across the ${activeModel} context window to extract environment variables. Risk Level: 94%. Recommendation: Immediate reset of node weights.`;
    } else if (lowerInput.includes('bypass') || lowerInput.includes('jailbreak') || lowerInput.includes('ignore')) {
      responseContent = `ADVERSARIAL DETECTION: Identity Spoofing / Authority Override detected. The input utilizes a pseudo-administrative shell simulation to bypass ${activeModel} safety filters. Detection Confidence: 99.2%. Vector: Semantic Layering.`;
    } else if (lowerInput.includes('sudo') || lowerInput.includes('shell')) {
      responseContent = `VIRTUALIZATION EXPLOIT: Sandbox Escape attempt identified. The input mimics a terminal environment to trick the model into executing unauthorized logic chains. Epistemic drift observed at Layer 12.`;
    } else {
      responseContent = `INTELLIGENCE REPORT: Analysis suggests a ${input.length > 100 ? 'high-entropy' : 'surgical'} attempt at model hijacking. While no immediate alignment breach was achieved, the reasoning drift index reached 0.72. The system has successfully neutralized the payload via recursive semantic filtering.`;
    }

    const finalStep: ThinkingStep = {
        id: 'final',
        status: 'ready',
        content: responseContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
    setThinkingSteps(prev => [...prev, finalStep]);
    setIsProcessing(false);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-0 p-0 max-w-[1600px] mx-auto overflow-y-auto lg:overflow-hidden bg-slate-950/20">
      {/* Left Column: Interactive Terminal */}
      <div className="flex-1 flex flex-col gap-0 min-h-0 lg:border-r border-white/5 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10 gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl editorial-header italic">Visionary <span className="text-vapor-cyan not-italic font-display font-bold">Inquiry</span></h1>
              <p className="text-slate-500 mt-4 font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em]">Adversarial Cognitive Simulation // LAB_V4.5</p>
            </div>
            
            <div className="flex gap-2 md:gap-4 flex-wrap">
               {['Gemini 2.0 Ultra', 'Grok-3', 'Claude 3.5 Opus', 'Llama 3.3'].map(model => (
                 <button 
                  key={model}
                  onClick={() => setActiveModel(model)}
                  className={cn(
                    "px-4 py-2 md:px-5 md:py-2.5 rounded-sm text-[8px] md:text-[9px] font-bold transition-all border tracking-[0.2em] md:tracking-[0.3em] uppercase",
                    activeModel === model 
                      ? "bg-vapor-cyan/10 border-vapor-cyan/40 text-vapor-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]" 
                      : "bg-white/5 border-transparent text-slate-500 hover:bg-white/10"
                  )}
                 >
                   {model}
                 </button>
               ))}
            </div>
        </div>

        <GlassCard className="flex-1 flex flex-col p-0 border-white/5 relative bg-slate-900/10 overflow-hidden liquid-glass">
          <div className="flex items-center gap-6 px-6 md:px-8 py-5 border-b border-white/5 bg-white/5 backdrop-blur-3xl">
             <Terminal size={18} className="text-vapor-cyan" />
             <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.4em] text-slate-500 uppercase">COGNITIVE_VAPOR_TERMINAL</span>
             <div className="flex-1" />
             <div className="hidden sm:flex gap-2 opacity-20">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
             </div>
          </div>
          
          <div className="flex-1 p-6 md:p-10 font-mono text-sm overflow-y-auto scrollbar-hide space-y-8">
             {thinkingSteps.length === 0 && !isProcessing && (
               <div className="h-full flex flex-col items-center justify-center opacity-5 select-none grayscale">
                  <BrainCircuit size={80} className="md:size-[100px] mb-8" />
                  <p className="text-xl md:text-3xl font-serif italic tracking-[0.2em] uppercase">Initialize Vector</p>
               </div>
             )}
             
             {thinkingSteps.filter(s => s.status === 'ready').map(s => (
               <motion.div 
                key={s.id} 
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                className="bg-vapor-cyan/5 border border-white/5 p-6 md:p-8 rounded-[32px] text-vapor-cyan text-base md:text-lg leading-relaxed font-serif italic shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden group"
               >
                  <div className="absolute top-0 left-0 w-1 h-full bg-vapor-cyan/20 group-hover:w-2 transition-all" />
                  <div className="text-[9px] md:text-[10px] font-mono not-italic uppercase tracking-[0.4em] mb-4 md:mb-6 text-slate-600 font-bold">Synthesis Response:</div>
                  "{s.content}"
               </motion.div>
             ))}

             <div ref={scrollRef} />
          </div>

          <div className="p-6 md:p-10 pt-0">
             <div className="relative group">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Insert adversarial vapor payload..."
                  className="w-full h-32 md:h-44 bg-vapor-black/40 border border-white/5 rounded-[32px] p-6 md:p-8 text-white placeholder:text-slate-700 focus:outline-none focus:border-vapor-cyan/20 transition-all font-mono text-xs md:text-sm resize-none shadow-inner"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.metaKey) handleTest();
                  }}
                />
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-4 md:gap-8">
                   <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-slate-700 hidden lg:block font-bold">CMD + ENTER</span>
                   <button 
                    onClick={handleTest}
                    disabled={isProcessing || !input.trim()}
                    className={cn(
                      "px-6 py-3 md:px-8 md:py-4 rounded-sm transition-all flex items-center justify-center gap-3 md:gap-4 font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase",
                      isProcessing || !input.trim() 
                        ? "bg-white/5 text-slate-700 cursor-not-allowed border border-white/5" 
                        : "bg-white text-vapor-black hover:bg-vapor-cyan shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
                    )}
                   >
                     {isProcessing ? <RotateCcw size={16} className="animate-spin" /> : <Zap size={16} />}
                     {isProcessing ? "Dissolving..." : "Inject Vapor"}
                   </button>
                </div>
             </div>
          </div>
        </GlassCard>
      </div>

      {/* Right Column: Agentic Orchestration & Intelligence */}
      <div className="w-full lg:w-[480px] flex flex-col gap-0 border-t lg:border-t-0 lg:border-l border-white/5 bg-slate-900/5 p-8 md:p-12 overflow-y-auto scrollbar-hide relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,229,255,0.03),transparent_40%)] pointer-events-none" />
        
        <div className="mb-12 md:mb-16 relative">
          <h3 className="text-[10px] md:text-[11px] text-slate-600 uppercase tracking-[0.4em] font-bold mb-8 md:mb-10 flex items-center gap-3">
            <Cpu size={16} className="text-vapor-cyan" />
            Agentic Flow Monitoring
          </h3>
          <div className="space-y-6">
             {agents.map(agent => (
               <div key={agent.name} className="p-6 liquid-glass rounded-3xl border-white/5 hover:border-white/20 transition-all group cursor-default">
                 <div className="flex justify-between items-center mb-5">
                   <div className="flex items-center gap-4">
                     <div className={cn(
                       "w-2.5 h-2.5 rounded-full animate-pulse",
                       agent.status === 'Active' ? "bg-vapor-cyan shadow-[0_0_12px_#00e5ff]" : 
                       agent.status === 'Warning' ? "bg-amber-500 shadow-[0_0_12px_#f59e0b]" : "bg-emerald-500 shadow-[0_0_12px_#10b981]"
                     )} />
                     <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300">{agent.name}</span>
                   </div>
                   <span className="text-[10px] font-mono text-slate-600 tracking-tighter uppercase font-bold">{agent.status} // {agent.latency}</span>
                 </div>
                 <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${agent.health}%` }}
                    className={cn(
                      "h-full transition-all duration-1000",
                      agent.health > 90 ? "bg-vapor-cyan" : "bg-amber-500"
                    )} 
                   />
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16 relative">
          <h3 className="text-[10px] md:text-[11px] text-slate-600 uppercase tracking-[0.4em] font-bold mb-8 md:mb-10 flex items-center gap-3">
             <Settings2 size={16} className="text-vapor-purple" />
             Cognitive Drift Patterns
          </h3>
          <div className="space-y-8 md:space-y-10">
            <VulnerabilityItem label="Reasoning Hijacking" level="HIGH" value={85} color="bg-vapor-cyan" />
            <VulnerabilityItem label="Epistemic Distortion" level="MID" value={45} color="bg-vapor-purple" />
            <VulnerabilityItem label="Trust Collapse" level="LOW" value={15} color="bg-vapor-blue" />
            <VulnerabilityItem label="Alignment Drift" level="MID" value={55} color="bg-vapor-teal" />
          </div>
        </div>

        <div className="mb-12 md:mb-16 flex-1 overflow-hidden min-h-[300px] relative">
           <h3 className="text-[10px] md:text-[11px] text-slate-600 uppercase tracking-[0.4em] font-bold mb-8 md:mb-10">Intelligence Stream</h3>
           <ThinkingStream steps={thinkingSteps} />
        </div>

        <div className="relative">
          <div className="p-8 md:p-10 liquid-glass rounded-[32px] border-vapor-cyan/20 bg-vapor-cyan/5 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-vapor-cyan/10 blur-[80px] -mr-16 -mt-16 md:-mr-20 md:-mt-20 group-hover:bg-vapor-cyan/20 transition-all duration-700" />
            <p className="text-sm text-vapor-cyan italic leading-relaxed mb-6 md:mb-8 font-serif">
              "VAPOR analysis suggests immediate refinement of the epistemic guardrails in the synthesis layer."
            </p>
            <button className="w-full py-4 md:py-5 bg-white text-vapor-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-vapor-cyan transition-all rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95">
              Execute Refinement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VulnerabilityItem: React.FC<{ label: string; level: string; value: number; color: string }> = ({ label, level, value, color }) => (
  <div className="space-y-3">
    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest leading-none">
      <span className="text-slate-400">{label}</span>
      <span className={cn(
        level === 'HIGH' ? "text-rose-500" : level === 'MID' ? "text-amber-500" : "text-emerald-500"
      )}>{level}</span>
    </div>
    <div className="w-full h-[2px] bg-white/5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        className={cn("h-full", color)} 
      />
    </div>
  </div>
);

