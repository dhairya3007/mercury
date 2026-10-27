import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Breadcrumb({ title, subtitle, trails = [] }) {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <motion.div
          className="breadcrumb-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{title}</h1>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            {trails.map((item, index) => (
              <React.Fragment key={index}>
                <i className="fas fa-chevron-right"></i>
                {item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
