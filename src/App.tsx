import i882Img from "./assets/i882.png";
import airpodImg from "./assets/airpod.png";
import coin1Img from "./assets/1.png";
import coinFrontImg from "./assets/3.png";
import coinTiltImg from "./assets/4.png";
import registerImg from "./assets/register.png";
import depositImg from "./assets/deposit.png";
import playImg from "./assets/play.png";
import colaImg from "./assets/cola2.png";
import rewardEventImg from "./assets/reward-event.png";
import heroTextBoxImg from "./assets/hero-textbox.png";
import cola1Img from "./assets/cola1.png";
import heroTopTextImg from "./assets/text-2.png";
import heroFinalTextImg from "./assets/text.png";
import heroBackground1Img from "./assets/background1.png";

import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  CheckCircle2,
  UserPlus,
  Mail,
  Lock,
  User,
  Phone,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

/* -----------------------------
   FX / BACKGROUND
------------------------------ */

const coinInstances = [
  { id: 1, x: 10, y: 15, size: 40, blur: 6, opacity: 0.15, speed: 0.01, z: 1, rotate: 15 },
  { id: 2, x: 85, y: 10, size: 50, blur: 5, opacity: 0.2, speed: 0.012, z: 1, rotate: -20 },
  { id: 3, x: 50, y: 60, size: 35, blur: 7, opacity: 0.1, speed: 0.008, z: 1, rotate: 45 },
  { id: 4, x: 15, y: 55, size: 80, blur: 2.5, opacity: 0.35, speed: 0.025, z: 2, rotate: -10 },
  { id: 5, x: 75, y: 65, size: 90, blur: 2, opacity: 0.4, speed: 0.03, z: 2, rotate: 25 },
  { id: 6, x: 40, y: 10, size: 70, blur: 3, opacity: 0.3, speed: 0.02, z: 2, rotate: 180 },
  { id: 7, x: 5, y: 25, size: 120, blur: 0, opacity: 0.6, speed: 0.05, z: 3, rotate: 0, glow: "0 0 10px rgba(251,191,36,0.5)" },
  { id: 8, x: 90, y: 35, size: 140, blur: 0, opacity: 0.65, speed: 0.06, z: 3, rotate: -15, glow: "0 0 10px rgba(251,191,36,0.5)" },
];

const FloatingHeroCoins = ({
  mousePos,
  liteMode,
}: {
  mousePos: { x: number; y: number };
  liteMode: boolean;
}) => {
  const winWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
  const winHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

  const offsetX = mousePos.x - winWidth / 2;
  const offsetY = mousePos.y - winHeight / 2;

  const visibleCoins = useMemo(() => {
    return liteMode ? coinInstances.slice(3, 7) : coinInstances;
  }, [liteMode]);

  const coinAssets = [coin1Img, coinFrontImg, coinTiltImg];

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {visibleCoins.map((coin, index) => (
        <motion.div
          key={coin.id}
          className="absolute"
          style={{
            width: `${coin.size}px`,
            left: `${coin.x}%`,
            top: `${coin.y}%`,
            opacity: coin.opacity,
            zIndex: coin.z,
            filter: `blur(${coin.blur}px) ${coin.glow ? `drop-shadow(${coin.glow})` : ""}`,
            willChange: "transform",
          }}
          animate={{
            x: -offsetX * coin.speed,
            y: -offsetY * coin.speed,
            rotate: coin.rotate,
          }}
          transition={{
            type: "spring",
            stiffness: liteMode ? 20 : 10,
            damping: 30,
            mass: 1,
          }}
        >
          <img src={coinAssets[index % coinAssets.length]} alt="" className="w-full h-auto object-contain" />
        </motion.div>
      ))}
    </div>
  );
};

