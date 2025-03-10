import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './About.css';

const About = () => {
  const rules = [
    "Ragging is strictly prohibited and punishable under law",
    "Smoking, alcohol, and drugs are strictly prohibited",
    "Visitors are allowed only in the reception area during visiting hours (10 AM - 6 PM)",
    "Students must return to hostel by 10:00 PM",
    "Cooking in rooms is not permitted",
    "Keep your rooms and common areas clean",
    "Maintain silence during study hours (8 PM - 11 PM)",
    "No pets allowed in the hostel premises",
    "Prior permission required for overnight stay outside hostel",
    "Electrical appliances (except laptop/mobile chargers) are not allowed",
    "Monthly rent must be paid by the 5th of each month",
    "Proper dress code must be maintained in common areas"
  ];

  return (
    <div className="about-page">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome to NS Hostel</h1>
      </motion.div>

      <div className="about-content">
        <motion.section 
          className="about-section facilities-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <h3>Accommodation</h3>
              <ul>
                <li>Single, double, and triple sharing options</li>
                <li>Fully furnished rooms with study tables</li>
                <li>24/7 hot water supply</li>
                <li>Regular housekeeping services</li>
              </ul>
            </div>
            <div className="facility-item">
              <h3>Security & Safety</h3>
              <ul>
                <li>24/7 security personnel</li>
                <li>CCTV surveillance</li>
                <li>Biometric entry system</li>
                <li>Emergency response system</li>
              </ul>
            </div>
            <div className="facility-item">
              <h3>Common Areas</h3>
              <ul>
                <li>Well-equipped Fitness Center</li>
                <li>Spacious Dining Hall</li>
                <li>TV room with DTH connection</li>
                <li>Volleyball Court</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="about-section rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Hostel Rules and Regulations</h2>
          <div className="rules-grid">
            {rules.map((rule, index) => (
              <motion.div 
                key={index}
                className="rule-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheck className="rule-icon" />
                <p>{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 