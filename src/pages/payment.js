import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/payment_page.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig.js';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentDetails, setPaymentDetails] = useState({
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: "",
        amount: location.state?.total || '0'
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        if (paymentSuccess) {
            setTimeout(() => {
                navigate('/'); // Change this to the path of your main page
            }, 5000); // Redirects after 5 seconds
        }
    }, [paymentSuccess, navigate]);

    const handleChange = (e) => {
        setPaymentDetails({...paymentDetails, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (paymentDetails.name && paymentDetails.cardNumber.length === 16 && paymentDetails.cvv.length === 3) {
            console.log("Payment Details: ", paymentDetails);
            await updateDatabase();
            await sendDonationToFirebase(paymentDetails.name, paymentDetails.amount);
            setPaymentSuccess(true);
        } else {
            alert('Please fill in valid payment details.');
        }
    };
    const sendDonationToFirebase = async (name, amount) => {
        try {
            await addDoc(collection(db, "donations"), {
                name,
                amount,
                date: new Date()
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const updateDatabase = async () => {
        const donations = location.state?.donations || [];
        const db = (await import('../firebaseConfig')).db;
        const { doc, getDoc, updateDoc } = (await import('firebase/firestore'));

        for (const donation of donations) {
            const { header, amount, city } = donation;
            const item = header.toLowerCase();

            const cityDocRef = doc(db, 'locations', city);
            const cityDocSnap = await getDoc(cityDocRef);

            if (cityDocSnap.exists()) {
                const currentData = cityDocSnap.data().items[item];
                const updatedCurrent = currentData.current + amount;

                if (updatedCurrent <= currentData.max) {
                    await updateDoc(cityDocRef, {
                        [`items.${item}.current`]: updatedCurrent
                    });
                }
            }
        }
    };

    if (paymentSuccess) {
        return (
            <div className="payment_page">
                <div className="payment_container">
                    <div className="success_message">
                        <div className="checkmark_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08 0L7 8.99l-1.99-2a.75.75 0 1 0-1.08 1.08l2.5 2.5a.75.75 0 0 0 1.08 0l4.5-4.5a.75.75 0 0 0 0-1.08z"/>
                            </svg>
                        </div>
                        <h1>Your payment was successful</h1>
                        <p>Thank you for your payment. We will be in contact with more details shortly.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="payment_page">
            <div className="payment_container">
                <h1>Donation Payment</h1>
                <p>You can easily make your payment with BUNK assurance by entering your credit card information.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name Surname" value={paymentDetails.name} onChange={handleChange} />
                    <input type="text" name="cardNumber" placeholder="Card Number" value={paymentDetails.cardNumber} onChange={handleChange} />
                    <div className="expiry_cvv">
                        <select name="month" onChange={handleChange} value={paymentDetails.month}>
                            <option value="">Month</option>
                            {Array.from({ length: 12 }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                        </select>
                        <select name="year" onChange={handleChange} value={paymentDetails.year}>
                            <option value="">Year</option>
                            {Array.from({ length: 12 }, (_, i) => <option key={i} value={new Date().getFullYear() + i}>{new Date().getFullYear() + i}</option>)}
                        </select>
                        <input type="text" name="cvv" placeholder="CVV2" value={paymentDetails.cvv} onChange={handleChange} />
                    </div>
                    <div className="amount_input">
                        <input type="text" name="amount" placeholder="Tutar" value={`${paymentDetails.amount} TL`} onChange={handleChange} readOnly />
                    </div>
                    <button className="button2" type="submit">Donate</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentPage;

