// mainpage.js
import React from 'react';
import '../styles/MainPage.css'; // Stil dosyası
import logo from '../assets/logo.png';

const mainpage = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={logo} alt="WFP Logo" className="logo-image" />
                    <h1 className="site-title">BUNK Donation Platform</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#who-we-are">Who we are</a></li>
                        <li><a href="#our-work">Our work</a></li>
                        <li><a href="#where-we-work">Where we work</a></li>
                        <li><a href="#get-involved">Get involved</a></li>
                    </ul>
                    <button className="donate-button">DONATE</button>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h2>Reach out to People</h2>
                        <h3>We build bridges between you and people with BUNK!</h3>
                        <button className="donate-now-button">DONATE NOW</button>
                    </div>

                </section>
            </main>
            <footer>
                <p> 2024 CENG 318 Group 9</p>
            </footer>

        </div>
    );
};


export default mainpage;
