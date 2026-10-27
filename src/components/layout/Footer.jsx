import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { siteInfo, siteContent } from "../../data/siteContent";
import { footerServiceLinks, footerQuickLinks, footerLegalLinks } from "../../data/navigation";

export default function Footer({ showNewsletter = true }) {
  const currentYear = siteContent.copyrightYear || 2026;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="site-footer-wrapper">
      {/* 1. Floating Newsletter Banner Overlapping Top of Footer */}
      {showNewsletter && (
        <div className="footer-newsletter-section">
          <div className="container">
            <motion.div
              className="subscribe-newsletter-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-2">
                <div>
                  <span className="subscribe-tag">Get In Touch</span>
                  <h3 className="subscribe-heading-white">SUBSCRIBE OUR</h3>
                  <h3 className="subscribe-heading-outline">NEWSLETTER</h3>
                </div>

                <div className="subscribe-form-box">
                  {subscribed ? (
                    <div style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "1rem" }}>
                      Thank you for subscribing to Mercury Infotech!
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        className="subscribe-input-field"
                        placeholder="Type Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="subscribe-submit-btn">
                        CONNECT
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* 2. Main Footer Columns */}
      <div className="container">
        <div className="footer-main-columns">
          <div className="grid grid-4">
            {/* Col 1: Brand & Narrative */}
            <div className="footer-col-widget">
              <Link to="/" className="footer-brand-logo">
                <img src="/assets/logo/logo.png?v=2" alt="Mercury Infotech" />
              </Link>
              <p className="footer-about-blurb">
                {siteContent.aboutShort ||
                  "Empowering businesses with modern technology and result-driven digital solutions built for today's competitive market."}
              </p>
            </div>

            {/* Col 2: Our Services */}
            <div className="footer-col-widget">
              <h4>Our Services</h4>
              <ul className="footer-nav-list">
                {footerServiceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="footer-col-widget">
              <h4>Quick Links</h4>
              <ul className="footer-nav-list">
                {footerQuickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contacts */}
            <div className="footer-col-widget">
              <h4>Contacts</h4>
              <div className="footer-contact-entry">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${siteInfo.emails[0]}`}>{siteInfo.emails[0]}</a>
              </div>

              <div className="footer-contact-entry">
                <i className="fas fa-map-marker-alt"></i>
                <span>{siteInfo.address.full}</span>
              </div>

              {/* Social icons row below address */}
              <div className="footer-social-row">
                <a
                  href={siteInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={siteInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href={siteInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom Sub-Bar */}
        <div className="footer-sub-bar">
          <div className="footer-sub-bar-inner">
            <div className="footer-sub-copy">
              <p style={{ color: "#B5B4BD", margin: 0 }}>
                Copyright {currentYear} | Design By{" "}
                <strong style={{ color: "var(--color-white)" }}>Mercury Infotech</strong>
              </p>
              <small style={{ color: "#8E8D96", display: "block", marginTop: "4px" }}>
                ICO Security Number: {siteInfo.icoNumber}
              </small>
            </div>

            <ul className="footer-legal-inline">
              {footerLegalLinks.map((legal) => (
                <li key={legal.path}>
                  <Link to={legal.path}>{legal.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
