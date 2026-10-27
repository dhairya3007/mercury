import React, { useState } from "react";
import { motion } from "motion/react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="section-padding" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          className="subscribe-newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div className="subscribe-cnt">
              <span>Stay Connected</span>
              <h3>Get Updates & Innovations From</h3>
              <strong>Mercury Infotech</strong>
            </div>
            <div className="subscribe-form-wrap">
              {submitted ? (
                <div className="form-success-alert">
                  Thank you for subscribing! We will keep you updated with our latest technology innovations.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="cmn-btn">
                    <span>Subscribe</span>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
