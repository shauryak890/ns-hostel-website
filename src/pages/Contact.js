import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // In a real application, you would send this data to a server
      console.log({ name, email, subject, message });
      setIsSubmitted(true);

      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or concerns</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>Main Office: +91 9799605406</p>
            <p>Warden: +91 9784674760</p>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <h3>WhatsApp</h3>
            <p>Hostel Admin: +91 9799605406</p>
            <p>Available 24/7 for emergencies</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>nshostel@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaClock className="contact-icon" />
            <h3>Office Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </motion.div>

        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="address-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>N S Hostel and PG</p>
            <p>Dahmi Kalan</p>
            <p>Jaipur, Rajasthan 303007</p>
          </div>

          <div className="map-container">
            <iframe
              title="Hostel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.069786922694!2d75.56754527489241!3d26.837732563309718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c49643c518c1d%3A0xc7c2f014303317ec!2sN%20S%20Hostel%20and%20PG!5e0!3m2!1sen!2sin!4v1741582925533!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 