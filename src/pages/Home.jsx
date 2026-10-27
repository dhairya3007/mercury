import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteContent, siteInfo } from "../data/siteContent";
import { servicesData } from "../data/services";
import { productsData } from "../data/products";
import { pricingPlans } from "../data/pricing";
import { testimonialsData } from "../data/testimonials";
import CardSlider from "../components/common/CardSlider";
import CounterUp from "../components/common/CounterUp";
import TestimonialSlider from "../components/common/TestimonialSlider";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="home-page">
      {/* 1. Hero Area */}
      <section className="hero-area">
        {/* Animated background vertical accent lines */}
        <div className="line_wrap" aria-hidden="true">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>

        {/* Partial right-side curved hero image frame */}
        <div className="ken-burns-slideshow">
          <img src="/assets/images/hero-banner.png" alt="Mercury Infotech Technology Solutions" />
        </div>

        {/* Vertical Social Links */}
        <div className="vertical-social">
          <ul className="vertical-media" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {siteContent.socialLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <div className="hero-wrapper">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Building Digital Success For <span>Businesses.</span>
              </h1>
              <p>{siteContent.description}</p>
              <div className="buttons">
                <div className="cmn-btn">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <Link to="/about">About Us</Link>
                </div>
                <div className="cmn-btn layout-two">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <Link to="/contact">Let’s Build Together</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Section - Slider */}
      <section className="section-padding" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <div className="section-title text-center">
            <span>OUR SOLUTIONS</span>
            <h2>Services</h2>
            <p style={{ maxWidth: "680px", margin: "12px auto 0 auto", color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
              We provide modern digital solutions designed to help businesses build a stronger online presence, connect with customers, and grow with confidence in an increasingly digital world.
            </p>
          </div>

          <CardSlider items={servicesData} linkPrefix="/services" />
        </div>
      </section>

      {/* 3. About Split Section with Video Modal */}
      <section className="section-padding about-area">
        <div className="container">
          <div className="grid grid-2 about-split-grid" style={{ alignItems: "center" }}>
            <motion.div
              className="about-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-title">
                <span>ABOUT MERCURY INFOTECH</span>
                <h2>We Help Businesses Modernize, Grow, and Succeed in the Digital Era</h2>
              </div>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "20px" }}>
                At Mercury Infotech, we specialize in delivering tailored web development, graphic design, CRM solutions, and digital tools that help businesses streamline operations and engage customers effectively.
              </p>
              <ul className="about-checklist">
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1rem", color: "var(--color-text-main)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}></i>
                  <span>Custom solutions built around your exact business requirements</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1rem", color: "var(--color-text-main)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}></i>
                  <span>Focus on performance, clean design, and intuitive user experiences</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1rem", color: "var(--color-text-main)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--color-primary)", fontSize: "1.2rem" }}></i>
                  <span>Transparent communication and dependable ongoing technical support</span>
                </li>
              </ul>
              <Link to="/about" className="cmn-btn">
                <span>About Us</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
              </Link>
            </motion.div>

            <motion.div
              className="about-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-banner-1">
                <img
                  src="/assets/images/about-baner-1.jpg"
                  alt="About Mercury Infotech"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
                />
                <button
                  className="video-play-btn"
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Play presentation video"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <div className="about-banner-2">
                <img
                  src="/assets/images/about-baner-2.jpg"
                  alt="Mercury Infotech Technology"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              background: "#000",
              borderRadius: "12px",
              overflow: "hidden"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(0,0,0,0.6)",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 10
              }}
            >
              &times;
            </button>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                title="Mercury Infotech Showcase"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. Products Section - Slider */}
      <section className="section-padding" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container">
          <div className="section-title text-center">
            <span>OUR PRODUCTS</span>
            <h2>Products</h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0 auto", color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
              Enhance your business with contactless networking, interactive digital catalogs, intelligent feedback management, and professional web solutions built for today's market.
            </p>
          </div>

          <CardSlider items={productsData} linkPrefix="/products" />
        </div>
      </section>

      {/* 5. Why Businesses Choose Us - Animated Counters */}
      <section className="features-area">
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: "var(--color-primary)" }}>Why Businesses Choose Us</span>
            <h2 style={{ color: "#fff" }}>Digital Solutions With Real Results</h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0 auto", color: "#AAA", fontSize: "0.95rem" }}>
              We focus on creating impactful digital experiences through smart strategy, creative design, and reliable technology solutions tailored to modern business needs.
            </p>
          </div>

          <div className="grid grid-4">
            {siteContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="single-feature"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="feature-inner">
                  {stat.icon && (
                    <div className="icon" style={{ width: "48px", height: "48px", margin: "0 auto 16px auto" }}>
                      <img src={stat.icon} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  )}
                  <div className="counter-wrapper">
                    <CounterUp target={stat.number} suffix={stat.suffix} duration={1800} />
                  </div>
                  <h4>{stat.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Plans Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>TRANSPARENT PRICING</span>
            <h2>Select The Ideal Plan For Your Business</h2>
          </div>

          <div className="grid grid-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`price-box ${plan.popular ? "popular" : ""}`}>
                  {plan.popular && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-14px",
                        right: "30px",
                        background: "var(--color-primary)",
                        color: "var(--color-dark-bg)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        letterSpacing: "1px"
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3>{plan.name}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "20px" }}>
                    <strong>{plan.price}</strong>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>/ {plan.billingCycle}</span>
                  </div>
                  <ul className="item-list">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <i className="fas fa-check-circle"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={plan.buttonLink} className="cmn-btn" style={{ width: "100%", textAlign: "center" }}>
                    <span>{plan.buttonText}</span>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section - Infinite Loop Slider */}
      <section className="testimonial-area">
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: "var(--color-primary)" }}>VERIFIED REVIEWS</span>
            <h2 style={{ color: "var(--color-white)" }}>Client Say About Us</h2>
            <p style={{ maxWidth: "680px", margin: "10px auto 0 auto", color: "#AAA", fontSize: "0.95rem" }}>
              We value every client relationship and take pride in delivering creative, reliable, and result-driven digital solutions.
            </p>
          </div>

          <TestimonialSlider items={testimonialsData} />
        </div>
      </section>
    </div>
  );
}
