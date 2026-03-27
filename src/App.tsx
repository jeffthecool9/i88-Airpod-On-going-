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
    className={`relative inline-block font-semibold tracking-[-0.03em] ${
      light ? "text-slate-900" : "text-white"
    } ${className}`}
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

/* ----------------------------- Coin Visual ----------------------------- */

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

const GoldCoin = () => (
  <div className="relative z-[9999] flex items-center justify-center group/coin">
    <div className="pointer-events-none absolute -bottom-12 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1.2, 2, 1.2],
          opacity: [0.8, 0.3, 0.8],
          filter: ["blur(20px)", "blur(40px)", "blur(20px)"],
          rotateX: [70, 80, 70],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="h-14 w-64 rounded-[100%] bg-black/80 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
          filter: ["blur(10px)", "blur(18px)", "blur(10px)"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-8 w-40 rounded-[100%] bg-black blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
          filter: ["blur(3px)", "blur(6px)", "blur(3px)"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-4 w-20 rounded-[100%] bg-black blur-sm"
      />
    </div>

    <GoldParticles />

    <motion.div
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.3, 1],
        filter: ["blur(60px)", "blur(100px)", "blur(60px)"],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#F9D423]/40"
    />

    <motion.div
      animate={{
        rotateY: [0, 360],
        y: [0, -30, 0],
        rotateX: [25, -25, 25],
        rotateZ: [-12, 12, -12],
      }}
      transition={{
        rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 13, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ perspective: "3000px", transformStyle: "preserve-3d" }}
      className="relative h-36 w-36 sm:h-44 sm:w-44"
    >
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          style={{ transform: `translateZ(${-i * 0.4}px)` }}
          className="absolute inset-0 rounded-full border-[0.2px] border-[#8A6D3B]/70 bg-gradient-to-br from-[#D4AF37] via-[#F9D423] to-[#5C4033] shadow-[0_0_2px_rgba(0,0,0,0.3)]"
        />
      ))}

      <div
        style={{ transform: "translateZ(1px)" }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full border-[2.5px] border-[#F9D423] bg-gradient-to-br from-[#FFF9E5] via-[#D4AF37] to-[#5C4033] shadow-[inset_0_8px_20px_rgba(255,255,255,1),inset_0_-8px_20px_rgba(0,0,0,0.8),0_50px_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 rounded-full border-[14px] border-transparent bg-gradient-to-br from-[#FFE7A0] via-[#F9D423] to-[#8A6D3B] [mask-image:linear-gradient(white,white),linear-gradient(white,white)] [mask-clip:content-box,padding-box] [mask-composite:exclude]" />
        <div className="pointer-events-none absolute inset-[3px] rounded-full border-[1.5px] border-white/40" />
        <div className="pointer-events-none absolute inset-[11px] rounded-full border-[1px] border-black/20" />

        <div className="absolute inset-[16px] rounded-full border-[5px] border-[#8A6D3B]/60 shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]" />
        <div className="absolute inset-[24px] rounded-full border-[2.5px] border-[#FFF9E5]/60" />
        <div className="absolute inset-[30px] rounded-full border-[1.5px] border-[#8A6D3B]/30" />
        <div className="absolute inset-[34px] rounded-full border-[1px] border-white/10" />

        <div className="relative flex scale-110 items-center justify-center">
          <span className="absolute translate-x-[4px] translate-y-[5px] select-none text-7xl font-black italic tracking-tighter text-black/80 blur-[3px] sm:text-8xl">
            88
          </span>
          <span className="relative select-none bg-gradient-to-b from-[#3D2B1F] via-[#5C4033] to-[#000000] bg-clip-text text-7xl font-black italic tracking-tighter text-[#3D2B1F] drop-shadow-[0_4px_0_rgba(255,255,255,0.8)] sm:text-8xl">
            88
          </span>
          <span className="pointer-events-none absolute select-none bg-gradient-to-br from-white/40 via-transparent to-transparent bg-clip-text text-7xl font-black italic tracking-tighter text-transparent sm:text-8xl">
            88
          </span>

          <div className="absolute -right-5 -top-5">
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                filter: [
                  "brightness(1) drop-shadow(0 0 8px #F9D423)",
                  "brightness(2) drop-shadow(0 0 25px #F9D423)",
                  "brightness(1) drop-shadow(0 0 8px #F9D423)",
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Zap className="h-8 w-8 fill-[#F9D423] text-[#F9D423]" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ x: ["-150%", "150%"], y: ["-150%", "150%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)] blur-3xl"
        />
        <motion.div
          animate={{ x: ["150%", "-150%"], y: ["150%", "-150%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,212,35,0.4),transparent_70%)] blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.3),transparent_50%)]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,1),transparent_35%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.5),transparent_60deg,rgba(255,255,255,0.5),transparent_120deg,rgba(255,255,255,0.5),transparent_180deg,rgba(255,255,255,0.5),transparent_240deg,rgba(255,255,255,0.5),transparent_300deg)] animate-[spin_25s_linear_infinite]" />

        <motion.div
          animate={{ x: ["-500%", "600%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
          className="absolute inset-0 w-2/3 skew-x-[55deg] bg-gradient-to-r from-transparent via-white/95 to-transparent blur-[6px]"
        />

        <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />

        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(255,255,255,0.7)]" />
      </div>

      <div
        style={{ transform: "translateZ(-15px) rotateY(180deg)" }}
        className="absolute inset-0 flex items-center justify-center rounded-full border-[8px] border-[#8A6D3B] bg-gradient-to-br from-[#5C4033] via-[#8A6D3B] to-[#000000] shadow-[inset_0_8px_16px_rgba(0,0,0,0.9)]"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-[4px] border-[#D4AF37]/60 bg-[#3D2B1F]/50 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
          <Zap className="h-12 w-12 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
        </div>
      </div>
    </motion.div>
  </div>
);

/* ----------------------------- Confetti ----------------------------- */

type ConfettiPiece = {
  id: number;
  width: number;
  height: number;
  startX: number;
  driftX: number;
  duration: number;
  delay: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  depth: number;
  scale: number;
  color: string;
  blur: number;
};

const CONFETTI_COLORS = [
  "linear-gradient(135deg, #CD7F32 0%, #A57164 35%, #804A00 100%)",
  "linear-gradient(135deg, #F9D423 0%, #FFD700 35%, #D4AF37 100%)",
  "linear-gradient(135deg, #B87333 0%, #8B4513 35%, #CD7F32 100%)",
  "linear-gradient(135deg, #E6BE8A 0%, #D4AF37 40%, #996515 100%)",
];

function createConfettiPieces(count: number, isMobile: boolean): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => {
    const depth = Math.random();
    const width = isMobile ? 8 + Math.random() * 10 : 10 + Math.random() * 14;
    const height = Math.max(2, width * (0.22 + Math.random() * 0.18));

    return {
      id: i,
      width,
      height,
      startX: Math.random() * 120 - 10,
      driftX: (Math.random() - 0.5) * (isMobile ? 26 : 40),
      duration: isMobile ? 9 + Math.random() * 5 : 10 + Math.random() * 6,
      delay: Math.random() * 10,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      depth,
      scale: isMobile ? 0.7 + depth * 0.35 : 0.75 + depth * 0.45,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      blur: depth < 0.18 ? (isMobile ? 0.5 : 0.8) : 0,
    };
  });
}

const GoldConfetti = ({ isMobile = false }: { isMobile?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, isMobile ? -90 : -180]);

  const confettiCount = prefersReducedMotion ? 0 : isMobile ? 34 : 42;

  const pieces = useMemo(() => createConfettiPieces(confettiCount, isMobile), [confettiCount, isMobile]);

  if (prefersReducedMotion || pieces.length === 0) return null;

  return (
    <motion.div
      style={{ y: parallaxY, willChange: "transform" }}
      className="absolute inset-0 overflow-hidden pointer-events-none z-[5]"
    >
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: `${piece.startX}vw`,
            y: "-12vh",
            opacity: 0,
            rotateX: piece.rotateX,
            rotateY: piece.rotateY,
            rotateZ: piece.rotateZ,
            scale: piece.scale,
          }}
          animate={{
            x: [
              `${piece.startX}vw`,
              `${piece.startX + piece.driftX * 0.45}vw`,
              `${piece.startX + piece.driftX}vw`,
            ],
            y: ["-12vh", "52vh", "112vh"],
            opacity: [0, 1, 1, 0],
            rotateX: [piece.rotateX, piece.rotateX + 540, piece.rotateX + 1080],
            rotateY: [piece.rotateY, piece.rotateY + 360, piece.rotateY + 720],
            rotateZ: [piece.rotateZ, piece.rotateZ + 180, piece.rotateZ + 360],
          }}
          transition={{
            duration: piece.duration,
            repeat: Infinity,
            delay: piece.delay,
            ease: "linear",
          }}
          className="absolute left-0 top-0"
          style={{
            width: piece.width,
            height: piece.height,
            borderRadius: 1,
            background: piece.color,
            filter: `brightness(1.08) contrast(1.06) blur(${piece.blur}px)`,
            boxShadow: isMobile
              ? `0 ${2 + piece.depth * 3}px ${6 + piece.depth * 5}px rgba(0,0,0,${0.08 + piece.depth * 0.08})`
              : `0 ${3 + piece.depth * 5}px ${8 + piece.depth * 8}px rgba(0,0,0,${0.1 + piece.depth * 0.12})`,
            willChange: "transform, opacity",
            transformStyle: isMobile ? "flat" : "preserve-3d",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/35 via-transparent to-black/20" />
          {!isMobile && (
            <motion.div
              animate={{ opacity: [0.12, 0.45, 0.12], x: ["-100%", "100%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: piece.delay * 0.15,
              }}
              className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ----------------------------- Background ----------------------------- */

const RealisticBackground = ({ isMobile = false }: { isMobile?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                background: [
                  "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
                  "linear-gradient(to bottom, #04167a, #1a9cff, #03106f)",
                  "linear-gradient(to bottom, #020f6a, #1696f9, #020f6a)",
                ],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <div
        className={`absolute ${
          isMobile ? "-right-12 -top-12 h-[280px] w-[280px]" : "-right-20 -top-20 h-[600px] w-[600px]"
        }`}
      >
        {!prefersReducedMotion &&
          [...Array(isMobile ? 4 : 6)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                rotate: [i * 15, i * 15 + 5, i * 15],
              }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 origin-center"
              style={{
                background: `conic-gradient(from ${i * 60}deg at 50% 50%, transparent 0%, rgba(255,255,255,0.15) 10%, transparent 20%)`,
                filter: `blur(${isMobile ? 12 : 20}px)`,
              }}
            />
          ))}

        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7],
                }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,250,220,0.9)_20%,rgba(255,244,180,0.6)_40%,rgba(143,177,233,0)_75%)] ${
            isMobile ? "blur-[24px]" : "blur-[40px]"
          }`}
        />
        <div
          className={`absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_70%)] ${
            isMobile ? "blur-[50px]" : "blur-[100px]"
          }`}
        />
        {!prefersReducedMotion && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-40 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          />
        )}
      </div>

      {!prefersReducedMotion && (
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: isMobile ? 8 : 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 w-full skew-x-[45deg] bg-gradient-to-r from-transparent via-white/40 to-transparent ${
            isMobile ? "blur-[50px]" : "blur-[100px]"
          }`}
        />
      )}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={prefersReducedMotion ? undefined : { x: [-20, 20, -20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute left-1/2 -translate-x-1/2 opacity-35 mix-blend-soft-light ${
            isMobile ? "bottom-[-30px] h-[110px] w-[170%]" : "bottom-[-40px] h-[180px] w-[150%]"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(180,220,255,0.22) 0%, rgba(160,210,255,0.12) 45%, transparent 78%)",
            filter: isMobile ? "blur(26px)" : "blur(36px)",
          }}
        />

        <motion.div
          animate={prefersReducedMotion ? undefined : { x: [16, -16, 16] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute left-1/2 -translate-x-1/2 opacity-18 mix-blend-soft-light ${
            isMobile ? "bottom-[-50px] h-[140px] w-[190%]" : "bottom-[-70px] h-[220px] w-[170%]"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(140,200,255,0.14) 0%, rgba(140,200,255,0.08) 50%, transparent 85%)",
            filter: isMobile ? "blur(34px)" : "blur(50px)",
          }}
        />
        {!isMobile && (
          <motion.div
            animate={prefersReducedMotion ? undefined : { x: [-15, 15, -15] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 left-1/2 h-[550px] w-[200%] -translate-x-1/2 opacity-60 mix-blend-lighten"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 50%, transparent 95%)",
              filter: "blur(70px)",
            }}
          />
        )}

        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute opacity-40 mix-blend-lighten ${
            isMobile ? "-left-24 top-[28%] h-[260px] w-[180px]" : "-left-48 top-1/3 h-[700px] w-[500px] -translate-y-1/2"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
            filter: isMobile ? "blur(32px)" : "blur(60px)",
          }}
        />
        {!isMobile && (
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [15, -15, 15] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 bottom-1/4 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        )}

        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute opacity-40 mix-blend-lighten ${
            isMobile ? "-right-24 top-[18%] h-[260px] w-[180px]" : "-right-48 top-1/4 h-[700px] w-[500px] -translate-y-1/2"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)",
            filter: isMobile ? "blur(32px)" : "blur(60px)",
          }}
        />
        {!isMobile && (
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [-15, 15, -15] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-1/3 h-[500px] w-[400px] opacity-30 mix-blend-lighten"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(143,177,233,0.4)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(92,138,230,0.3)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
      <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.04)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_60%,rgba(45,89,200,0.05)_100%)]" />
    </div>
  );
};

