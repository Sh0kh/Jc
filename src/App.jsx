import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // SEO
import "./App.css";
import "./Style/Media.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          {/* 🔥 SEO Оптимизация */}
          <title>ГНБ и Проколы под Землю | Профессиональная Прокладка Труб</title>
          <meta
            name="description"
            content="ГНБ, прокол, бурение и горизонтально-направленное бурение (ГНБ прокол). Профессиональные услуги по проколу бурению, yer teshish, yer qazish, yer ostidan teshib o'tish. GNB Prokol - эксперты по подземным работам!"
          />
          <meta
            name="keywords"
            content="ГНБ, прокол, бурение, ГНБ прокол, прокол бурение, ГНБ бурение, yer teshish, yer qazish, yer ostidan teshib o'tish, gnb prokol"
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
          <Route path="/" element={<AppLayout />}>
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
