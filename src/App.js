import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainpage';
import './App.css'; // Stil dosyası
import Header from './components/header';
import ContactPage from './pages/contact_page';
import NotFoundPage from './pages/not_found_page';
import MainMarginBox from "./components/main_margin_box";
import TeamPage from './pages/team_page';
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Header />
      <MainMarginBox />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/who-we-are" element={<TeamPage />} />
        {/* Diğer yollar buraya eklenebilir */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
