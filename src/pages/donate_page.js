import React, { useState } from 'react';
import "../styles/donate_page.css";
import DonationCard from '../components/donation_card';

function DonatePage() {
  // Dummy data that will from backend
  const dummy = 
  [
    {
      header: "Clothing",
      unit_price: 200,
      icon: null,
      data: [
        {name: "istanbul", value: 20},
        {name: "Ankara", value: 50},
        {name: "İzmir", value: 80},
      ]
    },
    {
      header: "Food",
      unit_price: 100,
      icon: null,
      data: [
        {name: "istanbul", value: 90},
        {name: "Ankara", value: 10},
        {name: "İzmir", value: 60},
      ]
    },
    {
      header: "Tent",
      unit_price: 1000,
      icon: null,
      data: [
        {name: "istanbul", value: 40},
        {name: "Ankara", value: 50},
        {name: "İzmir", value: 80},
      ]
    },
    {
      header: "Water",
      unit_price: 50,
      icon: null,
      data: [
        {name: "istanbul", value: 70},
        {name: "Ankara", value: 80},
        {name: "İzmir", value: 80},
      ]
    },
    {
      header: "Bandage/Medicine",
      unit_price: 300,
      icon: null,
      data: [
        {name: "istanbul", value: 10},
        {name: "Ankara", value: 20},
        {name: "İzmir", value: 15},
      ]
    },
  ];

  const [donations, setDonations] = useState([]);

  const handle_donation = (header, amount, city) => {
    setDonations(prevDonations => {
      const filteredDonations = prevDonations.filter(d => !(d.header === header && d.city === city));
      if (amount > 0) {
        // Miktar 0'dan büyükse, güncellenmiş bağışı listeye ekleyin.
        return [...filteredDonations, { header, amount, city }];
      }
      // Eğer miktar 0 ise, yalnızca filtrelenmiş listeyi dön.
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

  return (
    <div className='donate_page_div page_div'>
      <div className='donation_options'>
        {dummy.map((data, key) => (
          <DonationCard data={data} key={key} handle_donation={handle_donation} donations={donations}/>
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
        <div className='donate_button'>Donate</div>
      </div>
    </div>
  );
}

export default DonatePage;