import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaLaptop, FaFileAlt, FaVideo, FaChalkboardTeacher } from 'react-icons/fa';
import './StudyResources.css';

const StudyResources = () => {
  const resources = [
    {
      id: 1,
      title: "Hostel Study Library",
      description: "Access our collection of textbooks, reference materials, and past exam papers.",
      icon: <FaBook />,
      link: "#"
    },
    {
      id: 2,
      title: "Free Online Courses",
      description: "Curated list of free online courses relevant to various college programs.",
      icon: <FaLaptop />,
      link: "#"
    },
    {
      id: 3,
      title: "Assignment Templates",
      description: "Download templates and guidelines for common college assignments.",
      icon: <FaFileAlt />,
      link: "#"
    },
    {
      id: 4,
      title: "Tutorial Videos",
      description: "Watch tutorial videos created by senior students and faculty.",
      icon: <FaVideo />,
      link: "#"
    },
    {
      id: 5,
      title: "Peer Tutoring",
      description: "Sign up for peer tutoring sessions with high-performing seniors.",
      icon: <FaChalkboardTeacher />,
      link: "#"
    }
  ];

  return (
    <section className="study-resources">
      <div className="container">
        <motion.div 
          className="resources-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Study Resources</h2>
          <p>Tools and materials to help you excel in your academics</p>
        </motion.div>
        
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <motion.div 
              key={resource.id} 
              className="resource-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="resource-icon">
                {resource.icon}
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} className="resource-link">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyResources; 