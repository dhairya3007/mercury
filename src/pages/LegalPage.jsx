import React from "react";
import { motion } from "motion/react";
import Breadcrumb from "../components/common/Breadcrumb";
import { cookiePolicyData, privacyPolicyData, termsOfUseData } from "../data/legalPages";
import { siteInfo } from "../data/siteContent";

export default function LegalPage({ type = "privacy" }) {
  let docData;
  let pageTitle;

  if (type === "cookie") {
    docData = cookiePolicyData;
    pageTitle = "Cookie Policy";
  } else if (type === "terms") {
    docData = termsOfUseData;
    pageTitle = "Terms and Conditions";
  } else {
    docData = privacyPolicyData;
    pageTitle = "Privacy Policy";
  }

  return (
    <div className="legal-page">
      <Breadcrumb
        title={pageTitle}
        subtitle="Mercury Infotech Ltd Compliance & Legal Documentation"
        trails={[{ label: pageTitle }]}
      />

      <section className="legal-page-section">
        <div className="container">
          <motion.article
            className="legal-document-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta Bar */}
            <div className="legal-meta-bar">
              <div className="legal-meta-item">
                <strong>Policy Owner:</strong>
                <span>{docData.company || docData.policyOwner || "Mercury Infotech Ltd"}</span>
              </div>
              <div className="legal-meta-item">
                <strong>Jurisdiction:</strong>
                <span>England &amp; Wales</span>
              </div>
              <div className="legal-meta-item">
                <strong>ICO Registration:</strong>
                <span>{siteInfo.icoNumber}</span>
              </div>
              {docData.lastUpdated && (
                <div className="legal-meta-item">
                  <strong>Last Updated:</strong>
                  <span>{docData.lastUpdated}</span>
                </div>
              )}
            </div>

            {/* Applicable Legislation Badges */}
            <div className="legal-badge-list">
              <span className="legal-badge">UK GDPR Compliant</span>
              <span className="legal-badge">Data Protection Act 2018</span>
              <span className="legal-badge">PECR Compliant</span>
              <span className="legal-badge">Data (Use &amp; Access) Act 2025</span>
              <span className="legal-badge">ICO Certified ({siteInfo.icoNumber})</span>
            </div>

            {/* Document Content Sections */}
            {docData.sections &&
              docData.sections.map((section, sIdx) => (
                <div key={section.id || sIdx} className="legal-section-block">
                  <h3 className="legal-section-title">{section.title}</h3>

                  {/* Paragraphs */}
                  {(section.content || section.paragraphs || []).map((para, pIdx) => (
                    <p key={pIdx} className="legal-content-paragraph">
                      {para}
                    </p>
                  ))}

                  {/* Bulleted Lists if present */}
                  {section.list && (
                    <ul className="legal-bullet-list">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Missing Table (e.g., Cookie Categories Table in Section 5) */}
                  {section.table && (
                    <div className="legal-table-responsive">
                      <table className="legal-data-table">
                        <thead>
                          <tr>
                            <th>Cookie Type</th>
                            <th>Purpose</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td>
                                <strong>{row.type}</strong>
                              </td>
                              <td>{row.purpose}</td>
                              <td>
                                <span className="legal-badge" style={{ margin: 0 }}>
                                  {row.duration}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Subsections if present */}
                  {section.subsections &&
                    section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="legal-subsection-block">
                        <h4 className="legal-subsection-title">{sub.name}</h4>
                        <p className="legal-subsection-details">{sub.details}</p>
                        {sub.basis && (
                          <span className="legal-subsection-basis">
                            <strong>Legal Basis:</strong> {sub.basis}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              ))}

            {/* Legal Contact Box */}
            <div className="legal-contact-box">
              <h5>Mercury Infotech Ltd &mdash; Legal &amp; Compliance Inquiries</h5>
              <p>
                If you have any questions regarding our legal documentation, data protection policies, or wish to exercise your statutory data subject rights:
              </p>
              <p>
                <strong>Company:</strong> Mercury Infotech Ltd &bull; <strong>ICO Registration:</strong> {siteInfo.icoNumber}
              </p>
              <p>
                <strong>Registered Office:</strong> {siteInfo.address.full}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteInfo.emails[0]}`}>{siteInfo.emails[0]}</a> &bull;{" "}
                <a href="mailto:imercuryinfotechuk@gmail.com">imercuryinfotechuk@gmail.com</a>
              </p>
              <p>
                <strong>Telephone:</strong>{" "}
                <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
              </p>
              <p>
                <strong>Business Hours:</strong> Monday to Friday, 09:00 AM &ndash; 06:00 PM (UK Time)
              </p>
            </div>

            {/* Formal Document Information Metadata Footer Card */}
            {docData.documentInfo && (
              <div className="legal-doc-info-card">
                <h5>Document Information</h5>
                <div className="legal-doc-info-grid">
                  <div>
                    <strong>Document Title:</strong> {docData.documentInfo.title}
                  </div>
                  <div>
                    <strong>Version:</strong> {docData.documentInfo.version}
                  </div>
                  <div>
                    <strong>Effective Date:</strong> {docData.documentInfo.effectiveDate}
                  </div>
                  <div>
                    <strong>Last Updated:</strong> {docData.documentInfo.lastUpdated}
                  </div>
                  {docData.documentInfo.policyOwner && (
                    <div>
                      <strong>Policy Owner:</strong> {docData.documentInfo.policyOwner}
                    </div>
                  )}
                  {docData.documentInfo.reviewFrequency && (
                    <div style={{ gridColumn: "1 / -1", marginTop: "6px" }}>
                      <strong>Review Frequency:</strong> {docData.documentInfo.reviewFrequency}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>
    </div>
  );
}
