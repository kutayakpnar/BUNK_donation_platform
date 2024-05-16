import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../styles/header.css";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={logo} alt="WFP Logo" className="logo-image" /></Link>
                <h1 className="site-title">BUNK Donation Platform</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/who-we-are"><li>Our Team</li></Link>
                    <Link to="/our-work"><li>Stock</li></Link>
                    <Link to="/where-we-work"><li>Locations</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/donate"><li className='donate-button'>Donate</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
