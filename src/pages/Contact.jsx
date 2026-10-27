import React, { useState } from "react";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { siteContent, siteInfo } from "../data/siteContent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="contact-page">
      <Breadcrumb
        title="Contact Us"
        subtitle="Get In Touch With Mercury Infotech"
        trails={[{ label: "Contact Us" }]}
      />

      <section className="contact-page-section">
        <div className="container">
          {/* 4 Info Cards */}
          <div className="contact-info-cards-grid">
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="icon-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Office Location</h4>
              <p>{siteInfo.address.full}</p>
            </motion.div>

            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="icon-box">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h4>Phone Number</h4>
              <p>
                <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
              </p>
              <span style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginTop: "4px" }}>
                WhatsApp Available
              </span>
            </motion.div>

            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Official Email</h4>
              <p>
                <a href={`mailto:${siteInfo.emails[0]}`}>{siteInfo.emails[0]}</a>
              </p>
              <p>
                <a href={`mailto:${siteInfo.emails[1]}`}>{siteInfo.emails[1]}</a>
              </p>
            </motion.div>

            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="icon-box">
                <i className="fas fa-user-shield"></i>
              </div>
              <h4>Business & ICO</h4>
              <p>{siteContent.contact.businessHours}</p>
              <span style={{ fontSize: "0.82rem", color: "#888", marginTop: "4px" }}>
                ICO Ref: <strong>{siteInfo.icoNumber}</strong>
              </span>
            </motion.div>
          </div>

          {/* Form and Map Grid */}
          <div className="contact-main-grid">
            {/* Form Container */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-header">
                <span className="sub-title">LET'S CONNECT</span>
                <h3 className="section-title">Send Us A Message</h3>
              </div>

              {submitted ? (
                <div className="form-success-alert">
                  Thank you for reaching out! Your message has been received. A Mercury Infotech specialist will get in touch with you promptly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label style={{ display: "block", color: "var(--color-text-secondary)", marginBottom: "8px", fontSize: "0.9rem" }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-2" style={{ gap: "20px" }}>
                    <div className="form-group">
                      <label style={{ display: "block", color: "var(--color-text-secondary)", marginBottom: "8px", fontSize: "0.9rem" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ display: "block", color: "var(--color-text-secondary)", marginBottom: "8px", fontSize: "0.9rem" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+44 7000 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ display: "block", color: "var(--color-text-secondary)", marginBottom: "8px", fontSize: "0.9rem" }}>
                      Service of Interest
                    </label>
                    <select
                      className="form-control"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design & Branding</option>
                      <option value="CRM Solutions">CRM & Automation Solutions</option>
                      <option value="Appointment Scheduling">Appointment Scheduling System</option>
                      <option value="Digital NFC Card">Digital NFC Card & QR Code</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ display: "block", color: "var(--color-text-secondary)", marginBottom: "8px", fontSize: "0.9rem" }}>
                      Your Message *
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Describe your project, timeline, or any specific questions..."
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="cmn-btn" style={{ width: "100%", textAlign: "center" }}>
                    <span>Send Message</span>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Container */}
            <motion.div
              className="contact-map-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                title="Mercury Infotech Location"
                src={siteContent.contact.mapEmbedUrl}
                loading="lazy"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
