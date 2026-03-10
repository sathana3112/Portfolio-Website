import React from "react";
import "./Projects.css";

import portfolio from "../../assets/portfolio.png";
import doctor from "../../assets/doctor-scheduling-software.png";
import train from "../../assets/train ticket_img.png";
import fashion from "../../assets/ai fashion_img.jpg";
import weather from "../../assets/weather_img.png";

const projects = [
  {
    title: "Portfolio Website",
    github:"https://github.com/sathana3112/portfolio",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills and achievements. It helps recruiters understand my technical abilities.",
    tech: "Technologies: ReactJS, HTML, CSS, JavaScript",
  },
  {
    title: "Doctor Appointment Booking System",
    github:"https://github.com/sathana3112/Prescripto---Doctor-Appointment-booking-System",
    image: doctor,
    description:
      "A healthcare web application where patients can book doctor appointments online and manage schedules easily.",
    tech: "Technologies: ReactJS, Spring Boot, MySQL",
  },
  {
    title: "Train Ticket Reservation System",
    github:"https://github.com/sathana3112/Train-Ticket-Reservation-System",
    image: train,
    description:
      "A system that allows users to search trains, book tickets and manage reservations efficiently.",

    tech: "Technologies: Java, MySQL, HTML, CSS",
  },
  {
    title: "AI Driven Fashion Recommender System",
    image: fashion,
    description:
      "An intelligent system that recommends fashion products based on user preferences using machine learning.",
    tech: "Technologies: Python, Machine Learning, Flask",
  },
  {
    title: "Weather App Interface",
    github:"https://github.com/sathana3112/elite-Weather-App",
    image: weather,
    description:
      "A weather application that displays real-time weather information based on user location.",
    
    tech: "Technologies: ReactJS, API Integration, CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectTitle">My Projects</h2>

      <div className="projectContainer">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <div className="projectBtns">
                <br />
                <button 
onClick={() => window.open(project.live, "_blank")}
>
Live Demo
</button>

<button 
onClick={() => window.open(project.github, "_blank")}
>
GitHub
</button>
                {/* <a 
           href={project.live}
target="_blank"
rel="noopener noreferrer"
className="projectBtn"
>
Live Demo
</a>

<a 
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="projectBtn githubBtn"
>
GitHub
</a> */}
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;