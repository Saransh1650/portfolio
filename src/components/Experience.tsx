"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "iOS Engineer",
      company: "MedQT",
      logo: "/images/medqt.png",
      period: "Nov 2025 – Present",
      type: "Remote",
      companyUrl: "https://amelaymedtech.com/",
      appUrl: "https://apps.apple.com/us/app/medqt/id6752861022",
      bullets: [
        "Developed native iOS medical app for secure storage and management of personal and family health records with real-time alerts.",
        "Implemented Apple Wallet integration to generate digital health passes with essential user info for quick access.",
        "Integrated biometric authentication (Face ID / Touch ID) for secure and seamless login across sessions.",
        "Enabled in-app payments via Apple's payment frameworks for frictionless transactions.",
      ],
      stack: ["Swift", "SwiftUI", "iOS", "Apple Wallet", "Biometric Auth", "Apple Pay", "Push Notifications"],
      accentColor: "#d4a853",
    },
    {
      title: "Founding Flutter Engineer",
      company: "Domi Labs",
      logo: "/images/domi.png",
      period: "Oct 2024 – Present",
      type: "Remote",
      mobileUrl: "https://digitaldomi.com/get-app",
      webUrl: "https://web.digitaldomi.com",
      bullets: [
        "Built Flutter mobile apps with ML-powered image scanning, custom graphics via CustomPainter, push notifications, and deep linking.",
        "Delivered Flutter Web App with CI/CD pipelines using GitHub Actions and AWS S3, reusing state management across mobile and web.",
        "Created a custom cross-platform design package for visual and functional consistency.",
        "Established clean architecture patterns, modular organization, and automated testing/deployment workflows.",
        "Built a real-time chat feature using WebSockets for low-latency communication.",
      ],
      stack: ["Flutter", "Machine Learning", "CustomPainter", "WebSockets", "CI/CD", "AWS S3", "GitHub Actions"],
      accentColor: "#d4a853",
    },
    {
      title: "Flutter Freelancing Project",
      company: "Triumb",
      logo: null,
      period: "Freelance",
      type: "Car Wash Booking System",
      previewUrl: "https://github.com/Saransh1650/triumb_preview",
      bullets: [
        "Built a booking system for scheduling and managing car wash appointments with an intuitive UI.",
        "Integrated Firebase Firestore as a real-time database for reliable booking and user data.",
        "Configured push notifications for booking confirmations, updates, and reminders.",
        "Integrated Razorpay payment gateway for secure in-app transactions.",
      ],
      stack: ["Flutter", "Firebase Firestore", "Push Notifications", "Razorpay", "Payment Gateway"],
      accentColor: "#d4a853",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
            02 / Experience
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
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Experience Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="animate-card"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "32px",
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  {exp.logo && (
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={56}
                        height={56}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  {!exp.logo && (
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "var(--muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6.75h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                        marginBottom: "2px",
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      marginBottom: "2px",
                    }}
                  >
                    {exp.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {exp.type}
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: "none", margin: "0 0 24px 0", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--text-muted)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                      }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {exp.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Company Site
                  </a>
                )}
                {exp.appUrl && (
                  <a
                    href={exp.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    App Store
                  </a>
                )}
                {exp.mobileUrl && (
                  <a
                    href={exp.mobileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Mobile App
                  </a>
                )}
                {exp.webUrl && (
                  <a
                    href={exp.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Web App
                  </a>
                )}
                {exp.previewUrl && (
                  <a
                    href={exp.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub Preview
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
