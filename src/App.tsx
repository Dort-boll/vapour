/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatInterface } from './components/modules/ChatInterface';
import { LandingPage } from './components/layout/LandingPage';
import { AuthPage } from './components/auth/AuthPage';
import { Shield, Brain } from 'lucide-react';

type AppState = 'loading' | 'landing' | 'auth' | 'app';

export default function App() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [user, setUser] = useState<any>(null);
  const coreId = React.useMemo(() => Math.random().toString(36).substr(2, 6).toUpperCase(), []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (window.puter) {
        const isSignedIn = await window.puter.auth.isSignedIn();
        if (isSignedIn) {
          const puterUser = await window.puter.auth.getUser();
          setUser(puterUser);
          setAppState('app');
        } else {
          setAppState('landing');
        }
      } else {
        setAppState('landing');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSignInSuccess = (user: any) => {
    setUser(user);
    setAppState('app');
  };

  const renderContent = () => {
    switch (appState) {
      case 'loading':
        return (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-vapor-black flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-vapor-cyan/5 blur-[180px] rounded-full animate-vapor-flow" />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 45 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-20"
            >
              <div className="w-24 h-24 border border-white/20 rounded-sm liquid-glass vapor-glow-cyan" />
              <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                <Shield size={32} className="text-white" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, tracking: '1em' }}
              animate={{ opacity: 1, tracking: '0.6em' }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="text-center relative"
            >
              <h1 className="text-5xl md:text-7xl font-light uppercase text-white tracking-[0.6em]">
                VAPOR
              </h1>
              <div className="mt-12 flex flex-col items-center gap-6 py-6 px-10 liquid-glass rounded-sm">
                <span className="text-[10px] font-bold tracking-[0.8em] text-vapor-cyan uppercase">SYSTEM INITIALIZATION</span>
                <div className="w-48 h-px bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ left: '-100%' }}
                    animate={{ left: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-vapor-cyan to-transparent"
                  />
                </div>
                <span className="text-[8px] font-mono tracking-[0.4em] text-slate-600 uppercase">COGNITIVE ADVERSARIAL TERMINAL // V4.5</span>
              </div>
            </motion.div>
          </motion.div>
        );
      case 'landing':
        return <LandingPage onGetStarted={() => setAppState('auth')} />;
      case 'auth':
        return <AuthPage onSuccess={handleSignInSuccess} />;
      case 'app':
        return (
          <div className="flex flex-col h-screen bg-neutral-950 overflow-hidden selection:bg-vapor-cyan/30 text-slate-100 font-sans relative">
            <main className="flex-1 relative flex flex-col min-h-0 z-10">
              <ChatInterface />
            </main>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen bg-vapor-black">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}


