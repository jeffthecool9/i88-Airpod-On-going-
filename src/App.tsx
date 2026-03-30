/**
 * Updated divider only:
 * clean, heavy curved band like the reference screenshot
 * no extra glow, no thin highlight lines, no content changes
 */
const SmoothShapeDivider = ({
  fillColor = "#0A168F",
  type = "curve",
  inverted = false,
  className = "",
  children,
  coinPosition = "center",
}: {
  fillColor: string;
  type?: "wave" | "curve" | "concave";
  inverted?: boolean;
  className?: string;
  children?: ReactNode;
  coinPosition?: "center" | "right";
}) => {
  const paths = {
    // softer wide-bottom curve
    wave: "M0,0 L0,120 C260,92 520,78 720,76 C960,74 1180,92 1440,122 L1440,0 Z",
    // main reference-like big arc
    curve: "M0,0 L0,126 C300,96 560,82 720,80 C930,78 1180,92 1440,128 L1440,0 Z",
    // top bite / inverted transition
    concave: "M0,160 C300,122 560,94 720,92 C930,90 1180,108 1440,156 L1440,0 L0,0 Z",
  };

  const activePath = paths[type];

  return (
    <div
      className={`absolute left-0 w-full leading-[0] z-20 pointer-events-none overflow-hidden ${
        inverted ? "top-[-1px] rotate-180" : "bottom-[-1px]"
      } ${className}`}
    >
      <div className="relative w-full">
        {children && (
          <div
            className={`absolute top-0 -translate-y-1/2 pointer-events-auto z-[30] ${
              coinPosition === "right" ? "right-[10%] sm:right-[15%]" : "left-1/2 -translate-x-1/2"
            }`}
          >
            {children}
          </div>
        )}

        <svg
          viewBox="0 0 1440 160"
          className="block h-[64px] w-full md:h-[116px]"
          preserveAspectRatio="none"
        >
          <path fill={fillColor} d={activePath} />
        </svg>
      </div>
    </div>
  );
};


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
      className="relative z-10 overflow-visible bg-brand-navy px-6 py-40"
    >
      {/* Curved Top Transition (Biting into the previous section) */}
      <SmoothShapeDivider type="concave" fillColor="#01081a" inverted={true} className="top-0" />

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
    </section>
  );
};

const FloatingGirl = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });
  const [showOnMobile, setShowOnMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () =>
      setViewport({
        width: window.innerWidth || 1440,
        height: window.innerHeight || 900,
      });

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (viewport.width >= 768) return;

    const stepsSection = document.getElementById("steps-to-claim");
    if (!stepsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowOnMobile(entry.isIntersecting && entry.intersectionRatio > 0.28);
      },
      {
        threshold: [0, 0.15, 0.28, 0.4, 0.6],
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(stepsSection);
    return () => observer.disconnect();
  }, [viewport.width]);

  const isMobile = viewport.width < 768;

  // Desktop keeps scroll-based reveal after hero.
  const desktopOpacity = useTransform(scrollY, [0, viewport.height * 0.82, viewport.height * 1.02], [0, 0, 1]);
  const desktopY = useTransform(scrollY, [0, viewport.height * 0.82, viewport.height * 1.02], [52, 24, 0]);
  const desktopScale = useTransform(scrollY, [0, viewport.height * 0.82, viewport.height * 1.02], [0.92, 0.97, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-[-10px] right-[-40px] z-[25] select-none"
      style={
        !isMobile && !prefersReducedMotion
          ? { opacity: desktopOpacity, y: desktopY, scale: desktopScale, willChange: "transform, opacity" }
          : undefined
      }
      animate={
        isMobile
          ? {
              opacity: showOnMobile ? 1 : 0,
              y: showOnMobile ? 0 : 26,
              scale: showOnMobile ? 1 : 0.94,
            }
          : undefined
      }
      transition={{
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
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
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.45, 0.82, 0.45],
                filter: [
                  "brightness(1.1) drop-shadow(0 0 6px rgba(125,211,252,0.75)) drop-shadow(0 0 12px rgba(56,189,248,0.65)) drop-shadow(0 0 22px rgba(59,130,246,0.5))",
                  "brightness(1.18) drop-shadow(0 0 10px rgba(125,211,252,0.95)) drop-shadow(0 0 18px rgba(56,189,248,0.82)) drop-shadow(0 0 30px rgba(59,130,246,0.62))",
                  "brightness(1.1) drop-shadow(0 0 6px rgba(125,211,252,0.75)) drop-shadow(0 0 12px rgba(56,189,248,0.65)) drop-shadow(0 0 22px rgba(59,130,246,0.5))",
                ],
              }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

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
        <section className="relative flex min-h-[100svh] items-center overflow-visible px-0 pb-0 pt-0 sm:px-6 sm:pb-16 sm:pt-16">
          <RealisticBackground isMobile={isMobile} />
          <GoldConfetti isMobile={isMobile} />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Content remains exactly the same as your code */}
          </div>

          {/* Smooth Curve Transition into Steps Section */}
          <SmoothShapeDivider type="curve" fillColor="#01081a" />
        </section>

        <section id="steps-to-claim" className="relative z-10 overflow-visible bg-[#01081a] px-6 pb-40 pt-16">
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

          {/* Liquid Wave Transition into Registration Section */}
          <SmoothShapeDivider 
            type="wave" 
            fillColor="#020617" 
            coinPosition="right" 
          >
             <GoldCoin />
          </SmoothShapeDivider>
        </section>

        <RegistrationForm />
        <FloatingGirl />
      </main>
    </div>
  );
}
