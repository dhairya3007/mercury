import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function NavigationPageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstMount = useRef(true);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    // Skip on first mount (initial visit/refresh is handled by Preloader)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPath.current = location.pathname;
      return;
    }

    // Trigger loader when switching between pages
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 2050);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return <PageLoader loading={loading} />;
}