const GoldConfetti = ({ liteMode = false }: { liteMode?: boolean }) => {
  const pieces = React.useMemo(
    () =>
      Array.from({ length: liteMode ? 8 : 26 }, (_, i) => {
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
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(0,0,0,0.16)",
            willChange: "transform, opacity",
          }}
          initial={{ y: -24, x: 0, opacity: 0, rotate: 0, scale: piece.scale }}
          animate={{
            y: ["0vh", "28vh", "62vh", "108vh"],
            x: [0, piece.drift * 0.4, piece.drift, piece.drift * 0.2],
            rotate: [0, piece.rotateEnd * 0.45, piece.rotateEnd],
            opacity: [0, piece.opacity, piece.opacity, 0],
          }}
          transition={{
            duration: liteMode ? piece.duration * 1.6 : piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const RealisticBackground = ({ liteMode = false }: { liteMode?: boolean }) => (
  <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
    {liteMode ? (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.12)_0%,rgba(125,211,252,0.10)_18%,rgba(59,130,246,0.08)_32%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.06),transparent_30%)]" />
      </>
    ) : (
      <>
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                rotate: [i * 45, i * 45 + 10, i * 45],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-center"
              style={{
                background: `conic-gradient(from ${i * 45}deg at 50% 50%, transparent 0%, rgba(34,211,238,0.15) 5%, transparent 15%)`,
                filter: "blur(20px)",
              }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(125,211,252,0.2)_20%,rgba(143,177,233,0)_60%)] blur-[50px]"
          />
        </div>

        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
      </>
    )}
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

/* -----------------------------
   HERO HELPERS
------------------------------ */

const HeroCTA = () => {
  const scrollToRegister = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToRegister}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className="group relative isolate overflow-hidden rounded-[22px] border border-[#ffe7a3]/45 bg-[linear-gradient(180deg,#FFE08A_0%,#F7C948_30%,#D89A18_72%,#B9780C_100%)] px-10 py-3 text-lg font-extrabold tracking-wide text-[#fff7d1] shadow-[0_22px_44px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-10px_22px_rgba(120,70,0,0.24)] sm:px-12 sm:py-3.5 sm:text-[22px]"
      style={{ textShadow: "0 1px 2px rgba(120,70,0,0.35)" }}
    >
      <div className="pointer-events-none absolute inset-x-[4%] top-[3px] h-[42%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08),transparent)] blur-[1px]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[21px] border border-white/10" />
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        Join Now
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
};

const ProgressStepCard = ({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) => {
  return (
    <div className="flex min-h-[88px] flex-col items-center justify-center rounded-[24px] border border-[#ffcf53]/70 bg-[linear-gradient(180deg,rgba(27,71,205,0.96)_0%,rgba(15,45,149,0.96)_100%)] px-3 py-3 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]">
      <div className="text-[12px] font-extrabold leading-[1.05] tracking-wide text-[#fff0b0] sm:text-[14px]">
        {title}
      </div>
      <div className="mt-1 text-[11px] font-semibold leading-tight text-white/92 sm:text-[12px]">
        {sub}
      </div>
    </div>
  );
};

const TrustCard = ({ text }: { text: string }) => {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(84,124,255,0.32)_0%,rgba(31,67,185,0.30)_100%)] px-4 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
      <p className="text-[13px] font-bold leading-tight text-white sm:text-[14px]">{text}</p>
    </div>
  );
};

