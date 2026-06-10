import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  FlaskConical, 
  Zap, 
  BrainCircuit, 
  BarChart3, 
  Settings,
  Menu,
  X,
  Target,
  FileSearch,
  Search,
  Share2,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'console', label: 'Console', icon: MessageSquare },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'lab', label: 'Threat Lab', icon: FlaskConical },
  { id: 'mutation', label: 'Prompt Mutation', icon: Zap },
  { id: 'web-intel', label: 'Web Intelligence', icon: Search },
  { id: 'agentic', label: 'Agentic Security', icon: Share2 },
  { id: 'semantic', label: 'Semantic Analyzer', icon: FileSearch },
  { id: 'intelligence', label: 'AI Intelligence', icon: BrainCircuit },
];

export const Sidebar: React.FC<SidebarProps & { isOpen?: boolean; onClose?: () => void }> = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 lg:static lg:translate-x-0 h-screen flex flex-col bg-black/40 backdrop-blur-[80px] border-r border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-[100] w-72 lg:w-64 shadow-[40px_0_100px_rgba(0,0,0,0.6)] lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          !isOpen && "pointer-events-none lg:pointer-events-auto"
        )}
      >
        <div className="p-10 pb-12 flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 liquid-glass rounded-sm rotate-45 flex items-center justify-center vapor-glow-cyan border-white/20">
              <ShieldAlert size={16} className="text-white -rotate-45" />
            </div>
            <button 
              onClick={onClose} 
              className="lg:hidden p-3 -mr-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-75"
              aria-label="Close Sidebar"
              style={{ pointerEvents: 'auto' }}
            >
              <X size={24} />
            </button>
          </div>
          <label className="text-[10px] text-slate-500 uppercase tracking-[0.6em] font-black opacity-60">
            PROT_CORE // v4.5
          </label>
        </div>

        <nav className="flex-1 px-6 space-y-3 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (onClose) onClose();
                }}
                className={cn(
                  "w-full flex items-center gap-4 py-5 px-6 rounded-2xl transition-all relative group text-left",
                  isActive 
                    ? "bg-white/5 text-vapor-cyan border border-white/10 shadow-[0_4px_20px_rgba(0,229,255,0.1)]" 
                    : "text-slate-600 hover:text-white"
                )}
              >
                <Icon size={18} className={cn("transition-colors", isActive && "text-vapor-cyan")} />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase">{item.label}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute right-6 w-1.5 h-1.5 rounded-full bg-vapor-cyan blur-[2px] vapor-glow-cyan"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-10 border-t border-white/10">
          <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 relative overflow-hidden backdrop-blur-md">
            <div className="text-[10px] text-vapor-cyan/60 font-black mb-6 uppercase tracking-[0.4em]">Engine Load</div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-vapor-cyan shadow-[0_0_12px_#00e5ff]"
               />
            </div>
            <div className="mt-4 text-[9px] text-slate-700 font-mono tracking-widest text-right">0.85_DRIVE</div>
          </div>
        </div>
      </aside>
    </>
  );
};
