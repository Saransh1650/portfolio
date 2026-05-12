"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send(
        "service_afrsmqo",
        "template_lo49aar",
        { name: formData.name, email: formData.email, message: formData.message },
        "F959-BwgAyxKUE13u"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => setStatus("error")
      );
  };

  const contactLinks = [
    {
      label: "Email",
      value: "singhalsaransh40@gmail.com",
      href: "mailto:singhalsaransh40@gmail.com",
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/Saransh1650",
      href: "https://github.com/Saransh1650",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/saransh-singhal",
      href: "https://www.linkedin.com/in/saransh-singhal-359082238/",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      value: "twitter.com/SaaranshSinghal",
      href: "https://twitter.com/SaaranshSinghal",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.53 0-4.59 2.06-4.59 4.59 0 .36.04.71.12 1.05C7.69 5.5 4.07 3.7 1.64.9c-.4.68-.63 1.47-.63 2.32 0 1.6.81 3.01 2.05 3.84A4.48 4.48 0 01.96 6v.06c0 2.23 1.58 4.09 3.7 4.52-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08.59 1.85 2.3 3.2 4.33 3.24A9.06 9.06 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
        </svg>
      ),
    },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    fontSize: "0.9375rem",
    color: "var(--text-primary)",
    fontFamily: "'Space Grotesk', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
            05 / Contact
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
            Get in touch
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                marginBottom: "40px",
              }}
            >
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just a conversation about tech. My inbox is always open.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      backgroundColor: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "1px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {link.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.775rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "36px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.125rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "28px",
              }}
            >
              Send a message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  style={{ ...inputStyle }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  style={{ ...inputStyle }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "13px 24px", fontSize: "0.9375rem", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && (
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                )}
              </button>

              {status === "success" && (
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.875rem",
                    color: "#4ade80",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(74, 222, 128, 0.08)",
                    borderRadius: "6px",
                    border: "1px solid rgba(74, 222, 128, 0.15)",
                  }}
                >
                  ✓ Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.875rem",
                    color: "#f87171",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(248, 113, 113, 0.08)",
                    borderRadius: "6px",
                    border: "1px solid rgba(248, 113, 113, 0.15)",
                  }}
                >
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
