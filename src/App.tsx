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
    className={`relative inline-block font-semibold tracking-[-0.02em] ${light ? 'text-white' : 'text-white'} ${className}`}
    style={!light ? {
      textShadow:
        "0 1px 0 rgba(255,255,255,0.10), 0 2px 0 rgba(59,130,246,0.10), 0 10px 28px rgba(2,6,23,0.55)",
    } : {
      textShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
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
    className={`relative inline-block bg-gradient-to-b ${light ? 'from-white via-cyan-100 to-blue-200' : 'from-white via-cyan-200 to-blue-300'} bg-clip-text text-transparent font-semibold tracking-[-0.02em] ${className}`}
    style={!light ? {
      filter: "drop-shadow(0 6px 20px rgba(34,211,238,0.16))",
      textShadow: "0 10px 24px rgba(2,6,23,0.45)",
    } : {
      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
    }}
  >
    {children}
  </span>
);

const MoneyWord = ({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) => (
  <span
    className={`relative inline-block font-semibold tracking-[-0.03em] ${light ? 'text-slate-900' : 'text-white'} ${className}`}
    style={!light ? {
      textShadow:
        "0 1px 0 rgba(255,255,255,0.18), 0 2px 0 rgba(125,211,252,0.12), 0 10px 24px rgba(2,6,23,0.58)",
    } : {}}
  >
    {children}
  </span>
);

const GoldParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Dynamic Gold Sparks (High Density) */}
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={{ 
          opacity: [0, 1, 0.8, 0],
          scale: [0, 1.6, 1.2, 0],
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          rotate: [0, 1440]
        }}
        transition={{ 
          duration: 3 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 12,
          ease: "circOut"
        }}
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#F9D423] via-[#FFF9E5] to-transparent shadow-[0_0_20px_rgba(249,212,35,1)]"
      />
    ))}
    {/* Light Streaks/Trails (Cinematic) */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`streak-${i}`}
        initial={{ opacity: 0, width: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          width: [0, 180, 0],
          rotate: [0, 720],
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400
        }}
        transition={{ 
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 18
        }}
        className="absolute left-1/2 top-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#F9D423] to-transparent blur-[1.5px]"
      />
    ))}
    {/* Ambient Dust/Sparkle (Atmospheric) */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`dust-${i}`}
        animate={{ 
          opacity: [0.1, 0.8, 0.1],
          scale: [0.5, 2, 0.5],
          y: [0, -100, 0],
          x: (Math.random() - 0.5) * 40
        }}
        transition={{ 
          duration: 5 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 15
        }}
        className="absolute h-1.5 w-1.5 bg-white/60 rounded-full blur-[2px]"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
      />
    ))}
  </div>
);


