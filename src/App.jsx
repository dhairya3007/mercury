import React from "react";
import { BrowserRouter } from "react-router-dom";
import { usePreloader } from "./hooks/usePreloader";
import Preloader from "./components/common/Preloader";
import NavigationPageLoader from "./components/common/NavigationPageLoader";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const loading = usePreloader(2200);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* 1. Initial Visit / Refresh: Path Draw & Reveal Preloader */}
      <Preloader loading={loading} />

      {/* 2. Page Navigation: Style 3 Ray Pulse Static Logo Loader */}
      <NavigationPageLoader />

      <AppRoutes />
    </BrowserRouter>
  );
}
