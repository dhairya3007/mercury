import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { productsData } from "../data/products";

export default function Products() {
  return (
    <div className="products-page">
      <Breadcrumb
        title="Our Products"
        subtitle="Smart Digital Solutions Built For Modern Businesses"
        trails={[{ label: "Product" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "35px" }}>
            {productsData.map((prod, index) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="single-service" style={{ padding: "35px 30px", position: "relative" }}>
                  <span className="service-num">{prod.number}</span>
                  <div className="service-icon" style={{ marginBottom: "18px" }}>
                    <img src={prod.icon} alt={prod.title} />
                  </div>

                  <h4 style={{ fontSize: "1.18rem", fontWeight: 700, marginBottom: "12px", paddingRight: "45px", lineHeight: 1.35 }}>
                    <Link
                      to={`/products/${prod.slug}`}
                      style={{ color: "var(--color-dark-bg)", transition: "color 0.2s" }}
                      onMouseOver={(e) => (e.target.style.color = "var(--color-primary)")}
                      onMouseOut={(e) => (e.target.style.color = "var(--color-dark-bg)")}
                    >
                      {prod.title}
                    </Link>
                  </h4>

                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {prod.shortDescription}
                  </p>

                  <div style={{ marginTop: "25px" }}>
                    <Link
                      to={`/products/${prod.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 600,
                        color: "var(--color-dark-bg)",
                        fontSize: "0.95rem"
                      }}
                    >
                      <span>Explore Product</span>
                      <i className="fas fa-arrow-right" style={{ color: "var(--color-primary)" }}></i>
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