const GoldConfetti = () => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -250]);

  return (
    <motion.div 
      style={{ y: parallaxY }}
      className="absolute inset-0 overflow-hidden pointer-events-none z-[5]"
    >
      {[...Array(50)].map((_, i) => {
        const width = Math.random() * 20 + 15; // 15px to 35px
        const height = width * (0.25 + Math.random() * 0.2); // Short rectangle: 25-45% of width
        const duration = Math.random() * 7 + 8; // Slower, more graceful fall
        const delay = Math.random() * 15;
        const left = Math.random() * 100;
        const depth = Math.random(); // 0 (far) to 1 (near)
        
        // Elite Bronze and Gold Palette
        const colors = [
          "conic-gradient(from 45deg, #CD7F32, #A57164, #804A00, #CD7F32)", // Deep Bronze
          "conic-gradient(from 45deg, #F9D423, #FFD700, #D4AF37, #F9D423)", // Pure Gold
          "conic-gradient(from 45deg, #B87333, #8B4513, #CD7F32, #B87333)", // Copper Bronze
          "conic-gradient(from 45deg, #E6BE8A, #D4AF37, #996515, #E6BE8A)", // Pale Gold
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
              scale: 0.4 + depth * 0.6
            }}
            animate={{ 
              top: "110%", 
              left: `${left + (Math.random() - 0.5) * 40}%`,
              rotateX: [0, 1080, 2160],
              rotateY: [0, 720, 1440],
              rotateZ: [0, 360, 720],
              opacity: [0, 1, 1, 0],
              x: [0, Math.sin(i) * 80, 0] // Drifting horizontal motion
            }}
            transition={{ 
              duration: duration, 
              repeat: Infinity, 
              delay: delay,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: width,
              height: height,
              borderRadius: "1px",
              background: bg,
              boxShadow: `0 ${4 + depth * 8}px ${12 + depth * 16}px rgba(0, 0, 0, ${0.1 + depth * 0.2}), inset 0 0 4px rgba(255, 255, 255, 0.6)`,
              filter: `brightness(1.1) contrast(1.1) blur(${depth < 0.2 ? "1.5px" : "0px"})`,
              zIndex: Math.floor(depth * 10),
              transformStyle: "preserve-3d"
            }}
          >
            {/* Ultra HD Metallic Reflection Shader (Foil Effect) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-black/30" />
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.6, 0.1],
                x: ["-100%", "100%"]
              }}
              transition={{ 
                duration: 1.5 + Math.random(), 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const RealisticBackground = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    {/* High-Resolution Color Tone from Image (Soft Periwinkle & Vibrant Blue) */}
    <motion.div 
      animate={{ 
        background: [
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)"
        ]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0" 
    />
    
    {/* Dynamic Multi-Layered Light Sweeps (Softer reflection) */}
    <motion.div
      animate={{ x: ["-100%", "200%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[45deg] blur-[100px]"
    />

    {/* Ultra High Resolution Realistic Clouds (Bottom & Sides) */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Layered Bottom Clouds (Fluffy & Depth) */}
      <motion.div 
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 left-1/2 h-[350px] w-[160%] -translate-x-1/2 opacity-95 mix-blend-lighten"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 30%, rgba(240,245,255,0.6) 60%, transparent 80%)",
          filter: "blur(35px)"
        }}
      />
      <motion.div 
        animate={{ x: [30, -30, 30] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/2 h-[450px] w-[180%] -translate-x-1/2 opacity-80 mix-blend-lighten"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(232,240,254,0.4) 70%, transparent 90%)",
          filter: "blur(50px)"
        }}
      />
      <motion.div 
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-1/2 h-[550px] w-[200%] -translate-x-1/2 opacity-60 mix-blend-lighten"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 50%, transparent 95%)",
          filter: "blur(70px)"
        }}
      />

      {/* Left Side Clouds (Fluffy Formations) */}
      <motion.div 
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-48 top-1/3 h-[700px] w-[500px] -translate-y-1/2 opacity-40 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
          filter: "blur(60px)"
        }}
      />
      <motion.div 
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 bottom-1/4 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
          filter: "blur(80px)"
        }}
      />

      {/* Right Side Clouds (Fluffy Formations) */}
      <motion.div 
        animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-48 top-1/4 h-[700px] w-[500px] -translate-y-1/2 opacity-40 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
          filter: "blur(60px)"
        }}
      />
      <motion.div 
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-1/3 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
          filter: "blur(80px)"
        }}
      />
    </div>

    {/* Shaders (Adjusted for Image Tone) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(143,177,233,0.4)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(92,138,230,0.3)_0%,transparent_60%)]" />

    {/* Caustics / Light Refraction Effect */}
    <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
    
    {/* Depth Shadows & Vignette */}
    <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.04)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_60%,rgba(45,89,200,0.05)_100%)]" />
  </div>
);

const SectionKicker = ({ children }: { children: ReactNode }) => (
  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200/75">
    {children}
  </span>
);

const CardKeyword = ({ children }: { children: ReactNode }) => (
  <span className="font-bold tracking-[-0.02em] text-white [text-shadow:0_4px_16px_rgba(2,6,23,0.4)]">
    {children}
  </span>
);

