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
    className={`relative inline-block font-semibold tracking-[-0.03em] ${light ? "text-slate-900" : "text-white"} ${className}`}
    style={
      !light
        ? {
            textShadow:
              "0 1px 0 rgba(255,255,255,0.18), 0 2px 0 rgba(125,211,252,0.12), 0 10px 24px rgba(2,6,23,0.58)",
          }
        : {}
    }
  >
    {children}
  </span>
);

const GoldParticles = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 0.8, 0],
          scale: [0, 1.6, 1.2, 0],
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          rotate: [0, 1440],
        }}
        transition={{
          duration: 3 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 12,
          ease: "circOut",
        }}
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#F9D423] via-[#FFF9E5] to-transparent shadow-[0_0_20px_rgba(249,212,35,1)]"
      />
    ))}

    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`streak-${i}`}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: [0, 0.8, 0],
          width: [0, 180, 0],
          rotate: [0, 720],
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
        }}
        transition={{
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 18,
        }}
        className="absolute left-1/2 top-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#F9D423] to-transparent blur-[1.5px]"
      />
    ))}

    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`dust-${i}`}
        animate={{
          opacity: [0.1, 0.8, 0.1],
          scale: [0.5, 2, 0.5],
          y: [0, -100, 0],
          x: (Math.random() - 0.5) * 40,
        }}
        transition={{
          duration: 5 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 15,
        }}
        className="absolute h-1.5 w-1.5 rounded-full bg-white/60 blur-[2px]"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
      />
    ))}
  </div>
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
  <div className="pointer-events-none absolute inset-0 z-0">
    <motion.div
      animate={{
        background: [
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
          "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0"
    />

    <motion.div
      animate={{ x: ["-100%", "200%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 w-full skew-x-[45deg] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[100px]"
    />

    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 left-1/2 h-[350px] w-[160%] -translate-x-1/2 opacity-95 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 30%, rgba(240,245,255,0.6) 60%, transparent 80%)",
          filter: "blur(35px)",
        }}
      />
      <motion.div
        animate={{ x: [30, -30, 30] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/2 h-[450px] w-[180%] -translate-x-1/2 opacity-80 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(232,240,254,0.4) 70%, transparent 90%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-1/2 h-[550px] w-[200%] -translate-x-1/2 opacity-60 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 50%, transparent 95%)",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-48 top-1/3 h-[700px] w-[500px] -translate-y-1/2 opacity-40 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 bottom-1/4 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <motion.div
        animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-48 top-1/4 h-[700px] w-[500px] -translate-y-1/2 opacity-40 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-1/3 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(143,177,233,0.4)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(92,138,230,0.3)_0%,transparent_60%)]" />
    <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
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
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${className} ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[100px]">
      <path
        d="M0,0 C480,100 720,100 1200,0 L1200,120 L0,120 Z"
        fill="#0b3d91"
      ></path>

      <path
        d="M0,0 C480,100 720,100 1200,0"
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth="2.5"
        className="drop-shadow-[0_0_6px_rgba(56,189,248,0.55)]"
      />

      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
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
        className={`mb-3 block text-[11px] font-bold uppercase tracking-[0.32em] ${
          light ? "text-blue-600/70" : "text-cyan-200/75"
        }`}
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
      className="relative z-10 overflow-hidden bg-gradient-to-br from-brand-blue-start/80 via-brand-navy/90 to-brand-navy px-6 py-24"
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

  const stepData = [
    { step: "1", title: "Register", desc: "Create account", icon: UserPlus },
    { step: "2", title: "Deposit", desc: "Start from $50", icon: Wallet },
    { step: "3", title: "Play", desc: "Unlock Reward", icon: Gamepad2 },
    { step: "4", title: "Claim", desc: "Get AirPods", icon: Gift },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-navy/70 font-sans text-slate-200 selection:bg-blue-500/30">
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <motion.div style={{ y: backgroundY }} className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,#020f6a_60%,#000a14_100%)]" />

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          style={{
            translateX: (mousePos.x - viewport.width / 2) * 0.02,
            translateY: (mousePos.y - viewport.height / 2) * 0.02,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-10%] top-[-10%] h-[60vw] w-[60vw] rounded-full bg-brand-vibrant-blue/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          style={{
            translateX: (mousePos.x - viewport.width / 2) * -0.02,
            translateY: (mousePos.y - viewport.height / 2) * -0.02,
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-brand-deep-blue/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[20%] top-[10%] h-[30vw] w-[30vw] rounded-full bg-blue-200/5 blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] bottom-[20%] h-[20vw] w-[20vw] rounded-full bg-cyan-200/5 blur-[80px]"
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0.1],
              scale: [0, 1, 0.5],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30"
          />
        ))}
      </motion.div>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-16">
          <RealisticBackground />
          <GoldConfetti />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Hero content removed as requested */}
          </div>

          <SectionSeam className="bottom-[-2px]" flip />
        </section>

        <section
          id="steps-to-claim"
          className="relative z-10 bg-gradient-to-br from-brand-deep-blue via-brand-vibrant-blue/40 to-brand-deep-blue px-6 py-5 sm:py-6"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px] animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/5 px-4 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6 sm:py-6">
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="text-3xl font-bold tracking-tight leading-[0.95] sm:text-4xl md:text-5xl">
                <HeroWord light>Steps to Claim</HeroWord>
              </h2>
              <p className="mt-2 text-xs font-medium text-blue-100/75 sm:text-sm">
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
                      <div className="relative mb-1 sm:mb-2">
                        <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-400/50 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] sm:h-20 sm:w-20 sm:rounded-[2.5rem] md:h-24 md:w-24">
                          <item.icon className="h-6 w-6 text-blue-600 transition-transform duration-500 group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10" />

                          <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-white text-xs font-bold text-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.15)] transition-all duration-300 group-hover:border-blue-400 group-hover:text-blue-700 sm:-left-4 sm:-top-4 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                            {item.step}
                          </div>

                          <div className="absolute inset-0 rounded-2xl border border-blue-400/0 opacity-0 group-hover:animate-ping group-hover:border-blue-400/50 group-hover:opacity-20 sm:rounded-[2.5rem]" />
                        </div>
                      </div>

                      <div className="text-center space-y-0">
                        <h3 className="text-xs font-bold tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-xl md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mx-auto max-w-[180px] text-[10px] font-semibold leading-tight text-blue-100 transition-colors group-hover:text-white sm:max-w-[200px] sm:text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <SectionSeam className="bottom-0" />
        </section>

        <RegistrationForm />
        <FloatingGirl />
      </main>
    </div>
  );
}
