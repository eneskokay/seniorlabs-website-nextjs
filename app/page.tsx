"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const socialLinks = [
  { icon: faInstagram, href: "#", label: "Instagram" },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/seniorlabs",
    label: "LinkedIn",
  },
  { icon: faXTwitter, href: "#", label: "X" },
  { icon: faFacebook, href: "#", label: "Facebook" },
];

const navLinks: [string, string][] = [
  ["Work", "#work"],
  ["Apps", "#apps"],
  ["Join Us", "#join"],
  ["Contact", "#contact"],
];

const sectionIds = ["work", "apps", "join", "contact"];

// ── Section components ─────────────────────────────────────────────────────

function HeroSection({ heightClass }: { heightClass: string }) {
  return (
    <section id="work" className={`relative ${heightClass} flex items-center`}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/background.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover hidden md:block animate-hero-zoom"
        />
        <img
          src="/background-mobile.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover md:hidden animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          className="flex flex-col gap-7"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="font-bold leading-tight"
          >
            <span
              className="block whitespace-nowrap text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(1rem, 6.5vw, 3.75rem)",
              }}
            >
              We are the
            </span>
            <span
              className="block whitespace-nowrap text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(1rem, 6.5vw, 3.75rem)",
              }}
            >
              <span className="bg-gradient-to-r from-[#FC8E1A] to-[#ff4e00] bg-clip-text text-transparent">
                Seniors{" "}
              </span>
              of Mobile AI
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-gray-400 text-lg max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We design and build world-class AI-native mobile experiences. From
            concept to launch — fast, elegant, and intelligent.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#apps"
              className="px-8 py-3 bg-[#FC8E1A] text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(252,142,26,0.55)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#FC8E1A] text-[#FC8E1A] font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:bg-[#FC8E1A]/10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center relative h-96"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
        >
          <div className="absolute w-96 h-96 rounded-full bg-[#FC8E1A] opacity-[0.07] blur-[80px]" />
          <div className="absolute w-56 h-56 rounded-full bg-[#ff4e00] opacity-[0.10] blur-[60px] translate-x-16 -translate-y-10" />
          <div className="absolute w-32 h-32 rounded-full bg-[#FC8E1A] opacity-[0.15] blur-[40px] -translate-x-8 translate-y-12" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-7 h-7 text-[#FC8E1A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

function AppsSection({ heightClass }: { heightClass: string }) {
  return (
    <section
      id="apps"
      className={`${heightClass} flex items-center`}
      style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideLeft}
        >
          <span
            className="text-xs text-[#FC8E1A] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Featured App
          </span>

          <h2
            className="text-6xl md:text-7xl font-bold text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            GenlyAI
          </h2>

          <p
            className="text-gray-300 text-lg leading-relaxed max-w-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your AI-powered personal companion. Smart, intuitive, and always
            learning — GenlyAI redefines what a mobile assistant can be.
          </p>

          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FC8E1A] to-[#ff4e00] flex items-center justify-center shadow-lg">
            <span
              className="text-white font-bold text-2xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              GA
            </span>
          </div>

          <div className="flex gap-3 flex-wrap">
            {["iOS & Android", "AI Native"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-purple-400/40 text-purple-200 rounded-full text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center relative py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideRight}
        >
          <div className="absolute w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full pointer-events-none" />
          <div className="relative w-[260px] h-[540px] md:w-[315px] md:h-[653px] animate-float">
            <div className="absolute inset-0 z-0 top-[2%] left-[4%] right-[4%] bottom-[2%] rounded-[2rem] overflow-hidden">
              <Image
                src="/genlyai-home.webp"
                alt="GenlyAI app screenshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-10">
              <Image
                src="/phone.png"
                alt="Phone frame mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JoinSection({ heightClass }: { heightClass: string }) {
  return (
    <section
      id="join"
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-[#0a0a0a]`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(252,142,26,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-16 left-12 w-3 h-3 rounded-full bg-[#FC8E1A] opacity-20 pointer-events-none" />
      <div className="absolute top-36 right-20 w-2 h-2 rounded-full bg-[#FC8E1A] opacity-15 pointer-events-none" />
      <div className="absolute bottom-28 left-28 w-4 h-4 rounded-full bg-[#FC8E1A] opacity-10 pointer-events-none" />
      <div className="absolute bottom-16 right-14 w-2 h-2 rounded-full bg-[#FC8E1A] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-6 w-2 h-2 rounded-full bg-[#ff4e00] opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-3 h-3 rounded-full bg-[#ff4e00] opacity-10 pointer-events-none" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="font-bold leading-none mb-8"
        >
          <span
            className="block text-5xl md:text-6xl lg:text-8xl text-white mb-2"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            READY TO BUILD
          </span>
          <span
            className="block text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-[#FC8E1A] to-[#ff4e00] bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            THE FUTURE?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We&apos;re always looking for exceptional talent who are passionate
          about AI and mobile. If that&apos;s you — let&apos;s talk.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://www.linkedin.com/in/seniorlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-[#FC8E1A] text-[#FC8E1A] font-bold text-lg rounded-lg transition-all duration-200 hover:scale-105 hover:bg-[#FC8E1A]/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See Open Roles
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FooterSection({ heightClass }: { heightClass: string }) {
  return (
    <footer
      id="contact"
      className={`bg-[#080808] ${heightClass} flex items-center justify-center text-center`}
    >
      <motion.div
        className="w-full px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-6">
          <Image
            src="/logo-vertical-hd.webp"
            alt="Senior Labs"
            width={800}
            height={400}
            className="w-1/2 h-auto mx-auto"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-gray-500 text-lg mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Building the future of AI-powered mobile experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#FC8E1A] text-2xl transition-all duration-200 hover:scale-125 hover:text-[#ff4e00]"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="border-t border-white/10 pt-8"
        >
          <p
            className="text-gray-600 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Senior Labs. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const srcs = [
      "/logo-main.webp",
      isMobile ? "/background-mobile.png" : "/background.png",
    ];
    let remaining = srcs.length + 1;
    const done = () => {
      if (--remaining === 0) setLoaded(true);
    };
    setTimeout(done, 2000);
    srcs.forEach((src) => {
      const img = new window.Image();
      img.onload = done;
      img.onerror = done;
      img.src = src;
    });
  }, []);

  // Lock scroll during loading and always on desktop.
  useEffect(() => {
    document.documentElement.classList.add("loading");
    document.body.style.overflow = "hidden";
    if (!isDesktop && loaded) {
      document.documentElement.classList.remove("loading");
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.classList.remove("loading");
      document.body.style.overflow = "";
    };
  }, [isDesktop, loaded]);

  useEffect(() => {
    if (isDesktop) return;
    const handleScroll = () => setMobileScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const scrolled = isDesktop ? activeSlide > 0 : mobileScrolled;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!isDesktop || !swiperRef.current) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const idx = sectionIds.indexOf(id);
    if (idx !== -1) swiperRef.current.slideTo(idx);
    setMenuOpen(false);
  };

  const navbar = (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/logo-main.webp"
          alt="Senior Labs"
          width={480}
          height={120}
          className="h-10 w-auto"
        />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-sm text-white transition-colors duration-200 hover:text-[#FC8E1A]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 pb-6 gap-5 border-t border-white/10 pt-4">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white hover:text-[#FC8E1A] transition-colors duration-200"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );

  const loadingScreen = (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: loaded ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/logo-main.webp"
          alt="Senior Labs"
          width={480}
          height={120}
          className="h-14 w-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );

  if (isDesktop) {
    return (
      <div className="bg-[#0a0a0a] text-white">
        {loadingScreen}
        {navbar}
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel={{ sensitivity: 1, releaseOnEdges: false }}
          keyboard={{ enabled: true }}
          speed={800}
          modules={[Mousewheel, Keyboard]}
          className="!h-screen"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          <SwiperSlide>
            <HeroSection heightClass="h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <AppsSection heightClass="h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <JoinSection heightClass="h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <FooterSection heightClass="h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {loadingScreen}
      {navbar}
      <HeroSection heightClass="min-h-screen" />
      <AppsSection heightClass="min-h-screen" />
      <JoinSection heightClass="min-h-screen" />
      <FooterSection heightClass="py-0" />
    </div>
  );
}
