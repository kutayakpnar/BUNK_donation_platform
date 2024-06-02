
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/donate_page.css";
import DonationCard from '../components/donation_card';
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig.js';
import water_icon from "../assets/water.png";
import food_icon from "../assets/healthy-food.png";
import clothing_icon from "../assets/fashion.png";
import medicine_icon from "../assets/drugs.png";
import tent_icon from "../assets/camping.png";
import { useLoading } from '../loading_context.js';

function DonatePage() {
  const [donations, setDonations] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const getUnitPrice = (item) => {
    const unitPrices = {
      clothing: 200,
      food: 100,
      medicine: 300,
      tent: 1000,
      water: 50
    };
    return unitPrices[item] || 0;
  };

  const getIcon = (item) => {
    const icons = {
      clothing: clothing_icon,
      food: food_icon,
      water: water_icon,
      medicine: medicine_icon, 
      tent: tent_icon,
    };
    return icons[item] || null;
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

    const transformedData = items.map(item => ({
      header: item.charAt(0).toUpperCase() + item.slice(1),
      unit_price: getUnitPrice(item),
      icon: getIcon(item),
      data: results[item]
    }));

    setDummy(transformedData);
  };

  useEffect(() => {
    showLoading();
    getData().catch(error => console.error(error)).finally(() => {hideLoading()});
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

  

      const checkDonationLimits = async () => {
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
              return false;
            }
    
            // Update the database with the new value
            
          }
        }
      return true;};   

  const handleDonateButtonClick = async () => {
    setError("");
    
    const totalAmount = calculate_total();
    if(totalAmount > 0){
      if (await checkDonationLimits()){
        console.log("vl", checkDonationLimits());
      navigate("/payment", { state: { total: totalAmount, donations } });}
    }
  };

  const removeDonation = (header, city) => {
    setDonations(prevDonations => prevDonations.filter(donation => {
      return !(donation.header === header && donation.city === city);
    }));
  };

  return (
    <div className='donate_page_div'>
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
              <div className='donation_summary_content_row_delete_button background_contain' onClick={() => {removeDonation(donation.header, donation.city)}}></div>
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
