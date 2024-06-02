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
import LocationsPage from './pages/locations_page';
import DonatePage from './pages/donate_page';
import PaymentPage from './pages/payment'

import firebaseApp from './firebaseConfig';
import StockPage from './pages/stock_page';

const App = () => {
  return (
    <Router>
      <div id="root">
        <div className="header">
          <Header />
          <MainMarginBox />
        </div>
        <div className="main-content page_div">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/who-we-are" element={<TeamPage />} />
            <Route path="/where-we-work" element={<LocationsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path='/our-work' element={<StockPage />}/>
            {/* Diğer yollar buraya eklenebilir */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
};

export default App;


