import React from 'react'
import './skills.css';

// const Skills = () => 
  function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">About Me</h2>

      <p className="skills-desc">
  
        Motivated by a strong desire to learn and build meaningful solutions,
        I develop scalable and user-centered web applications with a focus on
        performance and reliability.
      </p>

      <p className="skills-desc highlight">
        I am currently looking for projects, internships, and placement
        opportunities where I can apply my skills and grow through collaboration.
      </p>

      <div className="cards-container">
        <div className="card">
          <h3>Frontend Development</h3>
          <p>
            Building responsive and modern interfaces using React.js and
            Tailwind CSS with attention to accessibility and user experience.
          </p>
        </div>

        <div className="card">
          <h3>Backend Development</h3>
          <p>
            Developing scalable server-side systems using Java, Spring Boot,
            REST APIs, and secure data handling.
          </p>
        </div>

        <div className="card">
          <h3>Java Programming</h3>
          <p>
            Strong foundation in object-oriented programming, data structures,
            algorithms, and optimized application development.
          </p>
        </div>
      </div>
    </section>
  );
};

// const Skills = () => {
//   return (
//     <section id='skills'>
//         <span className="skillTitle">About Me</span>
//         <span className="skillDesc">Motivated by a strong desire to learn and build meaningful solutions, I develop scalable and user-centered web applications with careful attention to quality, performance, and reliability</span>
//         <br />
//         <span className="skillDesc">I am currently looking for projects, internships, and placement opportunities where I can apply my skills, collaborate with teams, and continue growing as a developer.</span>
//     </section>
//   )
// }

export default Skills;
