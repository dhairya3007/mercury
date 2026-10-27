import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/common/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Partners from "../pages/Partners";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import LegalPage from "../pages/LegalPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/Home/Privacy" element={<LegalPage type="privacy" />} />

          <Route path="/terms-of-use" element={<LegalPage type="terms" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/Home/Terms" element={<LegalPage type="terms" />} />

          <Route path="/cookie-policy" element={<LegalPage type="cookie" />} />
          <Route path="/cookie" element={<LegalPage type="cookie" />} />
          <Route path="/Home/Cookie" element={<LegalPage type="cookie" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
