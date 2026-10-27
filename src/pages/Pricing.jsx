import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { pricingPlans } from "../data/pricing";

export default function Pricing() {
  return (
    <div className="pricing-page">
      <Breadcrumb
        title="Pricing Plans"
        subtitle="Transparent, Honest Pricing For Your Digital Projects"
        trails={[{ label: "Pricing" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: "60px" }}>
            <span>VALUE & TRANSPARENCY</span>
            <h2>Select The Ideal Web Development Package</h2>
            <p style={{ maxWidth: "600px", margin: "15px auto 0 auto", color: "var(--color-text-muted)" }}>
              All packages include responsive design, high performance, clean modern aesthetics, and dedicated support from our London-based team.
            </p>
          </div>

          <div className="grid grid-3" style={{ alignItems: "stretch", gap: "35px" }}>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <div style={{ marginTop: "auto" }}>
                    <Link to={plan.buttonLink} className="cmn-btn" style={{ width: "100%", textAlign: "center" }}>
                      <span>{plan.buttonText}</span>
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing FAQ notice */}
          <div
            style={{
              marginTop: "70px",
              background: "#F8F9FA",
              borderRadius: "12px",
              padding: "40px",
              border: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "25px"
            }}
          >
            <div>
              <h4 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>Looking for custom requirements or enterprise automation?</h4>
              <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                We provide custom architectures, API integrations, and customized CRM workflows tailored to your operational needs.
              </p>
            </div>
            <Link to="/contact" className="cmn-btn">
              <span>Request Custom Quote</span>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
