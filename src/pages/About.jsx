import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { siteContent, siteInfo } from "../data/siteContent";

export default function About() {
  return (
    <div className="about-page">
      <Breadcrumb
        title="About Us"
        subtitle="Empowering businesses with modern technology"
        trails={[{ label: "About Us" }]}
      />

      {/* Main Why Choose Section */}
      <section className="section-padding why-choose">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "60px" }}>
            <motion.div
              className="why-choose-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="choose-banner1">
                <img
                  src="/assets/images/about-baner-1.jpg"
                  alt="Mercury Infotech Team"
                  loading="lazy"
                />
              </div>
              <div className="choose-banner2">
                <img
                  src="/assets/images/about-baner-2.jpg"
                  alt="Modern Solutions"
                  loading="lazy"
                />
                <div
                  style={{
                    background: "var(--color-dark-bg)",
                    color: "#fff",
                    padding: "30px",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <strong style={{ fontSize: "2rem", color: "var(--color-primary)" }}>100%</strong>
                  <span style={{ fontSize: "0.95rem", color: "#CCC" }}>Dedicated UK-Based Technical Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="why-choose-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-title">
                <span>WHY CHOOSE MERCURY INFOTECH</span>
                <h2>We Help Businesses Build, Innovate, and Succeed Online</h2>
              </div>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "20px" }}>
                {siteContent.description}
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-text-muted)" }}>
                Whether you need a responsive corporate website, tailored graphic design, bespoke CRM systems, or high-converting digital tools, our team combines technical expertise with creative strategy to help your brand grow sustainably.
              </p>

              {/* Counters */}
              <div className="counter-boxes">
                {siteContent.stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="count-box">
                    <div className="counter-wrapper">
                      <span>{stat.number}</span>
                      <sup>{stat.suffix}</sup>
                    </div>
                    <h5>{stat.label}</h5>
                  </div>
                ))}
              </div>

              {/* Feature Tags */}
              <div className="buttons-group">
                <span>Web Development</span>
                <span>Graphic Design</span>
                <span>CRM Systems</span>
                <span>Appointment Scheduling</span>
                <span>NFC Solutions</span>
              </div>

              <div style={{ marginTop: "35px" }}>
                <Link to="/contact" className="cmn-btn">
                  <span>Get In Touch</span>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Principles Section */}
      <section className="section-padding" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: "50px" }}>
            <span>OUR CORE VALUES</span>
            <h2>How We Deliver Value to Every Client</h2>
          </div>

          <div className="grid grid-3">
            <div className="single-service">
              <div className="service-icon">
                <i className="fas fa-bullseye" style={{ fontSize: "2.5rem", color: "var(--color-primary)" }}></i>
              </div>
              <h4>Results-Driven Approach</h4>
              <p>
                We do not just build websites and applications; we build strategic digital assets designed to convert visitors, streamline processes, and drive measurable revenue.
              </p>
            </div>

            <div className="single-service">
              <div className="service-icon">
                <i className="fas fa-shield-alt" style={{ fontSize: "2.5rem", color: "var(--color-primary)" }}></i>
              </div>
              <h4>Data Protection & Trust</h4>
              <p>
                As an Information Commissioner's Office (ICO) registered business (No. {siteInfo.icoNumber}), we uphold the highest standards of data security, UK GDPR compliance, and transparency.
              </p>
            </div>

            <div className="single-service">
              <div className="service-icon">
                <i className="fas fa-handshake" style={{ fontSize: "2.5rem", color: "var(--color-primary)" }}></i>
              </div>
              <h4>Partnership & Long-Term Support</h4>
              <p>
                We believe in establishing transparent, enduring partnerships. We provide ongoing maintenance, updates, and strategic technology advice whenever your business needs it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
