import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { partnersData } from "../data/partners";

export default function Partners() {
  return (
    <div className="partners-page">
      <Breadcrumb
        title="Partner Technologies"
        subtitle="Collaboration & Integrated Ecosystems"
        trails={[{ label: "Partner Technologies" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: "60px" }}>
            <span>ECOSYSTEM & COLLABORATIONS</span>
            <h2>Integrated Platforms That Empower Businesses & Communities</h2>
          </div>

          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="partner-module"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "12px",
                  padding: "50px 45px",
                  boxShadow: "var(--shadow-card)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                      Partner Platform &bull; {index + 1}
                    </span>
                    <h2>{partner.title}</h2>
                    <h4 className="partner-tagline">{partner.tagline}</h4>
                  </div>
                  <div>
                    <Link to="/contact" className="cmn-btn" style={{ padding: "10px 24px" }}>
                      <span>Enquire Partnership</span>
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                    </Link>
                  </div>
                </div>

                <div style={{ marginTop: "20px", marginBottom: "30px" }}>
                  {partner.intro.map((para, i) => (
                    <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "16px" }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Features Box */}
                {partner.features && (
                  <div className="partner-features-box">
                    <h3>Key Platform Features</h3>
                    <ul className="partner-features-list">
                      {partner.features.map((feat, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle" style={{ color: "var(--color-primary)" }}></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Offerings Box for Chai Pe Charcha */}
                {partner.offerings && (
                  <div className="partner-features-box">
                    <h3>What We Offer</h3>
                    <ul className="partner-features-list">
                      {partner.offerings.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-mug-hot" style={{ color: "var(--color-primary)" }}></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits / Why Choose */}
                {(partner.whyChoose || partner.benefits) && (
                  <div style={{ marginTop: "35px" }}>
                    <h3 style={{ fontSize: "1.35rem", marginBottom: "18px" }}>
                      {partner.whyChoose ? "Why Choose System Hub?" : "Community Benefits"}
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "15px" }}>
                      {(partner.whyChoose || partner.benefits).map((point, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "16px 20px",
                            background: "#F8F9FA",
                            borderRadius: "6px",
                            border: "1px solid var(--color-border-subtle)",
                            fontSize: "0.95rem",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            lineHeight: 1.6
                          }}
                        >
                          <i className="fas fa-star" style={{ color: "var(--color-primary)", marginTop: "4px" }}></i>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlight Quote */}
                {partner.highlight && (
                  <div
                    style={{
                      marginTop: "35px",
                      padding: "20px 25px",
                      background: "rgba(117, 218, 180, 0.1)",
                      borderLeft: "4px solid var(--color-primary)",
                      borderRadius: "0 6px 6px 0",
                      fontWeight: 600,
                      color: "var(--color-dark-bg)",
                      fontSize: "1.05rem"
                    }}
                  >
                    {partner.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
