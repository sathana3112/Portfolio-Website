import React from 'react'
import './navbar.css';
// import logo from '../../assets/';
// import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SATHANA L</div>
       {/* <img src={logo} alt="Logo" className='logo' /> */}
       <div className="desktopMenu">
       <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="myskills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

       <Link
          activeClass="active"
          to="certificates"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Certificates
        </Link>


        {/* <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Projects</Link> */}
       </div>

       <Link to="contact" smooth={true} duration={500}>
       <button className="contactBtn">Contact Me</button>
        </Link>

       {/* <button className="desktopMenuBtn">
         */}
        {/* <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button> */}
    </nav>
  )
}

export default Navbar;
