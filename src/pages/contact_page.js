import "../styles/contact_page.css";

const ContactPage = () => {
    return (
        <div className="contact-page page_div">
            <div className="contact-header">
                <h2 className="content-contact">Contact BUNK Team!</h2>
            </div>
            <div className="content-container">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10790.153834211482!2d26.64363179162808!3d38.32484937497093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb90f700865691%3A0x122e1226ac0661e0!2zxLBZVEUgQmlsZ2lzYXlhciBNw7xoZW5kaXNsacSfaSBCw7Zsw7xtw7w!5e0!3m2!1str!2str!4v1716032620808!5m2!1str!2str"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Address:</strong> İYTE Bilgisayar Mühendisliği Bölümü
                        Gülbahçe, İzmir YTE, 35433 Barbaros/Urla/İzmir</p>
                    <p><strong>Email:</strong> ceng318group9@gmail.com</p>
                    <p><strong>Phone:</strong> +90 232 750 7860-7882</p>
                    <p><strong>Fax:</strong>+90 232 750 7862</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
