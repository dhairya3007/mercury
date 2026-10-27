import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { mainNavLinks } from "../../data/navigation";
import { siteInfo } from "../../data/siteContent";

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`mobile-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`mobile-menu-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {/* Fixed Header */}
        <div className="mobile-drawer-header">
          <Link to="/" onClick={onClose} className="mobile-drawer-logo">
            <img src="/assets/logo/logo.png?v=2" alt="Mercury Infotech" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="mobile-drawer-close-btn"
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Scrollable Middle Body (Scrollbar hidden) */}
        <div className="mobile-drawer-body">
          <nav className="mobile-drawer-nav" aria-label="Mobile Menu Links">
            <ul className="mobile-nav-list">
              {mainNavLinks.map((link) => (
                <li key={link.path} className="mobile-nav-item">
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    <span className="mobile-nav-text">{link.label}</span>
                    <i
                      className="fas fa-chevron-right mobile-nav-arrow"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Fixed Footer */}
        <div className="mobile-drawer-footer">
          <div className="mobile-social-bar">
            {siteInfo.social.facebook && (
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="mobile-social-btn"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {siteInfo.social.instagram && (
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mobile-social-btn"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {siteInfo.social.linkedin && (
              <a
                href={siteInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="mobile-social-btn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
          <span className="mobile-drawer-copyright">
            © {siteInfo.companyName}
          </span>
        </div>
      </aside>
    </>
  );
}