/* -----------------------------
   REGISTRATION FORM
------------------------------ */

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(8);
  const [progress, setProgress] = useState(0);

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

  const handleFinalCTA = () => {
    if (!isStep2Valid) return;
    setIsSuccess(true);
    setCountdown(8);
    setProgress(0);
  };

  useEffect(() => {
    if (!isSuccess) return;

    const totalDuration = 8000;
    const startTime = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(nextProgress);
    }, 50);

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          clearInterval(progressTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
    };
  }, [isSuccess]);

  return (
    <section
      id="registration-form"
      className="relative z-10 overflow-hidden px-6 py-24 sm:py-32 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_85%_22%,rgba(59,130,246,0.20),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(56,189,248,0.08),transparent_30%),linear-gradient(180deg,#0B49B8_0%,#0A3D9D_35%,#082B78_72%,#03143E_100%)]"
    >
      <img
        src={i882Img}
        alt="i88"
        className="pointer-events-none absolute left-1/2 top-0 z-[9] w-[90px] -translate-x-1/2 -translate-y-2 object-contain sm:w-[110px] sm:-translate-y-3 md:w-[125px] md:-translate-y-4"
      />

      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(19,73,180,0.52)_0%,rgba(14,53,143,0.58)_30%,rgba(9,35,109,0.70)_100%)] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-[28px] md:p-12"
        >
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(180deg,#22D3EE_0%,#2563EB_100%)] shadow-[0_18px_40px_rgba(37,99,235,0.35)]">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-white sm:text-4xl">Welcome to the Family</h2>

                  <p className="mt-4 text-base leading-relaxed text-blue-100/85 sm:text-lg">
                    You have successfully joined our family,
                    <span className="font-bold text-white"> iClub88</span>, known as
                    <span className="font-bold text-cyan-200"> i88</span>.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-blue-100/75 sm:text-base">
                    We will redirect you to our official home page in{" "}
                    <span className="font-bold text-white">{countdown}</span> seconds.
                  </p>

                  <div className="mt-8">
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#22D3EE_0%,#38BDF8_35%,#2563EB_100%)] shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                        style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 space-y-6"
                >
                  <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Create Your Account</h2>
                    <p className="text-blue-100/75">Join the elite circle of high-rollers</p>
                  </div>

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
                  className="relative z-10 space-y-6"
                >
                  <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Create Your Account</h2>
                    <p className="text-blue-100/75">Join the elite circle of high-rollers</p>

                    {formData.name && (
                      <p className="mt-3 text-sm font-medium text-cyan-100/90">
                        Hi <span className="font-bold text-white">{formData.name}</span>, please fill in the form to start your journey
                      </p>
                    )}
                  </div>

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
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 px-1 py-1">
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
                      I am over 21 years of age and have read and accepted the general terms and conditions. I agree to receive information from your company. I can cancel this service in my account at any time.
                    </label>
                  </div>

                  <motion.button
                    whileHover={isStep2Valid ? { scale: 1.02 } : {}}
                    whileTap={isStep2Valid ? { scale: 0.98 } : {}}
                    onClick={handleFinalCTA}
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
          </div>
        </motion.div>
      </div>

      <SectionSeam className="bottom-0" fillColor="#020f6a" shape="dip" />
    </section>
  );
};

/* -----------------------------
   FLOATING GIRL
------------------------------ */

