import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaShower, FaLock, FaSnowflake, FaUtensils, FaTv, FaGraduationCap, FaBus, FaHotTub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Rooms.css';

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roomsData = [
    {
      id: 1,
      name: "Single Occupancy Room",
      type: "single",
      price: "On Demand",
      capacity: 1,
      description: "Our premium single occupancy rooms offer complete privacy and comfort for students who prefer their own space. Each room includes a comfortable bed, study desk, wardrobe, and attached bathroom.",
      amenities: ["Free Wi-Fi", "Personal Study Desk", "Attached Bathroom", "Wardrobe", "Air Conditioning", "Geyser"],
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Double Sharing Room",
      type: "double",
      price: "₹1,70,000/year",
      capacity: 2,
      description: "Our double sharing rooms are perfect for students who want to balance social interaction with affordability. Each student gets their own bed, study desk, and wardrobe section in a spacious shared room.",
      amenities: ["Free Wi-Fi", "Individual Study Desks", "Shared Bathroom", "Individual Wardrobes", "Air Conditioning", "Geyser"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Triple Sharing Room",
      type: "triple",
      price: "₹1,50,000/year",
      capacity: 3,
      description: "Our most economical option, triple sharing rooms offer a vibrant community atmosphere. Each student has their own dedicated bed, study area, and storage space while sharing common facilities.",
      amenities: ["Free Wi-Fi", "Individual Study Areas", "Shared Bathroom", "Individual Storage", "Air Conditioning", "Geyser"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filteredRooms = activeFilter === 'all' 
    ? roomsData 
    : roomsData.filter(room => room.type === activeFilter);

  const getAmenityIcon = (amenity) => {
    if (amenity.includes('Wi-Fi')) return <FaWifi />;
    if (amenity.includes('Study')) return <FaGraduationCap />;
    if (amenity.includes('Bathroom')) return <FaShower />;
    if (amenity.includes('Wardrobe') || amenity.includes('Storage')) return <FaLock />;
    if (amenity.includes('Air')) return <FaSnowflake />;
    if (amenity.includes('Geyser')) return <FaHotTub />;
    return <FaUtensils />;
  };

  return (
    <div className="rooms-page">
      <section className="rooms-hero">
        <div className="rooms-hero-overlay"></div>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Student Accommodation Options
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comfortable, secure, and study-friendly rooms for college students in Jaipur
          </motion.p>
        </div>
      </section>

      <section className="rooms-content container">
        <div className="rooms-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Rooms
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'single' ? 'active' : ''}`}
            onClick={() => setActiveFilter('single')}
          >
            Single Occupancy
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'double' ? 'active' : ''}`}
            onClick={() => setActiveFilter('double')}
          >
            Double Sharing
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'triple' ? 'active' : ''}`}
            onClick={() => setActiveFilter('triple')}
          >
            Triple Sharing
          </button>
        </div>
        
        <div className="rooms-grid">
          {filteredRooms.map((room, index) => (
            <motion.div 
              key={room.id} 
              className="room-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="room-image" style={{ backgroundImage: `url(${room.image})` }}>
                <div className="room-price">{room.price}</div>
              </div>
              <div className="room-details">
                <h3>{room.name}</h3>
                <p className="room-capacity">Occupancy: {room.capacity} {room.capacity === 1 ? 'Student' : 'Students'}</p>
                <p className="room-description">{room.description}</p>
                <div className="room-amenities">
                  {room.amenities.slice(0, 6).map((amenity, i) => (
                    <div key={i} className="amenity">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <Link to="/booking" className="book-now-btn">Book Now</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rooms-info container">
        <div className="info-grid">
          <div className="info-card">
            <h3>Hostel Timings</h3>
            <p><strong>Main Gate Hours:</strong> Open 24/7 with security</p>
            <p><strong>Visitor Hours:</strong> 9:00 AM to 8:00 PM</p>
            <p><strong>Mess Timings:</strong></p>
            <p>• Breakfast: 7:00 AM - 9:00 AM</p>
            <p>• Lunch: 12:00 PM - 2:00 PM</p>
            <p>• Dinner: 7:00 PM - 9:00 PM</p>
          </div>
          <div className="info-card">
            <h3>Hostel Policies</h3>
            <p>• Strict adherence to college rules and regulations</p>
            <p>• Quiet hours from 10:00 PM to 6:00 AM</p>
            <p>• No unauthorized guests allowed in rooms</p>
            <p>• Substance-free environment (no alcohol/smoking)</p>
            <p>• Regular room inspections for cleanliness</p>
          </div>
          <div className="info-card">
            <h3>Included Services</h3>
            <p>• Free Wi-Fi throughout the hostel</p>
            <p>• Daily housekeeping for common areas</p>
            <p>• College transportation (pick-up & drop)</p>
            <p>• Complimentary Rajasthan tour once per semester</p>
            <p>• 24/7 security and CCTV surveillance</p>
            <p>• Laundry facilities (additional charges may apply)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms; 