// LoadingScreen.js
import React from 'react';
import { useLoading } from '../loading_context';
import "../styles/loading_screen.css"; // CSS dosyasını import ediyoruz

function LoadingScreen() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-circle"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
