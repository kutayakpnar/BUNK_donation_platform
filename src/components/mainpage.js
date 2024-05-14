import React from 'react';
import '../styles/MainPage.css'; // Stil dosyası
import logo from '../assets/logo.png';

const MainPage = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={logo} alt="WFP Logo" className="logo-image" />
                    <h1 className="site-title">BUNK Donation Platform</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#who-we-are">Our Team</a></li>
                        <li><a href="#our-work">Stock</a></li>
                        <li><a href="#where-we-work">Locations</a></li>
                        <li><a href="#get-involved">Contact</a></li>
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

                <section className="donation-info">
                    <h2>Your donation will help save lives with BUNK!</h2>
                    <p>As soon as you complete your donation, your gift will start its journey. First your money will be turned into food, and then sent to one of the over 120 countries where people are most vulnerable. Every single day, WFP has 6,500 trucks, 20 ships and nearly 140 planes ready to deliver the food you send. Because you can't go there and hand out the food yourself, we do it for you.</p>
                    <p>Please send food to save a life today and join the fight against hunger.</p>
                </section>

                <section className="give-food-now">
                    <h2>GIVE FOOD NOW</h2>
                    <p>Make a gift today to help send lifesaving food to families in need.</p>
                    <button className="donate-today-button">DONATE TODAY</button>
                </section>

                <section className="end-hunger">
                    <h2>Together we can end hunger forever!</h2>
                    <p>Hunger is still one the biggest - and most solvable - problems in the world. We have already made incredible progress: there are 300 million fewer hungry people now than in the 90's. It is possible to end hunger. WFP is working for that every second of the day, having reached over 160 Million people with lifesaving and lifechanging food assistance in 2022 alone and implementing programmes that tackle the causes of hunger. But this work depends on the support of people like you.</p>
                </section>
            </main>
            <footer>
                <p> 2024 CENG 318 Group 9</p>
                <p> Mehmet Kutay Akpınar</p>
                <p> Ünal Dalkılıç</p>
                <p> Basri Erdoğan</p>
                <p> Niyazi Alperen Tuğan</p>
            </footer>
        </div>
    );
};

export default MainPage;
