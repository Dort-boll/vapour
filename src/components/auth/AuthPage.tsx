import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Terminal, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AuthPageProps {
  onSuccess: (user: any) => void;
}

declare global {
  interface Window {
    puter: any;
  }
}

export const AuthPage: React.FC<AuthPageProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (window.puter) {
        // Puter.js sign-in logic
        const user = await window.puter.auth.signIn();
        onSuccess(user);
      } else {
        // Fallback for development if puter is not loaded
        console.warn('Puter.js not found, simulating success');
        setTimeout(() => {
          onSuccess({ username: 'Operator_01', email: 'onesimus@vayu.sec' });
        }, 1500);
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('System authentication failed. Please check your credentials.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-vapor-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),rgba(99,102,241,0.02),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-vapor-blue/5 blur-[180px] rounded-full animate-vapor-flow" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-vapor-cyan/5 blur-[180px] rounded-full animate-vapor-flow" style={{ animationDelay: '-5s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-panel p-10 md:p-14 border border-white/10 rounded-[64px] shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          {isLoading && (
            <motion.div 
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-vapor-cyan to-transparent z-20 blur-[1px]"
            />
          )}

          <div className="flex flex-col items-center mb-16 relative z-10">
            <motion.div 
              animate={isLoading ? { rotate: [45, 135, 45], scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-white shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-sm flex items-center justify-center rotate-45 mb-14 border border-white/40 group cursor-pointer transition-all duration-700 hover:rotate-90"
            >
              <Shield size={36} className="text-vapor-black -rotate-45" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.4em] md:tracking-[0.6em] uppercase text-white mb-4 text-center">
              VAPOR<span className="text-vapor-cyan font-black">_X</span>
            </h1>
            <div className="flex items-center gap-4 opacity-40 mb-10">
              <div className="w-1 h-1 rounded-full bg-vapor-cyan animate-pulse" />
              <p className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase text-center">Protocol Management Utility // v4.5.2</p>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="space-y-12 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-black ml-2 opacity-60">System Handshake</label>
              <button 
                id="execute-auth-button"
                onClick={handleSignIn}
                disabled={isLoading}
                className={cn(
                  "w-full py-6 md:py-8 bg-white text-vapor-black text-[10px] md:text-xs font-black uppercase tracking-[0.5em] rounded-sm transition-all flex items-center justify-center gap-5 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105",
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-vapor-cyan hover:shadow-[0_20px_60px_rgba(0,229,255,0.4)]"
                )}
              >
                {isLoading ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <Lock size={20} />
                )}
                {isLoading ? "SYNCHRONIZING..." : "EXECUTE_LOGON"}
              </button>
            </div>

            <div className="flex items-center gap-6 opacity-30">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-black">OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <button className="w-full py-5 border border-white/5 bg-white/[0.02] text-white/50 text-[10px] font-black uppercase tracking-[0.4em] rounded-sm hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-4 hover:border-white/20 group">
              <Terminal size={20} className="group-hover:text-vapor-cyan transition-colors" />
              Manual Terminal Bypass
            </button>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-5 bg-rose-500/5 border border-rose-500/20 rounded-2xl flex items-center gap-4 text-rose-500 text-[11px] font-bold uppercase tracking-wider shadow-[0_10px_30px_rgba(244,63,94,0.1)]"
            >
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0 shadow-[0_0_8px_#f43f5e]" />
              {error}
            </motion.div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em] font-medium leading-relaxed opacity-60">
              SECURITY ADVISORY: THIS TERMINAL IS RESTRICTED TO <br />
              AUTHORIZED RUDRATECH COGNITIVE ASSETS.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
