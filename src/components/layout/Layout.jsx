import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, showNewsletter = true }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="creasoft-wrap">
      {/* Animated line background matching original layout */}
      <div className="line_wrap" aria-hidden="true">
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
      </div>

      <Header />

      <main>{children}</main>

      <Footer showNewsletter={showNewsletter} />

      {/* Scroll to Top floating button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-black)",
          border: "none",
          display: showScrollTop ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 99,
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          transition: "transform 0.2s, background-color 0.2s"
        }}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
