"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CurrentlyBuilding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target.querySelector(".wip-card") as HTMLElement;
            if (card) {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stack = ["Flutter (Android + iOS)", "TypeScript", "Supabase", "Docker", "AWS"];

  return (
    <section
      id="building"
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Section header */}
        <div style={{ marginBottom: "40px" }}>
          <span
            className="section-label"
            style={{ display: "block", marginBottom: "12px" }}
          >
            Currently building
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
            Work in progress
          </h2>
        </div>

        {/* WIP Card */}
        <div
          className="wip-card"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Animated top progress bar */}
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "var(--border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "55%",
                backgroundColor: "var(--accent)",
                borderRadius: "0 2px 2px 0",
              }}
            />
          </div>

          <div
            style={{
              padding: "36px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "start",
            }}
            className="wip-inner"
          >
            {/* Left: content */}
            <div>
              {/* Status badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(212, 168, 83, 0.1)",
                  border: "1px solid rgba(212, 168, 83, 0.25)",
                  marginBottom: "20px",
                }}
              >
                {/* Pulsing dot */}
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    animation: "pulse-dot 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  Active development
                </span>
              </div>

              {/* Project header with Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
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
                    src="/images/ziromarket.png"
                    alt="ZiroMarket"
                    width={56}
                    height={56}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                      lineHeight: 1.1,
                    }}
                  >
                    Ziro Market
                  </h3>
                </div>
              </div>
              <a
                href="https://ziromarket.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "20px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
              >
                ziromarket.com
                <svg
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: "560px",
                  marginBottom: "28px",
                }}
              >
                Ziro Market tracks stock market news and activity in real time, analyzes how different sectors and companies are being affected, and highlights the trends driving the market. It helps users quickly understand what’s moving the market, which stocks or sectors are gaining attention, and why those movements are happening.
              </p>

              {/* Stack tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "28px",
                }}
              >
                {stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                    }}
                  >
                    Development progress
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                    }}
                  >
                    ~55%
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    borderRadius: "2px",
                    backgroundColor: "var(--muted)",
                    overflow: "hidden",
                    maxWidth: "400px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "55%",
                      backgroundColor: "var(--accent)",
                      borderRadius: "2px",
                      transition: "width 1.2s ease",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right: milestone checklist */}
            <div
              style={{
                minWidth: "220px",
                backgroundColor: "var(--hover)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "20px",
              }}
              className="wip-milestones"
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                Milestones
              </p>
              {[
                { label: "Live Data (WebSockets)", done: true },
                { label: "CI/CD Frontend & Backend", done: true },
                { label: "Heatmaps & Trending Stocks", done: true },
                { label: "Portfolio Analytics", done: false },
                { label: "Public beta", done: false },
                { label: "Launch", done: false },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "7px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {/* Check icon */}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: item.done
                        ? "rgba(212, 168, 83, 0.15)"
                        : "var(--muted)",
                      border: `1px solid ${
                        item.done
                          ? "rgba(212, 168, 83, 0.3)"
                          : "var(--border)"
                      }`,
                    }}
                  >
                    {item.done && (
                      <svg
                        width="9"
                        height="9"
                        fill="none"
                        stroke="var(--accent)"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8125rem",
                      color: item.done
                        ? "var(--text-secondary)"
                        : "var(--text-muted)",
                      textDecoration: item.done ? "none" : "none",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for pulsing dot */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 680px) {
          .wip-inner {
            grid-template-columns: 1fr !important;
          }
          .wip-milestones {
            min-width: unset !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CurrentlyBuilding;
