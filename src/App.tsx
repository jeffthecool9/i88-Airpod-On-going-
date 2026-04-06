import i882Img from "./assets/i882.png";
import backgroundImg from "./assets/background.png";
import airpodImg from "./assets/airpod.png";
import coinFrontImg from "./assets/3.png";
import coinTiltImg from "./assets/4.png";
import registerImg from "./assets/register.png";
import depositImg from "./assets/deposit.png";
import playImg from "./assets/play.png";
import colaImg from "./assets/cola2.png";
import cola1Img from "./assets/cola1.png";

import HeroRewardTracker from "./HeroRewardTracker";

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

import React, { useState, useEffect, ReactNode } from "react";

/* =========================
   HERO WORD
========================= */
const HeroWord = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-white">{children}</span>
);

/* =========================
   CONFETTI
========================= */
const GoldConfetti = () => (
  <div className="absolute inset-0 pointer-events-none z-[5]" />
);

/* =========================
   BACKGROUND
========================= */
const RealisticBackground = () => (
  <div className="absolute inset-0 bg-[#0a1580]" />
);

/* =========================
   HERO CTA
========================= */
const HeroCTA = () => {
  const scrollToRegister = () => {
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
      <button
        onClick={scrollToRegister}
        className="px-10 py-4 rounded-2xl bg-yellow-400 text-black font-bold"
      >
        Join Now →
      </button>
    </div>
  );
};

/* =========================
   REGISTRATION FORM (UNCHANGED CORE)
========================= */
const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    fullName: "",
    agreedToTerms: false,
  });

  const handleNext = () => {
    if (formData.name && formData.password.length >= 6) {
      setStep(2);
    }
  };

  const handleFinal = () => {
    if (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.agreedToTerms
    ) {
      setIsSuccess(true);
    }
  };

  return (
    <section
      id="registration-form"
      className="relative z-10 px-6 py-24 text-white"
    >
      <div className="max-w-xl mx-auto">

        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Success</h2>
            <p className="mt-4">Account Created</p>
          </div>
        ) : step === 1 ? (
          <div className="space-y-4">

            <input
              placeholder="Username"
              className="w-full p-4 rounded bg-white/10"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              placeholder="Password"
              type="password"
              className="w-full p-4 rounded bg-white/10"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <button
              onClick={handleNext}
              className="w-full bg-blue-500 p-4 rounded font-bold"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="space-y-4">

            <input
              placeholder="Full Name"
              className="w-full p-4 rounded bg-white/10"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <input
              placeholder="Email"
              className="w-full p-4 rounded bg-white/10"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              className="w-full p-4 rounded bg-white/10"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <button
              onClick={handleFinal}
              className="w-full bg-green-500 p-4 rounded font-bold"
            >
              Complete
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/* =========================
   MAIN APP
========================= */
export default function App() {
  const [progressLevel, setProgressLevel] = useState(0);

  // ✅ FIXED PROGRESS (STOP AT STEP 3)
  useEffect(() => {
    const levels = [1, 2, 3];
    let i = 0;

    const interval = setInterval(() => {
      if (i < levels.length) {
        setProgressLevel(levels[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const trackerItems = [
    { title: "REGISTER", sub: "With Us", type: "text" as const },
    { title: "188 FS", sub: "Up to 188 FS", type: "text" as const },
    {
      title: "MORE REWARD",
      sub: "Deposit Minimum $50",
      type: "text" as const,
    },
    { title: "", sub: "", type: "airpod" as const },
  ];

  return (
    <div className="min-h-screen bg-[#0a1580] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <RealisticBackground />
        <GoldConfetti />

        {/* LOGO */}
        <img
          src={i882Img}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px]"
        />

        {/* HERO IMAGE */}
        <img
          src={cola1Img}
          className="absolute left-0 top-[20%] w-[900px]"
        />

        {/* FLOATING AIRPOD */}
        <motion.img
          src={airpodImg}
          className="absolute right-[10%] top-[20%] w-[250px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* ✅ CLEAN TRACKER (NO OLD CODE) */}
        <HeroRewardTracker
          trackerItems={trackerItems}
          progressLevel={progressLevel}
          backgroundImg={backgroundImg}
          airpodImg={airpodImg}
        />

        <HeroCTA />
      </section>

      {/* ================= REGISTRATION ================= */}
      <RegistrationForm />
    </div>
  );
}
