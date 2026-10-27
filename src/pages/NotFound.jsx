import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Breadcrumb
        title="Page Not Found"
        subtitle="Error 404"
        trails={[{ label: "404 Not Found" }]}
      />

      <section className="section-padding text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}
          >
            <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "var(--color-primary)", margin: 0, lineHeight: 1 }}>
              404
            </h1>
            <h3 style={{ fontSize: "1.75rem", margin: "20px 0 15px 0" }}>
              Oops! Page Not Found
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", marginBottom: "35px" }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="cmn-btn">
              <span>Return To Homepage</span>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
