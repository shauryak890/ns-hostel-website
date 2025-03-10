import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBed, FaWifi, FaUtensils, FaGraduationCap, FaBus, FaLock, FaHotTub, FaDesktop, FaGamepad, FaLaundry, FaFirstAid, FaShieldAlt, FaChargingStation, FaDumbbell } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VirtualTour from '../components/home/VirtualTour';
import LocalAttractions from '../components/home/LocalAttractions';
import WeatherWidget from '../components/home/WeatherWidget';
import StudentEvents from '../components/home/StudentEvents';
import './Home.css';

const Home = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Yash Pareek",
      location: "Computer Science, 3rd Year",
      text: "Living at this hostel has been amazing! The study environment is perfect, and the transportation to college saves me so much time every day.",
      rating: 5,
    },
    {
      id: 2,
      name: "Divyansh Jaiswal",
      location: "Business Administration, 3rd Year",
      text: "The hostel staff is incredibly supportive. They understand student needs and the facilities are always well-maintained.",
      rating: 5,
    },
    {
      id: 3,
      name: "Raj Tilak",
      location: "BBA, 2nd Year",
      text: "I've stayed in this hostel for my entire college duration. The community atmosphere and proximity to college made my academic journey much easier.",
      rating: 4,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Your Home Away From Home</h1>
          <p>Premium student accommodation in Dahmi Kalan, Jaipur with all the amenities you need for academic success.</p>
          <Link to="/booking" className="cta-button">Book Your Room</Link>
        </motion.div>
      </section>
      
      <section className="features-section container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Our Student Hostel
        </motion.h2>
        
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Prime Location</h3>
            <p>Just 800 meters from your college campus - a convenient 10-minute walk. Easy access to local markets and amenities.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">
              <FaBed />
            </div>
            <h3>Comfortable Rooms</h3>
            <p>Choose from single, double, or triple sharing rooms with comfortable beds and study areas.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">
              <FaWifi />
            </div>
            <h3>High-Speed WiFi</h3>
            <p>Stay connected with high-speed internet access throughout the hostel for your studies and entertainment.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">
              <FaUtensils />
            </div>
            <h3>Nutritious Meals</h3>
            <p>Enjoy three healthy meals daily prepared in our hygienic kitchen with varied menu options.</p>
          </motion.div>
        </div>
      </section>
      
      <section className="rooms-preview-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Student Accommodation Options
          </motion.h2>
          
          <div className="rooms-preview-grid">
            <motion.div 
              className="room-preview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Single Occupancy Room"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3>Single Occupancy</h3>
                <p>Private room with attached bathroom and study area.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="room-preview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Double Sharing Room"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3>Double Sharing</h3>
                <p>Shared room with individual beds and study spaces.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="room-preview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Triple Sharing Room"
                className="room-preview-image"
              />
              <div className="room-preview-content">
                <h3>Triple Sharing</h3>
                <p>Economical option with shared facilities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="facilities-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Student Facilities
          </motion.h2>
          
          <div className="facilities-grid">
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaWifi />
              </div>
              <h3>High-Speed WiFi</h3>
              <p>24/7 high-speed internet access throughout the hostel.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaUtensils />
              </div>
              <h3>Mess Facility</h3>
              <p>Nutritious meals served three times daily with varied menu options.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaLock />
              </div>
              <h3>Security</h3>
              <p>24/7 security with CCTV surveillance and biometric access.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaBus />
              </div>
              <h3>College Transport</h3>
              <p>Regular shuttle service to and from your college campus.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaHotTub />
              </div>
              <h3>Hot Water</h3>
              <p>24/7 hot water supply with energy-efficient geysers in all bathrooms.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaFirstAid />
              </div>
              <h3>First Aid & Medical</h3>
              <p>Basic medical supplies and assistance with hospital visits when needed.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaChargingStation />
              </div>
              <h3>Power Backup</h3>
              <p>Uninterrupted power supply ensures your studies are never disrupted.</p>
            </motion.div>
            
            <motion.div 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FaDumbbell />
              </div>
              <h3>Modern Gym</h3>
              <p>Well-equipped fitness center to help you stay healthy and active.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <LocalAttractions />

      <section className="info-widgets-section">
        <div className="container">
          <div className="widgets-grid">
            <div className="widget-column">
              <StudentEvents />
            </div>
            <div className="widget-column">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      <VirtualTour />

      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Secure Your Room?</h2>
            <p>Limited spaces available for the upcoming academic year. Book now to avoid disappointment!</p>
            <Link to="/booking" className="cta-button-large">Book Now</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 