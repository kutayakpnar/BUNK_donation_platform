import React, { useState, useEffect } from 'react';
import "../styles/donation_card.css";

function DonationCard({ data, handle_donation, donations }) {
    const proper_color = (percentage) => {
        if (percentage < 40)
            return "red";
        else if (percentage < 75)
            return "yellow";
        else
            return "green";
    };

    const [amount, setAmount] = useState(0);
    const [city, setCity] = useState(data.data[0].name);

    // Şehir değiştiğinde veya donations güncellendiğinde bağış miktarını kontrol et
    useEffect(() => {
        const existingDonation = donations.find(d => d.header === data.header && d.city === city);
        setAmount(existingDonation ? existingDonation.amount : 0);
    }, [city, donations, data.header]);

    return (
        <div className='donation_card'>
          <div className='donation_card_icon background_contain' style={{backgroundImage: (data.icon) ? `url(${data.icon})` : "none"}}></div>
          <h3>{data.header}</h3>
          <div className='donation_card_order_bar'>
            <input
              placeholder='Amount'
              min={0}
              type='number'
              value={amount}
              onChange={(event) => {
                  const newAmount = parseInt(event.target.value, 10) || 0;
                  setAmount(newAmount);
                  handle_donation(data.header, newAmount, city);
              }}
            />
            <p>{data.unit_price}₺</p>
          </div>
          
          <div className='donation_city_selection_div'>
            <p>Choose a city:</p>
            <select name="city" id={`"donation_${data.header}_city_selection"`}
              value={city}
              onChange={(event) => {
                  const newCity = event.target.value;
                  setCity(newCity);
              }}>
              {data.data.map((d, k) => (
                  <option key={k} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          
          <hr />
          <div className='donation_card_detail_section'>
            <p className='donation_card_detail_section_p'>Show details</p>
            <div className='donation_card_detail_section_content'>
              {data.data.map((d, k) => (
                <div key={k} className='donation_card_detail_section_content_detail_row'>
                    <h5>{d.name}</h5>
                    <div className='donation_card_detail_section_content_detail_row_right'>
                    <div style={{backgroundColor: proper_color(d.value)}}></div>
                    <p>{d.value} %</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}

/* Sample data

clothing: {
    header: "Clothing",
    unit_price: 200,
    icon: null,
    data: [
    {name: "istanbul", value: 20},
    {name: "Ankara", value: 50},
    {name: "İzmir", value: 80},
    ]
},

*/

export default DonationCard;