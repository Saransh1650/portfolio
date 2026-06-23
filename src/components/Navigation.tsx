"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ["home", "building", "experience", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home", wip: false },
    { name: "Building", href: "#building", id: "building", wip: true },
    { name: "Experience", href: "#experience", id: "experience", wip: false },
    { name: "Projects", href: "#projects", id: "projects", wip: false },
    { name: "Skills", href: "#skills", id: "skills", wip: false },
    { name: "Contact", href: "#contact", id: "contact", wip: false },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
        borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          SS<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "4px" }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "color 0.2s ease, background-color 0.2s ease",
                color:
                  item.wip
                    ? activeSection === item.id
                      ? "var(--accent)"
                      : "var(--accent)"
                    : activeSection === item.id
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                backgroundColor:
                  activeSection === item.id
                    ? item.wip
                      ? "rgba(212, 168, 83, 0.1)"
                      : "var(--hover)"
                    : "transparent",
                letterSpacing: "-0.01em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                opacity: item.wip ? 0.85 : 1,
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    item.wip ? "var(--accent)" : "var(--text-secondary)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    item.wip ? "var(--accent)" : "var(--text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity =
                    item.wip ? "0.85" : "1";
                }
              }}
            >
              {item.wip && (
                <span
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    animation: "pulse-nav 2s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
              )}
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginLeft: "16px",
              padding: "7px 16px",
              borderRadius: "6px",
              border: "1px solid var(--accent)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--accent)",
              textDecoration: "none",
              transition: "background-color 0.2s ease, color 0.2s ease",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(212, 168, 83, 0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <a
            href="https://github.com/Saransh1650"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginLeft: "8px",
              padding: "7px 16px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#444";
              el.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
            }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "6px",
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.98)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: activeSection === item.id ? "var(--text-primary)" : "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: "block",
              padding: "12px 0",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--accent)",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