/* ----------------------------- Small Components ----------------------------- */

const SectionKicker = ({ children }: { children: ReactNode }) => (
  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200/75">{children}</span>
);

const CardKeyword = ({ children }: { children: ReactNode }) => (
  <span className="font-bold tracking-[-0.02em] text-white [text-shadow:0_4px_16px_rgba(2,6,23,0.4)]">
    {children}
  </span>
);

const WaveDivider = ({
  className = "",
  color = "stroke-white/20",
  opacity = "opacity-100",
  inverted = false,
  children,
  coinPosition = "center",
}: {
  className?: string;
  color?: string;
  opacity?: string;
  inverted?: boolean;
  children?: ReactNode;
  coinPosition?: "center" | "right";
}) => (
  <div className={`absolute left-0 w-full leading-[0] pointer-events-none z-[100] ${className} ${opacity}`}>
    <div className="relative w-full">
      {children && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 pointer-events-auto z-[9999] ${
            coinPosition === "right" ? "right-[10%] sm:right-[15%]" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {children}
        </div>
      )}

      <motion.svg className="relative block h-[60px] w-[120%] -left-[10%] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.path
            key={i}
            d={
              inverted
                ? `M0,${20 + i * 6} Q600,${100 - i * 3} 1200,${20 + i * 6}`
                : `M0,${100 - i * 6} Q600,${20 + i * 3} 1200,${100 - i * 6}`
            }
            fill="none"
            strokeWidth={0.2 + i * 0.1}
            className={color}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.03, 0.15, 0.03],
            }}
            transition={{
              pathLength: { duration: 4, ease: "circOut", delay: i * 0.4 },
              opacity: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}

        <motion.path
          d={inverted ? "M0,20 Q600,100 1200,20" : "M0,100 Q600,20 1200,100"}
          fill="none"
          strokeWidth="16"
          className={color}
          style={{ filter: "blur(30px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d={inverted ? "M0,20 Q600,100 1200,20" : "M0,100 Q600,20 1200,100"}
          fill="none"
          strokeWidth="0.6"
          className="stroke-white/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, ease: "circOut" }}
        />

        <motion.path
          d={inverted ? "M0,20 Q600,100 1200,20" : "M0,100 Q600,20 1200,100"}
          fill="none"
          strokeWidth="1.2"
          className="stroke-white/40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3,
          }}
        />

        <motion.path
          d={inverted ? "M0,22 Q600,102 1200,22" : "M0,98 Q600,18 1200,98"}
          fill="none"
          strokeWidth="0.15"
          className="stroke-white/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, delay: 0.8, ease: "circOut" }}
        />
      </motion.svg>
    </div>
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
      className="text-3xl leading-[0.92] md:text-5xl"
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

/* ----------------------------- Registration Form ----------------------------- */

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

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (formData.name && emailRegex.test(formData.email) && passwordRegex.test(formData.password)) {
      setStep(2);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  const isStep1Valid = !!(formData.name && emailRegex.test(formData.email) && passwordRegex.test(formData.password));
  const isStep2Valid = !!(formData.fullName && formData.phone && formData.agreedToTerms);

  return (
    <section
      id="registration-form"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-brand-blue-start/80 via-brand-navy/90 to-brand-navy px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
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
                      className={`w-full rounded-2xl border py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        formData.email && !emailRegex.test(formData.email)
                          ? "border-red-500/50 ring-1 ring-red-500/20"
                          : "border-white/10 bg-white/5"
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
                      className={`w-full rounded-2xl border py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        formData.password && !passwordRegex.test(formData.password)
                          ? "border-red-500/50 ring-1 ring-red-500/20"
                          : "border-white/10 bg-white/5"
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
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 px-1 py-1">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <p className="text-[11px] leading-relaxed text-blue-200/60 italic">
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
                    I am over 21 years of age and have read and accepted the general terms and conditions. I agree to receive information from your company. I can cancel this service in my account at any time.
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

      <WaveDivider className="bottom-0" color="stroke-brand-blue-start" opacity="opacity-100" inverted={false} />
    </section>
  );
};

const FloatingGirl = () => {
  return (
    <div className="pointer-events-none fixed bottom-[-10px] right-[-20px] z-[25] select-none">
      <img
        src={colaImg}
        alt=""
        className="
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
    </div>
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

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile = viewport.width > 0 && viewport.width < 768;

  const stepData = [
    { step: "1", title: "Register", desc: "Create account", icon: UserPlus },
    { step: "2", title: "Deposit", desc: "Start from $50", icon: Wallet },
    { step: "3", title: "Play", desc: "Reach requirement", icon: Gamepad2 },
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
          className="absolute right-[20%] top-[10%] h-[30vw] w-[30vw] rounded-full bg-white/5 blur-[100px]"
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
        <section className="relative flex min-h-[100svh] items-center overflow-hidden px-0 pb-0 pt-0 sm:px-6 sm:pb-16 sm:pt-16">
          <RealisticBackground isMobile={isMobile} />
          <GoldConfetti isMobile={isMobile} />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Hero content removed as requested */}
          </div>

          <WaveDivider className="bottom-0" color="stroke-brand-blue-start" opacity="opacity-100" inverted={false} />
        </section>

        <section className="relative z-10 overflow-visible bg-gradient-to-br from-brand-deep-blue via-brand-vibrant-blue/40 to-brand-deep-blue px-6 pb-40 pt-16">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/5 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px] animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-4 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
              <div className="shrink-0 text-left lg:pt-0">
                <h2 className="text-4xl font-bold leading-[0.9] tracking-tight md:text-6xl">
                  <HeroWord light>Steps to Claim</HeroWord>
                </h2>
              </div>

              <div className="relative flex-1">
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
                        <div className="relative mb-4 sm:mb-10">
                          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-400/50 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] sm:h-20 sm:w-20 sm:rounded-[2.5rem] md:h-24 md:w-24">
                            <item.icon className="h-6 w-6 text-blue-600 transition-transform duration-500 group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10" />

                            <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-white text-xs font-bold text-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.15)] transition-all duration-300 group-hover:border-blue-400 group-hover:text-blue-700 sm:-left-4 sm:-top-4 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                              {item.step}
                            </div>

                            <div className="absolute inset-0 rounded-2xl border border-blue-400/0 opacity-0 group-hover:animate-ping group-hover:border-blue-400/50 group-hover:opacity-20 sm:rounded-[2.5rem]" />
                          </div>
                        </div>

                        <div className="space-y-1 text-center sm:space-y-3">
                          <h3 className="text-xs font-bold tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-xl md:text-3xl">
                            {item.title}
                          </h3>
                          <p className="mx-auto hidden max-w-[200px] text-sm font-semibold leading-relaxed text-blue-100 transition-colors group-hover:text-white sm:block sm:text-base">
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

          <WaveDivider className="bottom-0" color="stroke-brand-navy" opacity="opacity-100" inverted={true} coinPosition="right" />
        </section>

        <RegistrationForm />
        <FloatingGirl />
      </main>
    </div>
  );
}
