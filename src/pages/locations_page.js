import React from 'react';
import '../styles/locations_page.css';

const locations = [
    { city: 'ISTANBUL', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570685.448522801!2d26.901709300900084!3d39.74537816048785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab989bd884fa3%3A0xd72d1865a1c4cccd!2zVC5DLiDEsHN0YW5idWwgQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNpIEJhxZ9rYW5sxLHEn8Sx!5e0!3m2!1str!2str!4v1716037438894!5m2!1str!2str' },
    { city: 'ANKARA', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6293382.391073255!2d22.935402763327893!3d39.62854081277737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34faaf5d18b4b%3A0xd582d9ee7ce19d53!2zQW5rYXJhIELDvHnDvGvFn2VoaXIgQmVsZWRpeWVzaQ!5e0!3m2!1str!2str!4v1716037510712!5m2!1str!2str' },
    { city: 'IZMIR', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200101.22743955!2d26.76998439099803!3d38.40492032450827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e248cfbe7f%3A0xe6e10fc9440c9bb4!2zxLB6bWlyIELDvHnDvGvFn2VoaXIgQmVsZWRpeWVzaQ!5e0!3m2!1str!2str!4v1716037576719!5m2!1str!2str' },
    { city: 'ADANA', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51143.19246257395!2d35.2533465383097!3d37.02433057762859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f683e8b40f1%3A0x681869b620ec166c!2zQWRhbmEgQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNp!5e0!3m2!1str!2str!4v1716037636617!5m2!1str!2str' },
    { city: 'TRABZON', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8769760137934!2d39.71346997615321!3d41.00606581956101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c497f76dd5b%3A0x461e9faebc508ed2!2zVHJhYnpvbiBCw7x5w7xrxZ9laGlyIEJlbGVkaXllc2k!5e0!3m2!1str!2str!4v1716037696029!5m2!1str!2str' },
    { city: 'VAN', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49965.66215113153!2d43.333083272083115!3d38.4910134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4012704c01fb34c1%3A0x13c4174ece939f0b!2zVC5DLiBWYW4gQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNp!5e0!3m2!1str!2str!4v1716037755025!5m2!1str!2str' }
];

const LocationsPage = () => {
    return (
        <div className="locations-page">
            <h2>BUNK Stock Locations</h2>
            <div className="locations-container">
                {locations.map((location, index) => (
                    <div className="location-box" key={index}>
                        <h3>{location.city}</h3>
                        <iframe 
                            src={location.mapUrl}
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
            <p className='stock-locations-info'>Stock locations have been determined to deliver aid as quickly as possible in case of disasters
                 and emergencies. We will create more stock locations in the near future!</p>
        </div>
    );
};

export default LocationsPage;
