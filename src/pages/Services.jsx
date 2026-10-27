import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { servicesData } from "../data/services";

export default function Services() {
  return (
    <div className="services-page">
      <Breadcrumb
        title="Our Services"
        subtitle="Modern Solutions For Growing Businesses"
        trails={[{ label: "Services" }]}
      />

      <section className="services-grid-section">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: "60px" }}>
            <span>WHAT WE OFFER</span>
            <h2>Comprehensive Digital Solutions Designed for Your Success</h2>
          </div>

          <div className="grid grid-2" style={{ gap: "40px" }}>
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="single-service" style={{ padding: "45px 35px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div className="service-icon" style={{ marginBottom: 0 }}>
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <span className="service-num" style={{ position: "static" }}>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p style={{ fontSize: "1.02rem", marginBottom: "25px", color: "var(--color-text-main)" }}>
                    {service.shortDescription}
                  </p>

                  <h5 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-primary)", marginBottom: "12px" }}>
                    Key Features & Inclusions:
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {service.features.slice(0, 6).map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                        <i className="fas fa-check" style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "auto" }}>
                    <Link to={`/services/${service.slug}`} className="cmn-btn">
                      <span>View Service Details</span>
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