const SectionSeam = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${className} ${flip ? 'rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-[60px] sm:h-[100px]"
    >
      {/* Curve fill matches your dark background */}
      <path
        d="M0,0 C480,100 720,100 1200,0 L1200,120 L0,120 Z"
        fill="#020f6a" 
      ></path>
      
      {/* The "Connectivity" Line Curve */}
      <path
        d="M0,0 C480,100 720,100 1200,0"
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth="2"
      />
      
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const SectionHeading = ({
  children,
  subtitle,
  light = false,
}: {
  children: ReactNode;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-12 text-center">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mb-3 block text-[11px] font-bold uppercase tracking-[0.32em] ${light ? 'text-blue-600/70' : 'text-cyan-200/75'}`}
      >
        {subtitle}
      </motion.span>
    )}

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl leading-[0.92]"
    >
      <HeroWord light={light}>{children}</HeroWord>
    </motion.h2>
  </div>
);

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  light?: boolean;
}

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

  const nextStep = () => setStep(1.5); // Intermediate state for animation
  
  // Use useEffect to handle the transition timing if needed, or just switch step
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
    <section id="registration-form" className="relative px-6 py-24 bg-gradient-to-br from-brand-blue-start/80 via-brand-navy/90 to-brand-navy overflow-hidden z-10">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
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
                  <label className="text-sm font-medium text-blue-100 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <input
                      type="text"
                      placeholder="Your login id"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${formData.email && !emailRegex.test(formData.email) ? 'border-red-500/50 ring-1 ring-red-500/20' : 'border-white/10'}`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {formData.email && !emailRegex.test(formData.email) && (
                    <p className="text-xs text-red-400 mt-1 ml-1">Please enter a valid email address</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100 ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${formData.password && !passwordRegex.test(formData.password) ? 'border-red-500/50 ring-1 ring-red-500/20' : 'border-white/10'}`}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                  {formData.password && !passwordRegex.test(formData.password) && (
                    <p className="text-xs text-red-400 mt-1 ml-1">Password must be at least 6 characters and contain a number</p>
                  )}
                </div>

                <motion.button
                  whileHover={isStep1Valid ? { scale: 1.02 } : {}}
                  whileTap={isStep1Valid ? { scale: 0.98 } : {}}
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group transition-all ${
                    !isStep1Valid ? "opacity-40 cursor-not-allowed grayscale-[0.5]" : "hover:shadow-blue-500/40"
                  }`}
                >
                  Next
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
                  <label className="text-sm font-medium text-blue-100 ml-1">Full Name</label>
                  <div className="relative">
                    <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 px-1 py-1"
                  >
                    <AlertCircle className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-[11px] leading-relaxed text-blue-200/60 italic">
                      Reminder: Name must match your bank account name for faster withdrawal processing.
                    </p>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <input
                      type="tel"
                      placeholder="+65 8000 0000"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="relative flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-5 h-5 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-blue-500/50 focus:ring-offset-0 transition-all cursor-pointer accent-blue-600"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    />
                  </div>
                  <label htmlFor="terms" className="text-xs text-blue-200/70 leading-relaxed cursor-pointer select-none">
                    I am over 21 years of age and have read and accepted the general terms and conditions. I agree to receive information from your company. I can cancel this service in my account at any time.
                  </label>
                </div>

                <motion.button
                  whileHover={isStep2Valid ? { scale: 1.02 } : {}}
                  whileTap={isStep2Valid ? { scale: 0.98 } : {}}
                  disabled={!isStep2Valid}
                  className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all ${
                    !isStep2Valid ? "opacity-40 cursor-not-allowed grayscale-[0.5]" : "hover:shadow-cyan-500/40"
                  }`}
                >
                  Complete Registration
                  <CheckCircle2 className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ x: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400/40 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 mx-auto mt-8 group"
                  title="Back to Step 1"
                >
                  <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <SectionSeam className="bottom-0" />
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
      {/* body-outline glow layer */}
      <motion.img
        src={colaImg}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0
          h-auto
          w-[280px]
          sm:w-[360px]
          md:w-[480px]
          lg:w-[560px]
          xl:w-[640px]
          object-contain
          opacity-90
        "
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

      {/* main girl image */}
      <img
        src={colaImg}
        alt=""
        className="
          relative
          h-auto
          w-[280px]
          sm:w-[360px]
          md:w-[480px]
          lg:w-[560px]
          xl:w-[640px]
          object-contain
          drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]
        "
      />
    </motion.div>
  );
};

/* ----------------------------- App ----------------------------- */

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

 import { motion } from "framer-motion";
import { UserPlus, Wallet, Gamepad2, Gift } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Register",
    desc: "Create your account and get started",
    tag: "Quick setup",
  },
  {
    number: "2",
    icon: Wallet,
    title: "Deposit",
    desc: "Start from $50 to activate your journey",
    tag: "Easy entry",
  },
  {
    number: "3",
    icon: Gamepad2,
    title: "Play",
    desc: "Complete required play amount",
    tag: "Build progress",
  },
  {
    number: "4",
    icon: Gift,
    title: "Claim",
    desc: "Unlock your AirPods after completion",
    tag: "Reward ready",
    highlight: true,
  },
];

export default function ClaimStepsSection() {
  return (
    <section className="relative overflow-hidden bg-[#031B4E] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.18),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-md">
            Simple Journey • Premium Reward
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Claim Your AirPods in 4 Simple Steps
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-[10%] right-[10%] top-16 hidden h-[2px] bg-white/15 sm:block">
            <motion.div
              className="h-full w-1/3 bg-[linear-gradient(to_right,transparent,rgba(96,165,250,0.95),transparent)]"
              animate={{ x: ["-20%", "220%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative rounded-[28px] border p-5 backdrop-blur-xl transition-all duration-300 ${
                    step.highlight
                      ? "border-blue-300/40 bg-white/16 shadow-[0_0_40px_rgba(96,165,250,0.22)]"
                      : "border-white/12 bg-white/10"
                  }`}
                >
                  <div className="absolute -top-3 left-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200/40 bg-white text-lg font-bold text-blue-700 shadow-lg">
                    {step.number}
                  </div>

                  <div className="pt-8">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-[24px] bg-white text-blue-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-9 w-9" strokeWidth={2.2} />
                    </div>

                    <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">
                      {step.tag}
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100/82">
                      {step.desc}
                    </p>

                    {step.highlight && (
                      <div className="mt-4 rounded-2xl border border-blue-200/20 bg-blue-400/10 px-4 py-3 text-sm text-blue-50">
                        Guaranteed reward upon successful completion
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 text-center"
        >
          <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0A2E78] shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-[1.03]">
            Start Your Journey
          </button>
          <p className="mt-4 text-sm text-blue-100/75">
            Simple steps. Clear progress. Premium reward.
          </p>
        </motion.div>
      </div>
    </section>
      
     <RegistrationForm />
        <FloatingGirl />
  </main>
    </div>
  );
}
