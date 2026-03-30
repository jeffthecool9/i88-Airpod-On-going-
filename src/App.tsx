/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import colaImg from "./assets/cola2.png";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  Globe,
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
import React, { useState, useEffect, ReactNode } from "react";

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
    className={`relative inline-block font-semibold tracking-[-0.02em] ${light ? "text-white" : "text-white"} ${className}`}
    style={
      !light
        ? {
            textShadow:
              "0 1px 0 rgba(255,255,255,0.10), 0 2px 0 rgba(59,130,246,0.10), 0 10px 28px rgba(2,6,23,0.55)",
          }
        : {
            textShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }
    }
  >
    {children}
  </span>
);

const GoldConfetti = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -250]);

  return (
    <motion.div style={{ y: parallaxY }} className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {[...Array(50)].map((_, i) => {
        const width = Math.random() * 20 + 15;
        const height = width * (0.25 + Math.random() * 0.2);
        const duration = Math.random() * 7 + 8;
        const delay = Math.random() * 15;
        const left = Math.random() * 100;
        const depth = Math.random();

        const colors = [
          "conic-gradient(from 45deg, #CD7F32, #A57164, #804A00, #CD7F32)",
          "conic-gradient(from 45deg, #F9D423, #FFD700, #D4AF37, #F9D423)",
          "conic-gradient(from 45deg, #B87333, #8B4513, #CD7F32, #B87333)",
          "conic-gradient(from 45deg, #E6BE8A, #D4AF37, #996515, #E6BE8A)",
        ];
        const bg = colors[i % colors.length];

        return (
          <motion.div
            key={`confetti-${i}`}
            initial={{
              top: "-10%",
              left: `${left}%`,
              rotateX: Math.random() * 360,
              rotateY: Math.random() * 360,
              rotateZ: Math.random() * 360,
              opacity: 0,
              scale: 0.4 + depth * 0.6,
            }}
            animate={{
              top: "110%",
              left: `${left + (Math.random() - 0.5) * 40}%`,
              rotateX: [0, 1080, 2160],
              rotateY: [0, 720, 1440],
              rotateZ: [0, 360, 720],
              opacity: [0, 1, 1, 0],
              x: [0, Math.sin(i) * 80, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            className="absolute"
            style={{
              width,
              height,
              borderRadius: "1px",
              background: bg,
              boxShadow: `0 ${4 + depth * 8}px ${12 + depth * 16}px rgba(0, 0, 0, ${
                0.1 + depth * 0.2
              }), inset 0 0 4px rgba(255, 255, 255, 0.6)`,
              filter: `brightness(1.1) contrast(1.1) blur(${depth < 0.2 ? "1.5px" : "0px"})`,
              zIndex: Math.floor(depth * 10),
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-black/30" />
            <motion.div
              animate={{
                opacity: [0.1, 0.6, 0.1],
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const RealisticBackground = () => (
  <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[#0a1580]" />
    
    <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          animate={{ opacity: [0.15, 0.3, 0.15], rotate: [i * 45, i * 45 + 10, i * 45] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 origin-center"
          style={{
            background: `conic-gradient(from ${i * 45}deg at 50% 50%, transparent 0%, rgba(34,211,238,0.2) 5%, transparent 15%)`,
            filter: "blur(15px)"
          }}
        />
      ))}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(125,211,252,0.4)_20%,rgba(143,177,233,0)_60%)] blur-[40px]"
      />
    </div>

    <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
  </div>
);

const SectionSeam = ({ 
  className = "", 
  fillColor = "#020f6a",
  shape = "dip" 
}: { 
  className?: string; 
  fillColor?: string;
  shape?: "dome" | "dip";
}) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none ${className}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[76px] sm:h-[120px]">
      {shape === "dome" ? (
        <>
          <path d="M0,120 L0,100 C480,0 720,0 1200,100 L1200,120 Z" fill={fillColor} />
          <path d="M0,100 C480,0 720,0 1200,100" fill="none" stroke="url(#line-glow)" strokeWidth="3" />
        </>
      ) : (
        <>
          <path d="M0,0 C480,100 720,100 1200,0 L1200,120 L0,120 Z" fill={fillColor} />
          <path d="M0,0 C480,100 720,100 1200,0" fill="none" stroke="url(#line-glow)" strokeWidth="3" />
        </>
      )}
      <defs>
        <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    fullName: "",
    agreedToTerms: false,
  });

  const nextStep = () => setStep(1.5);

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (formData.name && emailRegex.test(formData.email) && passwordRegex.test(formData.password)) {
      setStep(2);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  const isStep1Valid = formData.name && emailRegex.test(formData.email) && passwordRegex.test(formData.password);
  const isStep2Valid = formData.fullName && formData.phone && formData.agreedToTerms;

  return (
    <section
      id="registration-form"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#020f6a] to-[#01083a] px-6 py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl md:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white">Create Your Account</h2>
            <p className="text-blue-200/70">Join the elite circle of high-rollers</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-blue-100">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                    <input
                      type="text"
                      placeholder="Your login id"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-blue-100">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className={`w-full rounded-2xl border bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        formData.email && !emailRegex.test(formData.email)
                          ? "border-red-500/50 ring-1 ring-red-500/20"
                          : "border-white/10"
                      }`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {formData.email && !emailRegex.test(formData.email) && (
                    <p className="ml-1 mt-1 text-xs text-red-400">Please enter a valid email address</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-blue-100">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`w-full rounded-2xl border bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        formData.password && !passwordRegex.test(formData.password)
                          ? "border-red-500/50 ring-1 ring-red-500/20"
                          : "border-white/10"
                      }`}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                  {formData.password && !passwordRegex.test(formData.password) && (
                    <p className="ml-1 mt-1 text-xs text-red-400">
                      Password must be at least 6 characters and contain a number
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={isStep1Valid ? { scale: 1.02 } : {}}
                  whileTap={isStep1Valid ? { scale: 0.98 } : {}}
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                  className={`group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition-all ${
                    !isStep1Valid ? "cursor-not-allowed opacity-40 grayscale-[0.5]" : "hover:shadow-blue-500/40"
                  }`}
                >
                  Join Now
                  <ChevronRight className={`h-5 w-5 transition-transform ${isStep1Valid ? "group-hover:translate-x-1" : ""}`} />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-blue-100">Full Name</label>
                  <div className="relative">
                    <UserPlus className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 px-1 py-1"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <p className="text-[11px] italic leading-relaxed text-blue-200/60">
                      Reminder: Name must match your bank account name for faster withdrawal processing.
                    </p>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-blue-100">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                    <input
                      type="tel"
                      placeholder="+65 8000 0000"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="relative flex h-5 items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-5 w-5 cursor-pointer rounded border-white/10 bg-white/5 text-blue-600 accent-blue-600 transition-all focus:ring-blue-500/50 focus:ring-offset-0"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    />
                  </div>
                  <label htmlFor="terms" className="cursor-pointer select-none text-xs leading-relaxed text-blue-200/70">
                    I am over 21 years of age and have read and accepted the general terms and conditions. I agree to
                    receive information from your company. I can cancel this service in my account at any time.
                  </label>
                </div>

                <motion.button
                  whileHover={isStep2Valid ? { scale: 1.02 } : {}}
                  whileTap={isStep2Valid ? { scale: 0.98 } : {}}
                  disabled={!isStep2Valid}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg shadow-cyan-500/25 transition-all ${
                    !isStep2Valid ? "cursor-not-allowed opacity-40 grayscale-[0.5]" : "hover:shadow-cyan-500/40"
                  }`}
                >
                  Complete Registration
                  <CheckCircle2 className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ x: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setStep(1)}
                  className="group mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-400/40 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  title="Back to Step 1"
                >
                  <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingGirl = () => {
  const [showFromSteps, setShowFromSteps] = useState(false);

  useEffect(() => {
    const stepsSection = document.getElementById("steps-to-claim");
    if (!stepsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFromSteps(entry.isIntersecting && entry.intersectionRatio > 0.18);
      },
      {
        threshold: [0, 0.12, 0.18, 0.3, 0.5],
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(stepsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-[-10px] right-[-40px] z-[25] select-none"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{
        opacity: showFromSteps ? 1 : 0,
        y: showFromSteps ? 0 : 30,
        scale: showFromSteps ? 1 : 0.96,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.img
        src={colaImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-auto w-[280px] object-contain opacity-90 sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[640px]"
        animate={{
          opacity: showFromSteps ? [0.45, 0.9, 0.45] : 0,
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: `
            brightness(1.15)
            drop-shadow(0 0 8px rgba(125,211,252,1))
            drop-shadow(0 0 16px rgba(56,189,248,0.95))
            drop-shadow(0 0 28px rgba(59,130,246,0.85))
            drop-shadow(0 0 46px rgba(34,211,238,0.65))
          `,
        }}
      />

      <img
        src={colaImg}
        alt=""
        className="relative h-auto w-[280px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[640px]"
      />
    </motion.div>
  );
};

/* ----------------------------- App ----------------------------- */

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stepData = [
    { step: "1", title: "Register", desc: "Create account", icon: UserPlus },
    { step: "2", title: "Deposit", desc: "Start from $50", icon: Wallet },
    { step: "3", title: "Play", desc: "Unlock Reward", icon: Gamepad2 },
    { step: "4", title: "Claim", desc: "Get AirPods", icon: Gift },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-navy/70 font-sans text-slate-200 selection:bg-blue-500/30">
      
      {/* Global Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10">
        
        {/* SECTION 1: EMPTY HERO */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a1580]">
          <RealisticBackground />
          <GoldConfetti />
          
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Kept empty as requested */}
          </div>

          {/* DIPS DOWN (U-Shape) */}
          <SectionSeam className="bottom-[-1px]" fillColor="#0b49b8" shape="dip" />
        </section>

        {/* SECTION 2: STEPS TO CLAIM */}
        <section
          id="steps-to-claim"
          className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0b49b8] via-[#0a3d9d] to-[#082b78] px-6 pt-16 pb-32 sm:pt-24 sm:pb-40"
        >
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-[50%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/10 to-transparent z-[25]"
          />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px] animate-pulse delay-1000" />
          </div>

          {/* Glossy Glass Box */}
          <div className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-white/20 bg-gradient-to-br from-white/30 via-white/5 to-white/5 px-4 py-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-[32px] sm:px-10 sm:py-12 overflow-hidden">
            
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent opacity-50" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />

            <div className="relative z-10">
              <div className="mb-6 text-center sm:mb-10">
                <h2 className="text-3xl font-bold tracking-tight leading-[0.95] sm:text-4xl md:text-5xl">
                  <HeroWord light>Steps to Claim</HeroWord>
                </h2>
                <p className="mt-2 text-xs font-medium text-blue-100/90 sm:text-sm">
                  A quick guide to unlock your reward
                </p>
              </div>

              <div className="relative">
                <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-12">
                  {stepData.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative mb-2 sm:mb-4">
                          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/20 backdrop-blur-3xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/60 group-hover:bg-white/30 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] sm:h-20 sm:w-20 sm:rounded-[2.5rem] md:h-24 md:w-24">
                            <item.icon className="h-6 w-6 text-white transition-transform duration-500 group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10 drop-shadow-md" />
                            <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/50 bg-white/30 backdrop-blur-md text-xs font-bold text-white shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:border-white group-hover:bg-white/50 sm:-left-4 sm:-top-4 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                              {item.step}
                            </div>
                            <div className="absolute inset-0 rounded-2xl border border-white/0 opacity-0 group-hover:animate-ping group-hover:border-white/50 group-hover:opacity-30 sm:rounded-[2.5rem]" />
                          </div>
                        </div>

                        <div className="text-center space-y-1 sm:space-y-2">
                          <h3 className="text-xs font-bold tracking-tight text-white transition-colors group-hover:text-cyan-100 sm:text-xl md:text-3xl drop-shadow-sm">
                            {item.title}
                          </h3>
                          <p className="mx-auto max-w-[180px] text-[10px] font-semibold leading-tight text-white/80 transition-colors group-hover:text-white sm:max-w-[200px] sm:text-sm md:text-base">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DIPS DOWN (U-Shape) */}
          <SectionSeam className="bottom-[-1px]" fillColor="#020f6a" shape="dip" />
        </section>

        {/* SECTION 3: REGISTRATION */}
        <RegistrationForm />
        
        <FloatingGirl />
      </main>
    </div>
  );
}
