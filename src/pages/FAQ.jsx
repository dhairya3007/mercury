import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { faqData } from "../data/faq";
import { siteInfo } from "../data/siteContent";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("progress");
  const [openItems, setOpenItems] = useState({ p1: true });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.question) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", question: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const currentQuestions = faqData.items[activeCategory] || [];

  return (
    <div className="faq-page">
      <Breadcrumb
        title="Frequently Asked Questions"
        subtitle="Common Inquiries About Our Web, CRM & Design Services"
        trails={[{ label: "FAQ" }]}
      />

      <section className="faq-page-section">
        <div className="container">
          {/* Category Tabs */}
          <div className="faq-tabs-nav">
            {faqData.categories.map((cat) => (
              <button
                key={cat.id}
                className={`faq-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="faq-layout-grid">
            {/* Accordion Questions Column */}
            <div className="faq-accordion-column">
              <div className="accordion-wrapper">
                {currentQuestions.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <motion.div
                      key={item.id}
                      className={`accordion-item ${isOpen ? "active" : ""}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        className="accordion-trigger"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ color: "var(--color-primary)", fontWeight: 700, fontSize: "0.95rem" }}>
                            {item.number}
                          </span>
                          <span>{item.question}</span>
                        </span>
                        <span className="accordion-icon">
                          <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="accordion-content">
                              <p>{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Ask Question Form */}
            <aside>
              <div className="faq-sidebar-box">
                <h4 className="faq-sidebar-title">Have Another Question?</h4>
                <p className="faq-sidebar-subtitle">
                  Can't find the answer you're looking for? Send us your query and our team will get back to you shortly.
                </p>

                {formSubmitted ? (
                  <div className="form-success-alert">
                    Thank you! Your question has been submitted. We'll reply within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Type your question here..."
                        value={formData.question}
                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" className="cmn-btn submit-btn">
                      <span>Submit Question</span>
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                    </button>
                  </form>
                )}

                <div className="faq-emergency-callout">
                  <div className="icon-wrap">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="call-info">
                    <span>Call Us Directly</span>
                    <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
