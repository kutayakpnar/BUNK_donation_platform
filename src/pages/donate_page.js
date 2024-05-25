import React, { useState, useEffect } from 'react';
import "../styles/donate_page.css";
import DonationCard from '../components/donation_card';
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig.js';

function DonatePage() {
  const [donations, setDonations] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [error, setError] = useState("");

  const getUnitPrice = (item) => {
    // Define unit prices for each item here
    const unitPrices = {
      clothing: 200,
      food: 100,
      medicine: 300,
      tent: 1000,
      water: 50
    };
    return unitPrices[item] || 0;
  };

  const getData = async () => {
    const items = ["clothing", "food", "medicine", "tent", "water"];
    const results = {
      clothing: [],
      food: [],
      medicine: [],
      tent: [],
      water: []
    };

    const locationsCollection = collection(db, 'locations');
    const locationsSnapshot = await getDocs(locationsCollection);

    locationsSnapshot.forEach(doc => {
      const cityName = doc.id;
      const data = doc.data().items;

      items.forEach(item => {
        if (data[item]) {
          const current = data[item].current;
          const max = data[item].max;
          const value = ((current / max) * 100).toFixed(2);
          results[item].push({ name: cityName, value });
        }
      });
    });

    // Transform the results into the desired format for dummy data
    const transformedData = items.map(item => ({
      header: item.charAt(0).toUpperCase() + item.slice(1),
      unit_price: getUnitPrice(item),
      icon: null,
      data: results[item]
    }));

    setDummy(transformedData);
  };

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  const handle_donation = (header, amount, city) => {
    setDonations(prevDonations => {
      const filteredDonations = prevDonations.filter(d => !(d.header === header && d.city === city));
      if (amount > 0) {
        return [...filteredDonations, { header, amount, city }];
      }
      return filteredDonations;
    });
  };

  const get_unit_price = (header) => {
    const item = dummy.find(data => data.header === header);
    return item ? item.unit_price : -1;
  };

  const calculate_total = () => {
    return donations.reduce((total, donation) => total + (donation.amount * get_unit_price(donation.header)), 0);
  };

  const updateDatabase = async () => {
    for (const donation of donations) {
      const { header, amount, city } = donation;
      const item = header.toLowerCase(); // Ensure the item name matches the database field

      // Fetch the current data for the city
      const cityDocRef = doc(db, 'locations', city);
      const cityDocSnap = await getDoc(cityDocRef);

      if (cityDocSnap.exists()) {
        const currentData = cityDocSnap.data().items[item];
        const updatedCurrent = currentData.current + amount; // Add the donated amount

        if (updatedCurrent > currentData.max) {
          setError(`Donation exceeds the maximum limit for ${header} in ${city}.`);
          setTimeout(() => setError(""), 5000); // Clear error after 5 seconds
          return;
        }

        // Update the database with the new value
        await updateDoc(cityDocRef, {
          [`items.${item}.current`]: updatedCurrent
        });
      }
    }
  };

  const handleDonateButtonClick = async () => {
    setError(""); // Clear previous error
    await updateDatabase();
    await getData(); // Refetch the data to update the state with the latest values
    setDonations([]); // Clear donations after updating the database
  };

  return (
    <div className='donate_page_div page_div'>
      {error && <div className='error_slide_bar'>{error}</div>}
      <div className='donation_options'>
        {dummy.map((data, key) => (
          <DonationCard data={data} key={key} handle_donation={handle_donation} donations={donations} />
        ))}
      </div>
      <div className='donation_summary_panel'>
        <h3>Donation Summary</h3>
        <div className='donation_summary_content'>
          {donations.map((donation, key) => (
            <div key={key} className='donation_summary_content_row'>
              <p>{`${donation.amount} ${donation.header} (${donation.city})`}</p>
              <h5>{get_unit_price(donation.header) * donation.amount}₺</h5>
            </div>
          ))}
        </div>
        <p>{calculate_total()}₺</p>
        <div className='donate_button' onClick={handleDonateButtonClick}>Donate</div>
      </div>
    </div>
  );
}

export default DonatePage;
