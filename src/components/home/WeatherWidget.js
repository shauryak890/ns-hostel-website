import React, { useState, useEffect } from 'react';
import { FaTemperatureHigh, FaWind, FaCloudRain, FaSun, FaCloud, FaCloudSun, FaSnowflake } from 'react-icons/fa';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temp: 32,
    condition: 'Sunny',
    humidity: 35,
    wind: 12,
    icon: 'sun'
  });
  
  // In a real application, you would fetch this data from a weather API
  // For demo purposes, we're using static data for Jaipur
  
  const getWeatherIcon = (condition) => {
    switch(condition.toLowerCase()) {
      case 'sunny':
        return <FaSun />;
      case 'cloudy':
        return <FaCloud />;
      case 'partly cloudy':
        return <FaCloudSun />;
      case 'rainy':
        return <FaCloudRain />;
      case 'snowy':
        return <FaSnowflake />;
      default:
        return <FaSun />;
    }
  };

  return (
    <div className="weather-widget">
      <div className="weather-content">
        <div className="weather-header">
          <h3>Current Weather</h3>
          <p>Jaipur, Rajasthan</p>
        </div>
        
        <div className="weather-main">
          <div className="weather-icon">
            {getWeatherIcon(weather.condition)}
          </div>
          <div className="weather-temp">
            <span className="temp-value">{weather.temp}°C</span>
            <span className="condition">{weather.condition}</span>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="weather-detail">
            <FaCloudRain />
            <span>Humidity: {weather.humidity}%</span>
          </div>
          <div className="weather-detail">
            <FaWind />
            <span>Wind: {weather.wind} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget; 