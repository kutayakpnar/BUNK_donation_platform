

// src/locations_page.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig.js';
import '../styles/locations_page.css';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const querySnapshot = await getDocs(collection(db, "locations"));
            const locationsData = querySnapshot.docs.map(doc => doc.data());
            setLocations(locationsData);
        };

        fetchLocations();
    }, []);

    return (
        <div className="locations-page page_div">
            <h2>BUNK Stock Locations</h2>
            <div className="locations-container">
                {locations.map((location, index) => (
                    <div className="location-box" key={index}>
                        <h3>{location.name}</h3>
                        <iframe 
                            src={location.link}
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                ))}
            </div>
            <p className='stock-locations-info'>
                Stock locations have been determined to deliver aid as quickly as possible in case of disasters
                and emergencies. We will create more stock locations in the near future!
            </p>
        </div>
    );
};

export default LocationsPage;

