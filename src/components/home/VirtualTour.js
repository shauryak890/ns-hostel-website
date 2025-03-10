import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';
import './VirtualTour.css';

const VirtualTour = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const tourImages = [
    {
      url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Single Occupancy Room',
      description: 'Our premium single rooms feature a comfortable bed, study desk, wardrobe, and attached bathroom.'
    },
    {
      url: 'https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Double Sharing Room',
      description: 'Spacious double rooms with individual beds, study desks, and storage for each student.'
    },
    {
      url: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Triple Sharing Room',
      description: 'Economical triple rooms with individual beds and study spaces for each student.'
    },
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Fitness Center',
      description: 'Well-equipped gym with modern equipment to help you stay fit and healthy.'
    },
    {
      url: 'https://images.unsplash.com/photo-1708517194326-6077b788f04b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Dining Area',
      description: 'Modern dining hall where nutritious meals are served three times daily.'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === tourImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? tourImages.length - 1 : prev - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`virtual-tour ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="tour-container">
        <div className="tour-header">
          <h2>Explore Our Student Hostel</h2>
          <p>Take a virtual tour of our facilities before you book your stay</p>
        </div>
        
        <div className="tour-viewer">
          <button className="tour-nav prev" onClick={prevImage}>
            <FaArrowLeft />
          </button>
          
          <div className="tour-image-container">
            <img 
              src={tourImages[currentImage].url} 
              alt={tourImages[currentImage].title} 
              className="tour-image"
            />
            <div className="tour-controls">
              <button className="fullscreen-btn" onClick={toggleFullscreen}>
                <FaExpand />
              </button>
            </div>
            <div className="tour-caption">
              <h3>{tourImages[currentImage].title}</h3>
              <p>{tourImages[currentImage].description}</p>
            </div>
          </div>
          
          <button className="tour-nav next" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>
        
        <div className="tour-thumbnails">
          {tourImages.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
              <img src={image.url} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTour; 