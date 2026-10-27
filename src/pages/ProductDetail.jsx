import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { productsData } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="product-detail-page">
      <Breadcrumb
        title={product.cardTitle}
        subtitle={product.badge}
        trails={[
          { label: "Products", to: "/products" },
          { label: product.cardTitle }
        ]}
      />

      <section className="product-detail-area">
        <div className="container">
          <div className="product-detail-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Meta Header */}
              <div className="product-meta-header">
                <span>{product.badge}</span>
                <span style={{ color: "#777", fontSize: "0.85rem" }}>
                  Status: <strong>{product.updatedBadge}</strong>
                </span>
              </div>

              {/* Main Product Image */}
              <div className="product-main-thumb">
                <img src={product.image} alt={product.title} />
              </div>

              {/* Title & Introduction */}
              <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>{product.title}</h2>
              {product.intro.map((para, i) => (
                <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-main)", marginBottom: "16px" }}>
                  {para}
                </p>
              ))}

              {/* Quote Banner */}
              {product.quote && (
                <div className="product-quote-banner">
                  <i className="fas fa-quote-left"></i>
                  <p>{product.quote}</p>
                </div>
              )}

              {/* What We Offer / Offerings Grid */}
              {product.whatWeOffer && product.whatWeOffer.length > 0 && (
                <div style={{ marginTop: "40px" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>What We Offer</h3>
                  <div className="offerings-grid">
                    {product.whatWeOffer.map((item, i) => (
                      <div key={i} className="offering-card">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features & Inclusions */}
              <div style={{ marginTop: "40px" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Key Features & Specifications</h3>
                <ul className="service-bullet-list">
                  {product.features.map((feat, i) => (
                    <li key={i}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              {product.benefits && (
                <div style={{ marginTop: "40px" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Business Benefits</h3>
                  <ul className="service-bullet-list">
                    {product.benefits.map((benefit, i) => (
                      <li key={i}>
                        <i className="fas fa-star" style={{ color: "#FFB800" }}></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Choose Statement */}
              {product.whyChoose && (
                <div
                  style={{
                    marginTop: "45px",
                    padding: "30px",
                    background: "#F8F9FA",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border-subtle)"
                  }}
                >
                  <h4 style={{ fontSize: "1.25rem", marginBottom: "12px" }}>Why Choose This Solution?</h4>
                  <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-main)" }}>
                    {product.whyChoose}
                  </p>
                </div>
              )}

              {/* Bottom CTA Card */}
              <div className="service-cta-card" style={{ marginTop: "50px" }}>
                <h3>Interested in {product.cardTitle}?</h3>
                <p>
                  Get in touch with our team today to discuss implementation, custom integrations, or request a personalized demonstration.
                </p>
                <Link to="/contact" className="cmn-btn">
                  <span>Enquire Now</span>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
