import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Добавлено для SEO
import './Style/Media.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          {/* Основные мета-теги для SEO */}
          <title>ГНБ и Проколы под Землю | Профессиональная Прокладка Труб</title>
          <meta
            name="description"
            content="ГНБ и проколы под землю с гарантией качества. Прокладка труб, земляные работы и коммуникации от профессионалов. Лучшие услуги ГНБ в Узбекистане."
          />
          <meta
            name="keywords"
            content="ГНБ, проколы под землю, горизонтально-направленное бурение, земляные работы, трубы, прокладка труб"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="ГНБ и Проколы под Землю | GNB Prokol" />
          <meta
            property="og:description"
            content="Горизонтально-направленное бурение (ГНБ) и проколы под землю с гарантией. Прокладка труб, земляные работы и коммуникации."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gnb-prokol.uz" />
          <meta property="og:image" content="https://gnb-prokol.uz/preview-image.jpg" />
          <link rel="alternate" hreflang="ru" href="https://gnb-prokol.uz" />
          <link rel="alternate" hreflang="uz" href="https://gnb-prokol.uz" />
          <link rel="alternate" hreflang="en" href="https://gnb-prokol.uz" />
        </Helmet>

        <Routes>
          {/* hehe */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<AppLayout />}>
            {/* <Route
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
            </Route> */}
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
