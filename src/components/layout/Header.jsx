import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header-area ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="site-logo">
              <img src="/assets/logo/logo.png?v=2" alt="Mercury Infotech" />
            </Link>

            <Navigation />

            <div className="header-right">
              <button
                className={`mobile-toggle-btn ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