const FloatingGirl = ({ liteMode = false }: { liteMode?: boolean }) => {
  const [showFromSteps, setShowFromSteps] = useState(false);
  const [hideBubbleAtRegistration, setHideBubbleAtRegistration] = useState(false);
  const [isUserActive, setIsUserActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const stepsSection = document.getElementById("steps-to-claim");
      const regSection = document.getElementById("registration-form");

      if (stepsSection) {
        const stepsRect = stepsSection.getBoundingClientRect();
        setShowFromSteps(stepsRect.top < window.innerHeight - 100);
      }

      if (regSection) {
        const regRect = regSection.getBoundingClientRect();
        setHideBubbleAtRegistration(regRect.top < window.innerHeight - 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsUserActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsUserActive(false), liteMode ? 6000 : 10000);
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
  }, [liteMode]);

  const handleInteract = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const shouldShowBubble = showFromSteps && !hideBubbleAtRegistration && isUserActive;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed bottom-[-10px] right-[-40px] z-[25] select-none transition-opacity duration-300 ${showFromSteps ? "opacity-100" : "opacity-0"}`}
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
              <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <p className="text-[11px] font-bold leading-tight tracking-wide text-white sm:whitespace-nowrap sm:text-sm">
                  Click here to register
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]" onClick={handleInteract}>
        <img
          src={colaImg}
          alt=""
          className="relative h-auto w-[280px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[640px]"
        />
      </div>
    </div>
  );
};

/* -----------------------------
   APP
------------------------------ */

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [progressLevel, setProgressLevel] = useState(1);
  const [liteMode, setLiteMode] = useState(false);

  useEffect(() => {
    setProgressLevel(1);

    const t1 = setTimeout(() => setProgressLevel(2), 2000);
    const t2 = setTimeout(() => setProgressLevel(3), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const detectLiteMode = () => {
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean; effectiveType?: string };
      };

      const isSmallScreen = window.innerWidth < 768;
      const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
      const lowCPU = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
      const saveData = !!nav.connection?.saveData;
      const slowNetwork =
        nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g";

      setLiteMode(isSmallScreen || lowMemory || lowCPU || saveData || slowNetwork);
    };

    detectLiteMode();
    window.addEventListener("resize", detectLiteMode);
    return () => window.removeEventListener("resize", detectLiteMode);
  }, []);

  useEffect(() => {
    if (liteMode) return;

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [liteMode]);

  const progressCards = [
    { title: "REGISTER", sub: "With Us" },
    { title: "188 FS", sub: "Deposit & Get FS" },
    { title: "MORE REWARD", sub: "Awaits" },
  ];

  const trustCards = [
    "Trusted Since 2016",
    "5,000+ Active Members",
    "10+ Rewards To Unlock",
  ];

  const stepData = [
    { title: "Register", desc: "Create account", image: registerImg },
    { title: "Deposit", desc: "Deposit $50 to unlock rewards", image: depositImg },
    { title: "Reward", desc: "Get 188 FS", image: playImg },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-navy/70 font-sans text-slate-200 selection:bg-blue-500/30">
      {!liteMode && (
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
          }}
        />
      )}

      {!liteMode && (
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      )}

      <main className="relative z-10">
        <section
          id="hero-section"
          className="relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroBackground1Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative min-h-[980px] sm:min-h-[1120px] md:min-h-[1200px] lg:min-h-[980px] xl:min-h-[1060px]">
            <RealisticBackground liteMode={liteMode} />
            <GoldConfetti liteMode={liteMode} />
            <FloatingHeroCoins mousePos={mousePos} liteMode={liteMode} />

            {/* logo */}
            <img
              src={i882Img}
              alt="i88"
              className="pointer-events-none absolute left-1/2 top-0 z-[30] w-[118px] -translate-x-1/2 -translate-y-2 object-contain sm:w-[136px] sm:-translate-y-3 md:w-[150px] lg:left-[22%] lg:top-[54px] lg:w-[120px] lg:-translate-x-1/2 lg:translate-y-0 xl:left-[20%] xl:top-[58px] xl:w-[140px]"
            />

            {/* top event title */}
            <img
              src={rewardEventImg}
              alt="AirPods Pro Reward Event"
              className="pointer-events-none absolute left-1/2 top-[88px] z-[10] w-[320px] -translate-x-1/2 object-contain sm:top-[96px] sm:w-[360px] md:top-[100px] md:w-[390px] lg:top-[36px] lg:w-[430px] xl:top-[30px] xl:w-[500px]"
            />

            {/* girl - keep position */}
            <img
              src={cola1Img}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[210px] z-[8] w-[410px] -translate-x-1/2 object-contain sm:top-[220px] sm:w-[470px] md:top-[240px] md:w-[540px] lg:top-[120px] lg:w-[620px] xl:top-[90px] xl:w-[700px] 2xl:top-[80px] 2xl:w-[760px]"
              style={{
                filter:
                  "drop-shadow(0 25px 40px rgba(0,0,0,0.35)) drop-shadow(0 12px 28px rgba(56,189,248,0.18))",
              }}
            />

            {/* floating airpod - moved slightly down */}
            <motion.img
              src={airpodImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[73%] top-[255px] z-[15] w-[150px] -translate-x-1/2 object-contain sm:left-[72%] sm:top-[272px] sm:w-[180px] md:left-[70%] md:top-[300px] md:w-[210px] lg:left-[62%] lg:top-[170px] lg:w-[135px] xl:left-[63%] xl:top-[170px] xl:w-[150px] 2xl:left-[63.5%] 2xl:top-[170px] 2xl:w-[165px]"
              animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                filter:
                  "drop-shadow(0 18px 30px rgba(0,0,0,0.28)) drop-shadow(0 10px 24px rgba(56,189,248,0.16))",
              }}
            />

            {/* textbox below girl */}
            <div className="pointer-events-none absolute left-1/2 top-[490px] z-[12] w-[84%] max-w-[590px] -translate-x-1/2 sm:top-[530px] sm:w-[80%] sm:max-w-[640px] md:top-[585px] md:w-[76%] md:max-w-[690px] lg:top-[430px] lg:w-[46%] lg:max-w-[790px] xl:top-[430px] xl:w-[43%] xl:max-w-[850px] 2xl:top-[425px] 2xl:w-[41%] 2xl:max-w-[900px]">
              <img src={heroTextBoxImg} alt="" className="w-full object-contain" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
                <img
                  src={heroTopTextImg}
                  alt="Your AirPods Awaits"
                  className="relative z-10 mb-1 max-h-[42%] w-[90%] object-contain sm:mb-2 sm:w-[92%]"
                />
                <img
                  src={heroFinalTextImg}
                  alt="Complete the final 1%"
                  className="relative z-10 max-h-[42%] w-[95%] object-contain sm:w-[96%]"
                />
              </div>
            </div>

            {/* lower block - this is the real fix */}
            <div className="absolute left-1/2 top-[650px] z-[14] w-[92%] max-w-[560px] -translate-x-1/2 sm:top-[710px] sm:w-[88%] md:top-[790px] md:max-w-[620px] lg:top-[570px] lg:max-w-[760px] xl:top-[585px] xl:max-w-[820px]">
              <div className="space-y-5 sm:space-y-6">
                {/* step cards */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {progressCards.map((item) => (
                    <ProgressStepCard key={item.title} title={item.title} sub={item.sub} />
                  ))}
                </div>

                {/* progress bar */}
                <div className="relative rounded-full border border-[#ffcf53]/30 bg-[linear-gradient(90deg,#fff6cf_0%,#ffd64f_58%,#04134a_100%)] p-[3px] shadow-[0_12px_26px_rgba(0,0,0,0.22)]">
                  <div className="relative h-[54px] rounded-full bg-[linear-gradient(90deg,#fff8dd_0%,#f7ca37_58%,#08154b_100%)] sm:h-[58px]">
                    <div className="absolute left-[15%] top-1/2 h-[50%] w-px -translate-y-1/2 bg-[#c9aa40]/35" />
                    <div className="absolute left-[33%] top-1/2 h-[50%] w-px -translate-y-1/2 bg-[#c9aa40]/35" />
                    <div className="absolute left-[51%] top-1/2 h-[50%] w-px -translate-y-1/2 bg-[#c9aa40]/35" />
                    <div className="absolute left-[69%] top-1/2 h-[50%] w-px -translate-y-1/2 bg-[#c9aa40]/35" />

                    {/* locked airpod - moved into lower reward area */}
                    <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:right-5">
                      <div className="rounded-full bg-[#07143f]/90 p-2 shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
                        <img src={airpodImg} alt="" className="h-7 w-7 object-contain opacity-90 sm:h-8 sm:w-8" />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffcf53]/40 bg-[#08113a]/95 text-[#ffcf53] shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
                        🔒
                      </div>
                    </div>

                    {/* slider knob */}
                    <motion.div
                      className="absolute left-[68%] top-1/2 h-[44px] w-[44px] -translate-y-1/2 rounded-full border border-[#ffe8a6]/60 bg-[radial-gradient(circle_at_35%_35%,#fff8d8_0%,#ffd24e_45%,#f0b800_100%)] shadow-[0_8px_22px_rgba(255,209,79,0.45)] sm:h-[48px] sm:w-[48px]"
                      animate={{ boxShadow: ["0 8px 22px rgba(255,209,79,0.35)", "0 8px 28px rgba(255,209,79,0.55)", "0 8px 22px rgba(255,209,79,0.35)"] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    >
                      <div className="absolute inset-[10px] rounded-full bg-[radial-gradient(circle,#fff8e5_0%,rgba(255,255,255,0.35)_42%,transparent_70%)]" />
                    </motion.div>
                  </div>
                </div>

                {/* trust boxes */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {trustCards.map((text) => (
                    <TrustCard key={text} text={text} />
                  ))}
                </div>

                {/* cta */}
                <div className="flex justify-center pt-4 sm:pt-6">
                  <HeroCTA />
                </div>
              </div>
            </div>

            <SectionSeam className="bottom-0" fillColor="#020f6a" shape="dip" />
          </div>
        </section>

        {/* simple steps section placeholder */}
        <section
          id="steps-to-claim"
          className="relative bg-[#020f6a] px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {stepData.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
                >
                  <img src={step.image} alt={step.title} className="mx-auto mb-4 h-16 w-16 object-contain" />
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RegistrationForm />
        <FloatingGirl liteMode={liteMode} />
      </main>
    </div>
  );
}
