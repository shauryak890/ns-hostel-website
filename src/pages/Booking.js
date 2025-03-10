import React from 'react';
import { motion } from 'framer-motion';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking-page">
      <motion.div 
        className="booking-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Book Your Stay</h1>
        <p>Fill out the form below to request your accommodation at NS Hostel</p>
      </motion.div>

      <motion.div 
        className="google-form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <iframe
          title="Booking Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeY-dRGyUU_T6c0FjzHG-qFoAvgYHmqZqk5EUd-DqvfO0f-7g/viewform?embedded=true"
          width="100%"
          height="1300"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </motion.div>
    </div>
  );
};

export default Booking; 