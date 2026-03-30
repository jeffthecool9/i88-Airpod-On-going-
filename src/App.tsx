/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import colaImg from "./assets/cola2.png";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  UserPlus,
  Wallet,
  Gamepad2,
  Gift,
  Mail,
  Lock,
  User,
  Phone,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import React, { useState, useEffect, useMemo, ReactNode } from "react";

/* ----------------------------- Text System ----------------------------- */

const HeroWord = ({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) => (
  <span
    className={`relative inline-block font-semibold tracking-[-0.02em] ${light ? "text-white" : "text-white"} ${className}`}
    style={!light ? { textShadow: "0 1px 0 rgba(255,255,255,0.10), 0 2px 0 rgba(59,130,246,0.10), 0 10px 28px rgba(2,6,23,0.55)" } : { textShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
  >
    {children}
  </span>
);

/* ----------------------------- UI Transitions (Smooth Curves) ----------------------------- */

/**
 * SectionTransition
 * This is the magic. It uses the background color of the 'target' section 
 * to create a seamless curve that overlays the previous section.
 */
const SectionTransition = ({ 
  type = "wave", 
  fillColor = "#020f6a", 
  position = "bottom",
  className = "" 
}: { 
  type?: "wave" | "curve" | "concave"; 
  fillColor: string; 
  position?: "top" | "bottom";
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, position === "bottom" ? -20 : 20]);

  const paths = {
    wave: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    curve: "M0,160 Q720,0 1440,160 L1440,320 L0,320 Z",
    concave: "M0,0 Q720,160 1440,0 L1440,320 L0,320 Z"
  };

  return (
    <motion.div 
      style={{ y: yParallax }}
      className={`absolute left-0 w-full leading-[0] z-20 ${position === "top" ? "top-0 rotate-180" : "bottom-[-2px]"} ${className}`}
    >
      <svg 
        viewBox="0 0 1440 320" 
        className="w-full h-[80px] md:h-[150px]" 
        preserveAspectRatio="none"
      >
        <path 
          fill={fillColor} 
          d={paths[type]} 
          className="transition-colors duration-500"
        />
      </svg>
    </motion.div>
  );
};

/* ----------------------------- Visual Decorations ----------------------------- */

const GoldParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0],
          y: [0, -100],
          x: (Math.random() - 0.5) * 50,
        }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-yellow-400/40 blur-[1px]"
      />
    ))}
  </div>
);

/* ----------------------------- Sections ----------------------------- */

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", fullName: "", agreedToTerms: false });

  return (
    <section id="registration" className="relative z-10 bg-[#000a14] px-6 py-32">
      {/* Top Curve biting into previous section */}
      <SectionTransition type="concave" fillColor="#000a14" position="top" className="-mt-1" />
      
      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-12 backdrop-blur-3xl shadow-2xl"
        >
           <div className="mb-8 text-center">
             <h2 className="text-3xl font-bold text-white">Join the Elite</h2>
             <p className="text-blue-300/50">Seamless registration for high-rollers</p>
           </div>
           
           <div className="space-y-6">
              <input type="text" placeholder="Login ID" className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" />
              <input type="email" placeholder="Email Address" className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" />
              <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-xl hover:shadow-blue-500/20 transition-all">
                Access Member Area
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------------- Main App ----------------------------- */

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stepData = [
    { step: "1", title: "Join", icon: UserPlus },
    { step: "2", title: "Deposit", icon: Wallet },
    { step: "3", title: "Play", icon: Gamepad2 },
    { step: "4", title: "Win", icon: Gift },
  ];

  return (
    <div className="relative min-h-screen bg-[#020f6a] font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1696f9_0%,#020f6a_70%)]" />
        <GoldParticles />
        
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter text-white"
          >
            I88 PLATINUM
          </motion.h1>
          <p className="mt-4 text-blue-200/60 tracking-widest uppercase text-sm">Elevate Your Game</p>
        </div>

        {/* Transition to next section: Convex Curve */}
        <SectionTransition type="curve" fillColor="#0a1a8a" position="bottom" />
      </section>

      {/* Steps Section */}
      <section id="steps" className="relative z-10 bg-[#0a1a8a] py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stepData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group-hover:scale-110 transition-transform">
                  <item.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition to registration: Liquid Wave */}
        <SectionTransition type="wave" fillColor="#000a14" position="bottom" />
      </section>

      {/* Registration Section */}
      <RegistrationForm />

      {/* Footer Visual */}
      <footer className="h-20 bg-[#000a14] flex items-center justify-center border-t border-white/5">
        <p className="text-xs text-white/20 uppercase tracking-[0.4em]">© 2026 i88 Gaming Group</p>
      </footer>
    </div>
  );
}
