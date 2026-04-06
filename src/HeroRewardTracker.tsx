import React from "react";
import { motion } from "motion/react";
import { Lock } from "lucide-react";

type TrackerItem =
  | { title: string; sub: string; type: "text" }
  | { title: string; sub: string; type: "airpod" };

type Props = {
  trackerItems: TrackerItem[];
  progressLevel: number;
  backgroundImg: string;
  airpodImg: string;
};

export default function HeroRewardTracker({
  trackerItems,
  progressLevel,
  backgroundImg,
  airpodImg,
}: Props) {
  const fillWidth =
    progressLevel === 0
      ? "0%"
      : progressLevel === 1
      ? "33%"
      : progressLevel === 2
      ? "66%"
      : "75%"; // STOP before airpod

  return (
    <div className="pointer-events-none absolute left-1/2 bottom-[285px] z-[9] w-full max-w-6xl -translate-x-1/2 px-4">
      <div className="mx-auto max-w-5xl">
        
        {/* TRACKER ITEMS */}
        <div className="mb-6 grid grid-cols-4 items-end gap-3">
          {trackerItems.map((item, i) => {
            const step = i + 1;
            const reached = progressLevel >= step;

            // 🔴 AIRPOD (LOCKED ALWAYS)
            if (item.type === "airpod") {
              const showText = progressLevel >= 3;

              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center justify-end"
                >
                  <div className="relative flex h-[90px] w-full items-end justify-center">
                    
                    {/* AIRPOD IMAGE */}
                    <motion.img
                      src={airpodImg}
                      className="w-[90px] object-contain"
                      style={{
                        filter:
                          "grayscale(1) opacity(0.55) drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                      }}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    {/* LOCK ICON */}
                    <div className="absolute top-0 right-[20%] flex h-7 w-7 items-center justify-center rounded-full bg-black/70 border border-yellow-300/30">
                      <Lock className="w-3 h-3 text-yellow-400" />
                    </div>
                  </div>

                  {/* TEXT APPEAR AFTER STEP 3 */}
                  <motion.p
                    className="text-[11px] text-yellow-300 mt-2 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showText ? 1 : 0 }}
                  >
                    Deposit & Play With Us
                  </motion.p>
                </div>
              );
            }

            // 🟡 NORMAL BOX
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: reached ? 1 : 0,
                  y: reached ? 0 : 10,
                }}
              >
                <div className="rounded-[18px] p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-lg">
                  <div
                    className="h-[90px] rounded-[16px] flex flex-col justify-center items-center text-center"
                    style={{
                      backgroundImage: `url(${backgroundImg})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <p className="text-white font-black text-[14px]">
                      {item.title}
                    </p>
                    <p className="text-yellow-300 text-[11px] font-bold mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PROGRESS BAR */}
        <div className="relative h-[50px] rounded-full bg-blue-900 overflow-hidden border border-white/10">
          
          {/* FILL */}
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-200 to-yellow-500"
            animate={{ width: fillWidth }}
            transition={{ duration: 0.8 }}
          />

          {/* STEPS */}
          <div className="absolute inset-0 grid grid-cols-4 items-center px-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-[2px] h-5 bg-white/30" />
              </div>
            ))}
          </div>

          {/* END DOT */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
