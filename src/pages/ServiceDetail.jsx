import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { servicesData } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page">
      <Breadcrumb
        title={service.title}
        subtitle={service.subtitle}
        trails={[
          { label: "Services", to: "/services" },
          { label: service.title }
        ]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr 340px", gap: "45px", alignItems: "start" }}>
            {/* Main Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Intro Box */}
              <div className="service-detail-box">
                <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "20px" }}>
                  <img src={service.icon} alt={service.title} style={{ width: "48px", height: "48px" }} />
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: 700, textTransform: "uppercase" }}>
                      Service Overview &bull; {service.number}
                    </span>
                    <h2 style={{ fontSize: "1.75rem", margin: 0 }}>{service.title}</h2>
                  </div>
                </div>

                {service.detailIntro.map((para, i) => (
                  <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "16px" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Offerings Box */}
              {service.offerings && service.offerings.length > 0 && (
                <div className="service-detail-box">
                  <h3>{service.offerings[0].title}</h3>
                  {service.offerings[0].note && (
                    <p style={{ color: "var(--color-text-muted)", fontStyle: "italic", marginBottom: "20px" }}>
                      {service.offerings[0].note}
                    </p>
                  )}
                  <ul className="service-bullet-list">
                    {service.offerings[0].items.map((item, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features Box */}
              <div className="service-detail-box">
                <h3>Key Features & Capabilities</h3>
                <ul className="service-bullet-list">
                  {service.features.map((feat, i) => (
                    <li key={i}>
                      <i className="fas fa-shield-alt"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Box */}
              <div className="service-detail-box">
                <h3>Why Choose Mercury Infotech</h3>
                {service.whyChoose.map((para, i) => (
                  <p key={i} style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "14px" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Industries Box */}
              {service.industries && (
                <div className="service-detail-box">
                  <h3>Industries We Empower</h3>
                  <div className="industry-badge-grid">
                    {service.industries.map((ind, i) => (
                      <div key={i} className="industry-item">
                        <i className="fas fa-building"></i>
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom CTA Card */}
              <div className="service-cta-card">
                <h3>{service.cta.heading}</h3>
                <p>{service.cta.text}</p>
                <Link to="/contact" className="cmn-btn">
                  <span>Start Your Project Today</span>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </Link>
              </div>
            </motion.div>

            {/* Sidebar with all services navigation */}
            <aside style={{ position: "sticky", top: "100px" }}>
              <div
                style={{
                  background: "var(--color-dark-bg)",
                  borderRadius: "8px",
                  padding: "30px",
                  color: "#fff",
                  marginBottom: "30px"
                }}
              >
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px" }}>
                  All Services
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {servicesData.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/services/${s.slug}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          borderRadius: "6px",
                          background: s.slug === slug ? "var(--color-primary)" : "rgba(255,255,255,0.05)",
                          color: s.slug === slug ? "var(--color-dark-bg)" : "#fff",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          transition: "all 0.2s"
                        }}
                      >
                        <span>{s.title}</span>
                        <i className="fas fa-chevron-right" style={{ fontSize: "0.8rem" }}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Quick Help Box */}
              <div
                style={{
                  background: "#F8F9FA",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "8px",
                  padding: "30px",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(117, 218, 180, 0.15)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    margin: "0 auto 15px auto"
                  }}
                >
                  <i className="fas fa-headset"></i>
                </div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>Have Questions?</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "20px" }}>
                  Speak directly with our technical experts to explore how we can support your business goals.
                </p>
                <a
                  href="tel:+447442974622"
                  style={{
                    display: "inline-block",
                    fontWeight: 700,
                    color: "var(--color-dark-bg)",
                    fontSize: "1.1rem"
                  }}
                >
                  +44 7442 974622
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
