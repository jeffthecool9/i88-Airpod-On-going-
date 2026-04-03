<main className="relative z-10">
  <section className="relative flex min-h-[108vh] sm:min-h-[112vh] md:min-h-[118vh] lg:min-h-[122vh] items-center overflow-hidden bg-[#0a1580]">
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
      className="pointer-events-none absolute right-[6%] top-[8%] z-[8] w-[170px] object-contain sm:right-[10%] sm:top-[8%] sm:w-[210px] md:right-[12%] md:top-[7%] md:w-[250px] lg:right-[14%] lg:top-[6%] lg:w-[290px]"
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

    {/* Luxury Progress Tracker - Version B */}
    <div className="pointer-events-none absolute left-1/2 bottom-[255px] z-[9] w-full max-w-6xl -translate-x-1/2 px-4 sm:bottom-[270px] sm:px-6 md:bottom-[285px] lg:bottom-[300px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 grid grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: "REGISTER", level: "LEVEL 1" },
            { title: "188 FS", level: "LEVEL 2" },
            { title: "MORE REWARD", level: "LEVEL 3" },
            { title: "AIRPODS PRO 3", level: "LEVEL 4" },
          ].map((item, i) => {
            const stageNumber = i + 1;
            const isActive = progressLevel >= stageNumber;
            const isFinalFloating = progressLevel === 4 && stageNumber === 4;

            return (
              <motion.div
                key={i}
                className={`min-w-0 ${isFinalFloating ? "z-20" : ""}`}
                animate={
                  isFinalFloating
                    ? {
                        y: [0, -12, 0],
                        scale: [1, 1.12, 1],
                        rotate: [0, -1.2, 0, 1.2, 0],
                      }
                    : {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                      }
                }
                transition={
                  isFinalFloating
                    ? {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : {
                        duration: 0.35,
                        ease: "easeOut",
                      }
                }
              >
                <div
                  className={`relative rounded-[22px] p-[2px] ${
                    isActive
                      ? "bg-[linear-gradient(135deg,#FFE8A3_0%,#F7C948_25%,#C88A14_60%,#FFE08A_100%)]"
                      : "bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]"
                  } shadow-[0_14px_32px_rgba(0,0,0,0.28)]`}
                >
                  <div
                    className={`relative flex h-[82px] sm:h-[86px] md:h-[92px] flex-col items-center justify-center overflow-hidden rounded-[20px] px-2 sm:px-3 md:px-4 ${
                      isActive
                        ? "bg-[linear-gradient(180deg,#173E9D_0%,#0B256E_52%,#071B54_100%)]"
                        : "bg-[linear-gradient(180deg,#12307F_0%,#0A215F_52%,#071948_100%)]"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-x-[8%] top-[3px] h-[28px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)] blur-[1px]" />
                    <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/8" />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[36%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.14))]" />

                    {isFinalFloating && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-[20px]"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            boxShadow:
                              "0 0 36px rgba(255,215,106,0.45), inset 0 0 30px rgba(255,215,106,0.18)",
                          }}
                        />
                        <motion.div
                          className="absolute -inset-[3px] rounded-[23px]"
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 1.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            boxShadow:
                              "0 0 44px rgba(255,215,106,0.40), 0 0 74px rgba(255,215,106,0.18)",
                          }}
                        />
                        <motion.div
                          className="absolute -inset-[10px] rounded-[28px]"
                          animate={{
                            opacity: [0.08, 0.24, 0.08],
                            scale: [0.98, 1.1, 0.98],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            boxShadow: "0 0 66px rgba(255,215,106,0.26)",
                          }}
                        />
                      </>
                    )}

                    <p
                      className={`relative z-10 text-center font-black uppercase leading-[0.95] ${
                        item.title === "AIRPODS PRO 3"
                          ? "text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]"
                          : item.title === "MORE REWARD"
                          ? "text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]"
                          : "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                      } ${isActive ? "text-[#FFF4C8]" : "text-white"}`}
                      style={{
                        letterSpacing: "-0.03em",
                        WebkitTextStroke: isActive
                          ? "0.35px rgba(255,235,180,0.18)"
                          : "0.2px rgba(255,255,255,0.08)",
                        textShadow: isActive
                          ? "0 1px 0 rgba(255,255,255,0.48), 0 2px 0 rgba(255,215,106,0.14), 0 8px 20px rgba(0,0,0,0.38), 0 0 12px rgba(255,215,106,0.16)"
                          : "0 1px 0 rgba(255,255,255,0.16), 0 8px 18px rgba(0,0,0,0.28)",
                      }}
                    >
                      {item.title}
                    </p>

                    <p
                      className={`relative z-10 mt-2 text-center text-[9px] sm:text-[10px] md:text-[11px] font-extrabold tracking-[0.18em] sm:tracking-[0.22em] ${
                        isActive ? "text-[#FFD76A]" : "text-cyan-100/75"
                      }`}
                      style={{
                        textShadow: "0 4px 10px rgba(0,0,0,0.22)",
                      }}
                    >
                      {item.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="relative h-[56px] sm:h-[60px] md:h-[64px] overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,#0A225E_0%,#061948_55%,#041232_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-12px_24px_rgba(0,0,0,0.30),0_22px_42px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent)]" />

          <div className="absolute inset-y-[10px] left-1/4 w-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.06))]" />
          <div className="absolute inset-y-[10px] left-2/4 w-[2px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.06))]" />
          <div className="absolute inset-y-[10px] left-3/4 w-[2px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.06))]" />

          <motion.div
            animate={{ width: `${progressLevel * 25}%` }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#FFF0B8_0%,#FFF8DE_20%,#FFD86A_52%,#F3BA24_100%)] shadow-[0_10px_24px_rgba(255,215,106,0.20),0_0_28px_rgba(255,215,106,0.12)] overflow-hidden"
          >
            <div className="absolute inset-y-[7px] left-[10px] right-[10px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.05),transparent)]" />

            <div className="absolute inset-y-[10px] left-1/4 w-[2px] rounded-full bg-[linear-gradient(180deg,rgba(173,110,0,0.26),rgba(255,255,255,0.18),rgba(173,110,0,0.22))]" />
            <div className="absolute inset-y-[10px] left-2/4 w-[2px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(173,110,0,0.26),rgba(255,255,255,0.18),rgba(173,110,0,0.22))]" />
            <div className="absolute inset-y-[10px] left-3/4 w-[2px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(173,110,0,0.26),rgba(255,255,255,0.18),rgba(173,110,0,0.22))]" />

            <motion.div
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-[28%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] blur-[7px]"
            />
          </motion.div>

          <motion.div
            animate={{
              left:
                progressLevel === 4
                  ? "calc(100% - 64px)"
                  : `calc(${progressLevel * 25}% - 24px)`,
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 z-10 -translate-y-1/2"
          >
            <motion.div
              animate={{
                scale: progressLevel === 4 ? [1, 1.1, 1] : [1, 1.03, 1],
              }}
              transition={{
                duration: progressLevel === 4 ? 1.2 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[50px] w-[50px] sm:h-[54px] sm:w-[54px] md:h-[58px] md:w-[58px] items-center justify-center rounded-full"
            >
              <div className="absolute inset-[-8px] rounded-full bg-yellow-300/20 blur-lg" />
              <div className="absolute inset-[-2px] rounded-full border border-[#FFE6A3]/45" />

              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/26 bg-[linear-gradient(180deg,#FFE27B_0%,#F3BA24_100%)] shadow-[0_12px_24px_rgba(0,0,0,0.30),0_0_0_6px_rgba(255,216,77,0.12)]">
                <div className="absolute inset-[4px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.30),rgba(255,255,255,0.04))]" />
                <div className="absolute inset-x-[18%] top-[5px] h-[32%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)] blur-[1px]" />

                <span
                  className="relative z-10 text-[16px] sm:text-[18px] font-black text-white"
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.22), 0 4px 10px rgba(0,0,0,0.28)",
                  }}
                >
                  ✦
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Trust cards */}
    <div className="pointer-events-none absolute bottom-[118px] left-1/2 z-[9] w-full max-w-6xl -translate-x-1/2 px-3 sm:bottom-[108px] sm:px-6 md:bottom-[88px] lg:bottom-[92px]">
      <div className="grid grid-cols-3 gap-2 sm:gap-7 md:gap-9">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="group relative overflow-hidden rounded-[18px] px-2 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.14)] backdrop-blur-[16px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(245,239,225,0.12),rgba(220,214,200,0.05))] sm:rounded-[28px]" />
          <div className="absolute inset-[1px] rounded-[17px] border border-white/10 sm:rounded-[27px]" />
          <div className="absolute inset-x-[10%] top-[2px] h-[38%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03),transparent)] blur-[1px]" />
          <div className="relative z-10">
            <h3 className="mt-1 text-[13px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:mt-2 sm:text-[18px] md:text-[26px] lg:text-[30px]">
              Trusted Since 2014
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="group relative overflow-hidden rounded-[18px] px-2 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.14)] backdrop-blur-[16px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(224,236,243,0.12),rgba(190,204,214,0.05))] sm:rounded-[28px]" />
          <div className="absolute inset-[1px] rounded-[17px] border border-white/10 sm:rounded-[27px]" />
          <div className="absolute inset-x-[10%] top-[2px] h-[38%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03),transparent)] blur-[1px]" />
          <div className="relative z-10">
            <h3 className="mt-1 text-[13px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:mt-2 sm:text-[18px] md:text-[26px] lg:text-[30px]">
              5,000+ Active Members
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.19 }}
          className="group relative overflow-hidden rounded-[18px] px-2 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.14)] backdrop-blur-[16px] sm:rounded-[28px] sm:px-6 sm:py-7 sm:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(235,233,243,0.12),rgba(204,200,216,0.05))] sm:rounded-[28px]" />
          <div className="absolute inset-[1px] rounded-[17px] border border-white/10 sm:rounded-[27px]" />
          <div className="absolute inset-x-[10%] top-[2px] h-[38%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03),transparent)] blur-[1px]" />
          <div className="relative z-10">
            <h3 className="mt-1 text-[13px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:mt-2 sm:text-[18px] md:text-[26px] lg:text-[30px]">
              Clear Rewards, Don&apos;t Forget to Claim it
            </h3>
          </div>
        </motion.div>
      </div>
    </div>

    <HeroCTA />

    <div className="relative z-10 mx-auto w-full max-w-6xl">
      {/* kept empty */}
    </div>

    <SectionSeam
      className="bottom-[-1px]"
      fillColor="#0b49b8"
      shape="dip"
    />
  </section>

  <section
    id="steps-to-claim"
    className="relative z-10 overflow-hidden bg-gradient-to-b from-[#0b49b8] via-[#0a3d9d] to-[#082b78] px-4 pb-32 pt-16 sm:px-6 sm:pb-40 sm:pt-24"
  >
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px] animate-pulse delay-1000" />
    </div>

    <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[24px] bg-gradient-to-br from-cyan-900/30 via-white/5 to-white/5 px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_20px_rgba(34,211,238,0.22),0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-[32px] sm:rounded-[32px] sm:px-8 sm:py-10 md:px-10">
      <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-cyan-300/30 sm:rounded-[32px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/8 via-transparent to-transparent opacity-50" />

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

              <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-2xl md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[180px] text-[12px] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:max-w-[240px] sm:text-[14px] md:text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <SectionSeam className="bottom-[-1px]" fillColor="#020f6a" shape="dip" />
  </section>

  <RegistrationForm />
  <FloatingGirl />
</main>
