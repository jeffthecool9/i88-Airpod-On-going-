import i882Img from "./assets/i882.png";
import airpodImg from "./assets/airpod.png";
import coinFrontImg from "./assets/3.png";
import coinTiltImg from "./assets/4.png";
import registerImg from "./assets/register.png";
import depositImg from "./assets/deposit.png";
import playImg from "./assets/play.png";
import colaImg from "./assets/cola2.png";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  CheckCircle2,
  UserPlus,
  Mail,
  ShieldCheck,
  Users,
  Banknote,
  Lock,
  User,
  Phone,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import React, { useState, useEffect, ReactNode } from "react";

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
    className={`relative inline-block font-semibold tracking-[-0.02em] text-white ${className}`}
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
  const pieces = React.useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const width = 8 + (i % 4) * 4;
        const height = 2 + (i % 3);
        const left = 3 + ((i * 3.9) % 94);
        const delay = (i % 9) * 0.35;
        const duration = 7 + (i % 5) * 0.9;
        const drift = ((i % 7) - 3) * 18;
        const rotateEnd = (i % 2 === 0 ? 1 : -1) * (150 + i * 8);
        const scale = 0.82 + (i % 4) * 0.08;
        const opacity = 0.72 + (i % 3) * 0.08;

        const bgList = [
          "linear-gradient(135deg, #F8E27A 0%, #FFD84D 35%, #D4A72C 100%)",
          "linear-gradient(135deg, #E7C35A 0%, #C9961A 40%, #8C6110 100%)",
          "linear-gradient(135deg, #F2D98C 0%, #E1B94B 45%, #A36E1A 100%)",
        ];

        return {
          id: i,
          width,
          height,
          left,
          delay,
          duration,
          drift,
          rotateEnd,
          scale,
          opacity,
          bg: bgList[i % bgList.length],
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute top-0"
          style={{
            left: `${piece.left}%`,
            width: `${piece.width}px`,
            height: `${piece.height}px`,
            borderRadius: `${piece.height}px`,
            background: piece.bg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(0,0,0,0.16)",
            willChange: "transform, opacity",
          }}
          initial={{
            y: -24,
            x: 0,
            opacity: 0,
            rotate: 0,
            scale: piece.scale,
          }}
          animate={{
            y: ["0vh", "28vh", "62vh", "108vh"],
            x: [0, piece.drift * 0.4, piece.drift, piece.drift * 0.2],
            rotate: [0, piece.rotateEnd * 0.45, piece.rotateEnd],
            opacity: [0, piece.opacity, piece.opacity, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const RealisticBackground = () => (
  <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[#0a1580]" />

    <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          animate={{ opacity: [0.15, 0.3, 0.15], rotate: [i * 45, i * 45 + 10, i * 45] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 origin-center"
          style={{
            background: `conic-gradient(from ${i * 45}deg at 50% 50%, transparent 0%, rgba(34,211,238,0.2) 5%, transparent 15%)`,
            filter: "blur(15px)",
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
  shape = "dip",
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;

  const handleNext = () => {
    if (formData.name && passwordRegex.test(formData.password)) {
      setStep(2);
    }
  };

  const isStep1Valid = formData.name && passwordRegex.test(formData.password);
  const isStep2Valid =
    formData.fullName &&
    formData.email &&
    emailRegex.test(formData.email) &&
    formData.phone &&
    formData.agreedToTerms;

  return (
    <section
      id="registration-form"
      className="relative z-10 overflow-hidden px-6 py-24 sm:py-32 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_85%_22%,rgba(59,130,246,0.20),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(56,189,248,0.08),transparent_30%),linear-gradient(180deg,#0B49B8_0%,#0A3D9D_35%,#082B78_72%,#03143E_100%)]"
    >
      <img
  src={i882Img}
  alt="i88"
  className="pointer-events-none absolute left-1/2 top-0 z-[9] w-[90px] -translate-x-1/2 -translate-y-2 object-contain opacity-95 sm:w-[110px] sm:-translate-y-3 md:w-[125px] md:-translate-y-4"
/>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[10%] h-[260px] w-[260px] rounded-full bg-cyan-300/12 blur-[120px]" />
        <div className="absolute right-[4%] top-[15%] h-[320px] w-[320px] rounded-full bg-blue-400/12 blur-[140px]" />
        <div className="absolute left-1/2 top-[45%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/5 blur-[110px]" />
        <div className="absolute bottom-[8%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-300/8 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
      </div>

      <img
        src={coinTiltImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[22px] top-[58px] z-[1] w-[82px] -rotate-[22deg] object-contain opacity-95 drop-shadow-[0_12px_24px_rgba(0,0,0,0.20)] sm:left-[34px] sm:top-[68px] sm:w-[96px]"
      />
      <img
        src={coinFrontImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8px] top-[430px] z-[1] w-[118px] object-contain opacity-95 drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] sm:left-[0px] sm:top-[455px] sm:w-[132px]"
      />
      <img
        src={coinTiltImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18px] right-[6px] z-[1] w-[150px] rotate-[22deg] object-contain opacity-95 drop-shadow-[0_18px_36px_rgba(0,0,0,0.20)] sm:bottom-[26px] sm:right-[18px] sm:w-[176px]"
      />

      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(19,73,180,0.52)_0%,rgba(14,53,143,0.58)_30%,rgba(9,35,109,0.70)_100%)] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-[28px] md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem]">
            <div className="absolute inset-0 rounded-[2.5rem] border border-[#5fd7ff]/22" />
            <div className="absolute inset-[1px] rounded-[2.45rem] border border-white/6" />
            <div
              className="absolute inset-x-[2px] top-[2px] h-[120px] rounded-t-[2.35rem]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 28%, rgba(255,255,255,0.00) 100%)",
                filter: "blur(0.2px)",
              }}
            />
            <div
              className="absolute bottom-[26px] left-[1px] top-[22px] w-[24px] rounded-l-[2.2rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0.00) 100%)",
                filter: "blur(1.2px)",
              }}
            />
            <div
              className="absolute right-[6px] top-[8px] h-[92px] w-[92px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.00) 70%)",
                filter: "blur(10px)",
              }}
            />
            <div
              className="absolute bottom-[2px] left-[18px] right-[18px] h-[20px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.08) 100%)",
                filter: "blur(2px)",
              }}
            />
          </div>

          <div className="relative z-10 mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Create Your Account
            </h2>
            <p className="text-blue-100/75">Join the elite circle of high-rollers</p>

            {step === 2 && formData.name && (
              <p className="mt-3 text-sm font-medium text-cyan-100/90">
                Hi <span className="font-bold text-white">{formData.name}</span>, please fill in the form to start your journey
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 space-y-6"
              >
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/92">Username</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-white" />
                    <input
                      type="text"
                      placeholder="Your login id"
                      className="w-full rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))] py-4 pl-12 pr-4 text-sm font-medium leading-none text-white placeholder:text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white/18"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/92">Password</label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-white" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`w-full rounded-2xl border py-4 pl-12 pr-4 text-sm font-medium leading-none text-white placeholder:text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white/18 ${
                        formData.password && !passwordRegex.test(formData.password)
                          ? "border-red-500/50 ring-1 ring-red-500/20 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))]"
                          : "border-white/18 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))]"
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
                  className={`group flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#1D4ED8_0%,#2563EB_42%,#22D3EE_100%)] py-4 font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.38)] transition-all ${
                    !isStep1Valid
                      ? "cursor-not-allowed opacity-40 grayscale-[0.5]"
                      : "hover:brightness-110 hover:shadow-[0_20px_50px_rgba(34,211,238,0.28)]"
                  }`}
                >
                  Join Now
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${isStep1Valid ? "group-hover:translate-x-1" : ""}`}
                  />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 space-y-6"
              >
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/92">Full Name</label>
                  <div className="relative">
                    <UserPlus className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))] py-4 pl-12 pr-4 text-sm leading-none text-white placeholder:text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white/18"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 px-1 py-1"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-[11px] italic leading-relaxed text-blue-100/72">
                      Reminder: Name must match your bank account name for faster withdrawal processing.
                    </p>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-white/92">Email Address</label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-white" />
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className={`w-full rounded-2xl border py-4 pl-12 pr-4 text-sm font-medium leading-none text-white placeholder:text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white/18 ${
                        formData.email && !emailRegex.test(formData.email)
                          ? "border-red-500/50 ring-1 ring-red-500/20 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))]"
                          : "border-white/18 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))]"
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
                  <label className="ml-1 text-sm font-medium text-white/92">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
                    <input
                      type="tel"
                      placeholder="+65 8000 0000"
                      className="w-full rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(233,233,242,0.26),rgba(233,233,242,0.18))] py-4 pl-12 pr-4 text-sm leading-none text-white placeholder:text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-white/18"
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
                      className="h-5 w-5 cursor-pointer rounded border-cyan-200/20 bg-white/5 text-blue-600 accent-blue-600 transition-all focus:ring-cyan-400/35 focus:ring-offset-0"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    />
                  </div>
                  <label htmlFor="terms" className="cursor-pointer select-none text-xs leading-relaxed text-blue-100/75">
                    I am over 21 years of age and have read and accepted the general terms and conditions. I agree to
                    receive information from your company. I can cancel this service in my account at any time.
                  </label>
                </div>

                <motion.button
                  whileHover={isStep2Valid ? { scale: 1.02 } : {}}
                  whileTap={isStep2Valid ? { scale: 0.98 } : {}}
                  disabled={!isStep2Valid}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#1D4ED8_0%,#2563EB_42%,#22D3EE_100%)] py-4 font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.38)] transition-all ${
                    !isStep2Valid
                      ? "cursor-not-allowed opacity-40 grayscale-[0.5]"
                      : "hover:brightness-110 hover:shadow-[0_20px_50px_rgba(34,211,238,0.28)]"
                  }`}
                >
                  Complete Registration
                  <CheckCircle2 className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ x: -5, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setStep(1)}
                  className="group mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 text-cyan-300/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  title="Back to Step 1"
                >
                  <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <SectionSeam className="bottom-0" fillColor="#020f6a" shape="dip" />
    </section>
  );
};
const FloatingGirl = () => {
  const [showFromSteps, setShowFromSteps] = useState(false);
  const [hideBubbleAtRegistration, setHideBubbleAtRegistration] = useState(false);
  const [isUserActive, setIsUserActive] = useState(true);

  useEffect(() => {
    const stepsSection = document.getElementById("steps-to-claim");
    const registrationSection = document.getElementById("registration-form");

    if (!stepsSection || !registrationSection) return;

    const stepsObserver = new IntersectionObserver(
      ([entry]) => {
        setShowFromSteps(entry.isIntersecting && entry.intersectionRatio > 0.18);
      },
      {
        threshold: [0, 0.12, 0.18, 0.3, 0.5],
        rootMargin: "0px 0px -6% 0px",
      }
    );

    const registrationObserver = new IntersectionObserver(
      ([entry]) => {
        setHideBubbleAtRegistration(entry.isIntersecting && entry.intersectionRatio > 0.15);
      },
      {
        threshold: [0, 0.08, 0.15, 0.25, 0.4],
        rootMargin: "0px 0px -10% 0px",
      }
    );

    stepsObserver.observe(stepsSection);
    registrationObserver.observe(registrationSection);

    return () => {
      stepsObserver.disconnect();
      registrationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsUserActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsUserActive(false), 10000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  const handleInteract = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const shouldShowGirl = showFromSteps;
  const shouldShowBubble = showFromSteps && !hideBubbleAtRegistration && isUserActive;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-[-10px] right-[-40px] z-[25] select-none"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{
        opacity: shouldShowGirl ? 1 : 0,
        y: shouldShowGirl ? 0 : 30,
        scale: shouldShowGirl ? 1 : 0.96,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <AnimatePresence>
        {shouldShowBubble && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8, filter: "blur(5px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-auto absolute bottom-[90%] right-[55%] z-30 w-max max-w-[200px] sm:bottom-[85%] sm:right-[60%] md:bottom-[80%] md:right-[65%] sm:max-w-none"
          >
            <div
              onClick={handleInteract}
              className="group relative cursor-pointer rounded-[20px] border border-cyan-400/60 bg-cyan-950/85 px-4 py-3 text-center shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-900/95 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] sm:px-5 sm:py-3.5 sm:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <p className="text-[11px] font-bold leading-tight tracking-wide text-white sm:whitespace-nowrap sm:text-sm">
                  Click here to register
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="pointer-events-auto relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        onClick={handleInteract}
      >
        <motion.img
          src={colaImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-auto w-[280px] object-contain opacity-90 sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[640px]"
          animate={{
            opacity: shouldShowGirl ? [0.45, 0.9, 0.45] : 0,
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
      </div>
    </motion.div>
  );
};

const HeroCTA = () => {
  const [isActive, setIsActive] = useState(false);
  const [exitSweepKey, setExitSweepKey] = useState(0);
  const [showExitSweep, setShowExitSweep] = useState(false);

  const scrollToRegister = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnter = () => {
    setShowExitSweep(false);
    setIsActive(true);
  };

  const handleLeave = () => {
    setIsActive(false);
    setExitSweepKey((prev) => prev + 1);
    setShowExitSweep(true);

    setTimeout(() => {
      setShowExitSweep(false);
    }, 3000);
  };

  return (
    <div className="absolute bottom-8 left-1/2 z-[10] -translate-x-1/2 sm:bottom-16">
      <motion.button
        onClick={scrollToRegister}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onTouchStart={handleEnter}
        onTouchEnd={handleLeave}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.985 }}
        className="group pointer-events-auto relative isolate overflow-hidden rounded-[20px] border border-[#ffe7a3]/40 bg-[linear-gradient(180deg,#ffe08a_0%,#f7c948_28%,#d79a16_68%,#b8790b_100%)] px-12 py-2.5 text-base font-extrabold tracking-wide text-[#fff7d1] shadow-[0_20px_40px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-10px_22px_rgba(120,70,0,0.24)] transition-all sm:px-14 sm:py-3 sm:text-lg"
        style={{
          textShadow: "0 1px 2px rgba(120,70,0,0.35)",
        }}
      >
        <div className="pointer-events-none absolute inset-x-[4%] top-[3px] h-[42%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08),transparent)] blur-[1px]" />
        <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/10" />
        <div className="pointer-events-none absolute -left-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#ffd76a]/20 blur-[16px]" />
        <div className="pointer-events-none absolute -right-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#ffcf53]/16 blur-[16px]" />

        <AnimatePresence>
          {isActive && (
            <motion.div
              key="active-full-sweep"
              aria-hidden="true"
              initial={{ x: "-130%", opacity: 0 }}
              animate={{ x: ["-130%", "180%"], opacity: [0, 0.95, 0.95, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute inset-y-[-35%] left-[-45%] w-[60%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),rgba(255,255,255,0.30),rgba(255,255,255,0.78),rgba(255,255,255,0.30),rgba(255,255,255,0.08),transparent)] blur-[3px]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!isActive && showExitSweep && (
            <motion.div
              key={`exit-full-sweep-${exitSweepKey}`}
              aria-hidden="true"
              initial={{ x: "-130%", opacity: 0 }}
              animate={{ x: ["-130%", "180%"], opacity: [0, 0.95, 0.95, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute inset-y-[-35%] left-[-45%] w-[60%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),rgba(255,255,255,0.30),rgba(255,255,255,0.78),rgba(255,255,255,0.30),rgba(255,255,255,0.08),transparent)] blur-[3px]"
            />
          )}
        </AnimatePresence>

        <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
          Join Now
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </motion.button>
    </div>
  );
};
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
    { title: "Register", desc: "Create account", image: registerImg },
    { title: "Deposit", desc: "Start from $50 & Unlock more Rewards", image: depositImg },
    { title: "Unlock", desc: "Claim Your 188 FS", image: playImg },
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

      <main className="relative z-10">
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a1580]">
          <RealisticBackground />
          <GoldConfetti />

          <img
            src={i882Img}
            alt="i88"
            className="pointer-events-none absolute left-1/2 top-0 z-[9] w-[120px] -translate-x-1/2 -translate-y-2 object-contain sm:w-[140px] sm:-translate-y-3 md:w-[160px] md:-translate-y-4"
          />

          <motion.img
            src={airpodImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-[18%] z-[8] w-[180px] object-contain sm:right-[12%] sm:top-[16%] sm:w-[220px] md:right-[15%] md:top-[15%] md:w-[260px] lg:right-[18%] lg:top-[14%] lg:w-[300px]"
            animate={{
              y: [0, -12, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter:
                "drop-shadow(0 18px 30px rgba(0,0,0,0.28)) drop-shadow(0 10px 24px rgba(56,189,248,0.16))",
            }}
          />

   <div className="pointer-events-none absolute bottom-28 left-1/2 z-[9] w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6">
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-7 md:gap-9">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="group relative overflow-hidden rounded-[24px] px-5 py-5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-[20px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(245,239,225,0.14),rgba(220,214,200,0.05))] sm:rounded-[28px]" />
      <div className="absolute inset-[1px] rounded-[23px] border border-white/10 sm:rounded-[27px]" />
      <div className="absolute inset-0 rounded-[24px] border border-[#f4e7bf]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:rounded-[28px]" />
      <div className="absolute inset-x-[8%] top-[3px] h-[44%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06),transparent)] blur-[1px]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-[-18%] left-[-32%] hidden w-[32%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(255,255,255,0.18),rgba(255,255,255,0.05),transparent)] blur-[3px] sm:block"
        animate={{ x: ["0%", "320%"] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.8 }}
      />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5e6bc]/76 sm:text-[12px] sm:tracking-[0.24em]">
          Reputation
        </p>
        <h3 className="mt-2 text-[18px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#fffaf0] sm:mt-3 sm:text-[24px] md:text-[28px]">
          Trusted Since 2014
        </h3>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.12 }}
      className="group relative overflow-hidden rounded-[24px] px-5 py-5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-[20px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(224,236,243,0.14),rgba(190,204,214,0.05))] sm:rounded-[28px]" />
      <div className="absolute inset-[1px] rounded-[23px] border border-white/10 sm:rounded-[27px]" />
      <div className="absolute inset-0 rounded-[24px] border border-[#dff4ff]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:rounded-[28px]" />
      <div className="absolute inset-x-[8%] top-[3px] h-[44%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06),transparent)] blur-[1px]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-[-18%] left-[-32%] hidden w-[32%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(255,255,255,0.18),rgba(255,255,255,0.05),transparent)] blur-[3px] sm:block"
        animate={{ x: ["0%", "320%"] }}
        transition={{ duration: 6.7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3.1 }}
      />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#def3ff]/76 sm:text-[12px] sm:tracking-[0.24em]">
          Community
        </p>
        <h3 className="mt-2 text-[18px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#f8fcff] sm:mt-3 sm:text-[24px] md:text-[28px]">
          5,000+ Active Members
        </h3>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.19 }}
      className="group relative overflow-hidden rounded-[24px] px-5 py-5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-[20px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(235,233,243,0.14),rgba(204,200,216,0.05))] sm:rounded-[28px]" />
      <div className="absolute inset-[1px] rounded-[23px] border border-white/10 sm:rounded-[27px]" />
      <div className="absolute inset-0 rounded-[24px] border border-[#ece8ff]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:rounded-[28px]" />
      <div className="absolute inset-x-[8%] top-[3px] h-[44%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06),transparent)] blur-[1px]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-[-18%] left-[-32%] hidden w-[32%] rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(255,255,255,0.18),rgba(255,255,255,0.05),transparent)] blur-[3px] sm:block"
        animate={{ x: ["0%", "320%"] }}
        transition={{ duration: 6.9, repeat: Infinity, ease: "easeInOut", repeatDelay: 3.4 }}
      />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#eee9ff]/76 sm:text-[12px] sm:tracking-[0.24em]">
          Clarity
        </p>
        <h3 className="mt-2 text-[18px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#fcfbff] sm:mt-3 sm:text-[24px] md:text-[28px]">
          Clear Rewards, No Surprises
        </h3>
      </div>
    </motion.div>
  </div>
</div>
          <HeroCTA />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* kept empty */}
          </div>

          <SectionSeam className="bottom-[-1px]" fillColor="#0b49b8" shape="dip" />
        </section>

        <section
          id="steps-to-claim"
          className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0b49b8] via-[#0a3d9d] to-[#082b78] px-4 pb-32 pt-16 sm:px-6 sm:pb-40 sm:pt-24"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px] animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl rounded-[24px] border border-cyan-400/60 bg-gradient-to-br from-cyan-900/30 via-white/5 to-white/5 px-4 py-8 shadow-[0_0_20px_rgba(34,211,238,0.3),0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-[32px] sm:rounded-[32px] sm:px-8 sm:py-10 md:px-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent opacity-50" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-cyan-400/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-cyan-400/20 to-transparent" />

            <div className="relative z-10">
              <div className="mb-8 text-center sm:mb-10">
                <h2 className="text-3xl font-bold tracking-tight leading-[0.95] sm:text-4xl md:text-5xl">
                  <HeroWord light>Steps to Claim</HeroWord>
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10">
                {stepData.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 flex h-[96px] w-[96px] items-center justify-center sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full scale-110 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
                      />
                    </div>

                   <h3 className="text-lg font-bold tracking-tight text-white sm:text-2xl md:text-4xl">
  {item.title}
</h3>
<p className="mt-2 max-w-[180px] text-[16px] font-semibold leading-tight text-white/85 sm:max-w-[240px] sm:text-lg md:text-2xl">
  {item.desc}
</p>
                  </motion.div>
                ))}

                <div className="hidden sm:block" />
              </div>
            </div>
          </div>

          <SectionSeam className="bottom-[-1px]" fillColor="#020f6a" shape="dip" />
        </section>

        <RegistrationForm />
        <FloatingGirl />
      </main>
    </div>
  );
}
