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

const HeroWord = ({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) => (
  <span
    className={`relative inline-block font-semibold tracking-[-0.02em] ${
      light ? "text-white" : "text-white"
    } ${className}`}
    style={
      !light
        ? {
            textShadow:
              "0 1px 0 rgba(255,255,255,0.10), 0 2px 0 rgba(59,130,246,0.10), 0 10px 28px rgba(2,6,23,0.55)",
          }
        : {
            textShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }
    }
  >
    {children}
  </span>
);

const GradientWord = ({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) => (
  <span
    className={`relative inline-block bg-gradient-to-b ${
      light ? "from-white via-cyan-100 to-blue-200" : "from-white via-cyan-200 to-blue-300"
    } bg-clip-text text-transparent font-semibold tracking-[-0.02em] ${className}`}
    style={
      !light
        ? {
            filter: "drop-shadow(0 6px 20px rgba(34,211,238,0.16))",
            textShadow: "0 10px 24px rgba(2,6,23,0.45)",
          }
        : {
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
          }
    }
  >
    {children}
  </span>
);

/* ----------------------------- Coin Visual ----------------------------- */

const GoldParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0, 1.2, 0],
          y: [0, -80],
          x: (Math.random() - 0.5) * 40,
        }}
        transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-yellow-400/40 blur-[1px]"
      />
    ))}
  </div>
);

const GoldCoin = () => (
  <div className="relative z-[50] flex items-center justify-center group/coin scale-75 sm:scale-100">
    <div className="pointer-events-none absolute -bottom-8 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="h-10 w-40 rounded-[100%] bg-black/60 blur-2xl"
      />
    </div>
    <GoldParticles />
    <motion.div
      animate={{ rotateY: [0, 360], y: [0, -15, 0] }}
      transition={{ rotateY: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
      className="relative h-28 w-28 sm:h-32 sm:w-32"
    >
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{ transform: `translateZ(${-i * 0.5}px)` }} className="absolute inset-0 rounded-full border-[0.2px] border-[#8A6D3B]/50 bg-gradient-to-br from-[#D4AF37] via-[#F9D423] to-[#5C4033]" />
      ))}
      <div style={{ transform: "translateZ(1px)" }} className="absolute inset-0 flex items-center justify-center rounded-full border-[2px] border-[#F9D423] bg-gradient-to-br from-[#FFF9E5] via-[#D4AF37] to-[#5C4033] shadow-xl">
        <span className="text-5xl font-black italic tracking-tighter text-[#3D2B1F] drop-shadow-sm">88</span>
        <div className="absolute -right-2 -top-2">
            <Zap className="h-6 w-6 fill-[#F9D423] text-[#F9D423]" />
        </div>
      </div>
    </motion.div>
  </div>
);

/* ----------------------------- Smooth Divider ----------------------------- */

const SmoothShapeDivider = ({
  fillColor,
  type = "wave",
  inverted = false,
  className = "",
}: {
  fillColor: string;
  type?: "wave" | "curve" | "concave";
  inverted?: boolean;
  className?: string;
}) => {
  const paths = {
    wave: "M0,160 C320,300,420,0,1440,160 L1440,320 L0,320 Z",
    curve: "M0,320 Q720,0 1440,320 L0,320 Z",
    concave: "M0,0 Q720,280 1440,0 L1440,320 L0,320 Z"
  };

  return (
    <div className={`absolute left-0 w-full leading-[0] z-20 pointer-events-none ${className} ${inverted ? "top-[-1px] rotate-180" : "bottom-[-1px]"}`}>
      <svg viewBox="0 0 1440 320" className="w-full h-[60px] md:h-[120px]" preserveAspectRatio="none">
        <path fill={fillColor} d={paths[type]} stroke="none" />
      </svg>
    </div>
  );
};

/* ----------------------------- Registration Form ----------------------------- */

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", fullName: "", agreedToTerms: false });

  const isStep1Valid = !!(formData.name && formData.email.includes("@") && formData.password.length >= 6);
  const isStep2Valid = !!(formData.fullName && formData.phone && formData.agreedToTerms);

  return (
    <section id="registration-form" className="relative z-10 bg-[#020617] px-6 py-32 overflow-visible">
      {/* Concave divider to transition from Steps */}
      <SmoothShapeDivider type="concave" fillColor="#020617" inverted={true} className="top-0" />
      
      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl md:p-12"
        >
          {/* FLOATING COIN: Positioned at Top Right of Form Box */}
          <div className="absolute -right-8 -top-12 sm:-right-16 sm:-top-20 z-50">
            <GoldCoin />
          </div>

          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white">Create Your Account</h2>
            <p className="text-blue-200/70">Join the elite circle of high-rollers</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div key="s1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">Name</label>
                  <input type="text" placeholder="Login ID" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                </div>
                <button onClick={() => setStep(2)} disabled={!isStep1Valid} className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-xl disabled:opacity-30">Next Step</button>
              </motion.div>
            ) : (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">Full Name</label>
                  <input type="text" placeholder="Matches Bank Name" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100">Phone</label>
                  <input type="tel" placeholder="+65 ..." className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:ring-2 ring-blue-500/50" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <button disabled={!isStep2Valid} className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-xl disabled:opacity-30">Complete Registration</button>
                <button onClick={() => setStep(1)} className="w-full text-xs text-blue-400/50 hover:text-blue-400">Back to Step 1</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------------- App ----------------------------- */

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stepData = [
    { step: "1", title: "Register", icon: UserPlus },
    { step: "2", title: "Deposit", icon: Wallet },
    { step: "3", title: "Play", icon: Gamepad2 },
    { step: "4", title: "Claim", icon: Gift },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020f6a] font-sans text-slate-200">
      
      {/* Background FX */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,#020f6a_70%)]" />
      </motion.div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative flex h-[85vh] items-center justify-center overflow-hidden">
          <div className="text-center">
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-7xl font-black italic tracking-tighter text-white md:text-9xl">i88 GOLD</motion.h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.5em] text-blue-300/40">Exclusive Rewards Program</p>
          </div>
          {/* Smooth transition into Steps Section: Darker Blue Fill */}
          <SmoothShapeDivider type="curve" fillColor="#01081a" />
        </section>

        {/* STEPS SECTION */}
        <section id="steps-to-claim" className="relative z-10 bg-[#01081a] px-6 py-32 overflow-visible">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-4xl font-bold md:text-6xl"><HeroWord light>Steps to Claim</HeroWord></h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stepData.map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white border border-white/20 transition-all group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] md:h-28 md:w-28">
                    <item.icon className="h-10 w-10 text-blue-600 md:h-12 md:w-12" />
                    <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">{item.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Transition into Registration Section */}
          <SmoothShapeDivider type="wave" fillColor="#020617" />
        </section>

        {/* REGISTRATION SECTION */}
        <RegistrationForm />
      </main>
    </div>
  );
}
