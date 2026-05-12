"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const primarySkills = [
    {
      name: "Swift / SwiftUI",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      desc: "Native iOS development, ARKit, HealthKit, Core Data",
    },
    {
      name: "Flutter",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      desc: "Cross-platform mobile & web, custom rendering, CI/CD",
    },
    {
      name: "React Native",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Cross-platform apps, state management, native modules",
    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "ML, NLP, trading algorithms, automation",
    },
    {
      name: "Solidity",
      image: "https://docs.soliditylang.org/en/v0.8.20/_static/logo.svg",
      desc: "Smart contracts, NFT standards, Ethereum",
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      desc: "Type-safe web development, Next.js, React",
    },
  ];

  const levelColor = (level: string) => {
    if (level === "Expert") return "var(--accent)";
    if (level === "Proficient") return "var(--text-secondary)";
    return "var(--text-muted)";
  };

  const otherTools = [
    "Firebase", "Supabase", "AWS S3", "GitHub Actions",
    "WalletConnect", "Web3", "ARKit", "ARCore",
    "HealthKit", "Apple Pay", "WebSockets", "REST APIs",
    "Core Data", "SwiftData", "Razorpay", "IPFS",
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
            04 / Skills
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Tools & technologies
          </h2>
        </div>

        {/* Primary Skills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {primarySkills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "20px",
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                opacity: 0,
                transform: "translateY(12px)",
                transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--border)" }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            Also worked with
          </span>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--border)" }} />
        </div>

        {/* Other tools */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {otherTools.map((tool) => (
            <span key={tool} className="tag">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
