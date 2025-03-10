import React from 'react';
import { motion } from 'framer-motion';
import './LocalAttractions.css';

const LocalAttractions = () => {
  const attractions = [
    {
      id: 1,
      name: "Hawa Mahal",
      description: "The iconic 'Palace of Winds' with its unique honeycomb-like structure",
      image: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: "15 km"
    },
    {
      id: 2,
      name: "Amber Fort",
      description: "Magnificent hilltop fort combining Rajput and Mughal architecture",
      image: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: "20 km"
    },
    {
      id: 3,
      name: "City Palace",
      description: "Royal residence showcasing Rajasthani and Mughal architecture",
      image: "https://images.unsplash.com/photo-1716534133704-5a5c2a9c7512?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: "15 km"
    },
    {
      id: 4,
      name: "Jal Mahal",
      description: "Beautiful palace situated in the middle of Man Sagar Lake",
      image: "https://images.unsplash.com/photo-1661924326425-c14a6426d989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      distance: "18 km"
    }
  ];

  return (
    <section className="local-attractions">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Explore Jaipur
        </motion.h2>
        
        <div className="attractions-grid">
          {attractions.map((attraction) => (
            <motion.div 
              key={attraction.id}
              className="attraction-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: attraction.id * 0.1 }}
            >
              <div className="attraction-image">
                <img src={attraction.image} alt={attraction.name} />
                <div className="distance-badge">{attraction.distance}</div>
              </div>
              <div className="attraction-content">
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAttractions; 