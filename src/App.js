import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage';
import './App.css'; // Stil dosyası

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Diğer yollar buraya eklenebilir */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
