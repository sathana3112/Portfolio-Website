import React, { useState, useEffect } from 'react'
import'./intro.css';
import bg from '../../assets/sadhu image.png';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Intro = () => {

  const text = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {

      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);
      }

    }, 100);

    return () => clearInterval(typing);

  }, []);
  return (

    <section id="intro">
        <div className="introContent">

          <span className="hello">Hello,</span>

          <span className="introText">
            I'm <span className="introName">Sathana</span> <br />
            a <span className="typingText">{displayText}</span>
          </span>

          <p className="introPara">
            A passionate Computer Science student interested in building scalable
and user-friendly web applications using modern web technologies. <br />
           Currently exploring modern technologies like React and full-stack development.
          </p>

          {/* SOCIAL ICONS */}
          <div className="socialIcons">

            <a href="https://www.linkedin.com/sathana-logaramanan" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/sathana3112" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="mailto:sathanalogaramanan@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="photo-wrapper">
            <div className="photo-glow"></div>

            <div className="photo-card">
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </div>

    </section>
  )
}


export default Intro;
