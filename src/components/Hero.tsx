"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Saransh1650",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saransh-singhal-359082238/",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/SaaranshSinghal",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Medium",
      href: "https://medium.com/@singhalsaransh40",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
    {
      name: "App Store",
      href: "https://apps.apple.com/in/app/finora/id6753204750",
      icon: (
        <Image src="/app_store_logo.svg" alt="App Store" width={16} height={16} />
      ),
    },
  ];

  const stats = [
    { value: "3+", label: "Years building" },
    { value: "20+", label: "Projects" },
    { value: "3", label: "Apps on App Store" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #222222 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Subtle top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <span className="section-label"></span>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              marginLeft: "10px",
              verticalAlign: "middle",
              boxShadow: "0 0 6px #4ade8066",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            marginBottom: "24px",
          }}
        >
          Saransh
          <br />
          <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>Singhal</span>
        </h1>

        {/* Tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "1px",
              backgroundColor: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "-0.02em",
            }}
          >
            Mobile Engineer · iOS & Flutter
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
            maxWidth: "560px",
            marginBottom: "48px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          I build polished mobile applications for iOS and cross-platform with a
          focus on real-world impact. Currently working as an iOS Engineer at{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>MedQT</span>{" "}
          and Founding Flutter Engineer at{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Domi Labs</span>.
        </p>

        {/* CTA Row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "64px" }}>
          <a href="#contact" className="btn-primary">
            Get in touch
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#projects" className="btn-secondary">
            View projects
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease, border-color 0.2s ease",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = "#3a3a3a";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-muted)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        className="hidden md:flex"
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll
        </span>
        <svg width="12" height="16" fill="none" stroke="currentColor" viewBox="0 0 12 20" style={{ color: "var(--text-muted)" }}>
          <rect x="1" y="1" width="10" height="18" rx="5" strokeWidth="1.5" />
          <circle cx="6" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
