import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaGraduationCap, FaMusic, FaVolleyballBall } from 'react-icons/fa';
import './StudentEvents.css';

const StudentEvents = () => {
  const events = [
    {
      id: 1,
      title: "Freshers Welcome Party",
      date: { day: 15, month: "Aug" },
      description: "Welcome party for new students with games, music, and refreshments.",
      icon: <FaUsers />
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      date: { day: 22, month: "Aug" },
      description: "Industry experts share insights on career opportunities in various fields.",
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      title: "Cultural Night",
      date: { day: 5, month: "Sep" },
      description: "Showcase your talents in music, dance, and other performing arts.",
      icon: <FaMusic />
    },
    {
      id: 4,
      title: "Inter-Hostel Sports Tournament",
      date: { day: 18, month: "Sep" },
      description: "Compete in various sports against other hostels in the area.",
      icon: <FaVolleyballBall />
    }
  ];

  return (
    <div className="events-widget">
      <h3>Upcoming Hostel Events</h3>
      <ul className="events-list">
        {events.map(event => (
          <motion.li 
            key={event.id} 
            className="event-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: event.id * 0.1 }}
          >
            <div className="event-date">
              <span className="day">{event.date.day}</span>
              <span className="month">{event.date.month}</span>
            </div>
            <div className="event-details">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default StudentEvents; 