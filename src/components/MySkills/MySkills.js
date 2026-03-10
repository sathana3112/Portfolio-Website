// import React from "react";
import React, { useState } from "react";
import "./MySkills.css";
import { FaJava, FaBrain, FaGithub } from "react-icons/fa";
import { SiC, SiSpringboot, SiPostman, SiJavascript, SiReact, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiDocker } from "react-icons/si";
// import { CgCPlusPlus } from "react-icons/cg";
// import { TbCloudDataConnection } from "react-icons/tb";


const MySkills = () => {

const [active, setActive] = useState([]);

const toggleCard = (card) => {

if(active.includes(card)){
setActive(active.filter(item => item !== card));
}
else{
setActive([...active, card]);
}

};

return (

<section id="myskills">

<h2 className="skillsTitle">💡 My Skills</h2>

<div className="skillsContainer">

{/* Programming Languages */}

<div className="skillCard" onClick={()=>toggleCard("programming")}>

<h3>Programming Languages</h3>

{active.includes("programming") && (

<ul className="skillList">

<li><FaJava className="icon"/> Java</li>

<li><SiC className="icon"/> C</li>

<li><SiPython className="icon"/> Python</li>

<li><FaBrain className="icon"/> DSA</li>

</ul>

)}

</div>


{/* Web Technologies */}

<div className="skillCard" onClick={()=>toggleCard("web")}>

<h3>Web Technologies</h3>

{active.includes("web") && (

<ul className="skillList">


<li><SiJavascript className="icon"/> HTML, CSS, JavaScript</li>

<li><SiReact className="icon"/> React JS, NodeJS</li>

<li><SiTailwindcss className="icon"/> Tailwind CSS</li>




</ul>

)}

</div>


{/* Frameworks */}

<div className="skillCard" onClick={()=>toggleCard("tools")}>

<h3>Frameworks & Tools</h3>

{active.includes("tools") && (

<ul className="skillList">

<li><SiSpringboot className="icon"/> Spring Boot</li>

<li><FaGithub className="icon"/> Git & GitHub</li>

<li><SiDocker className="icon"/> Docker (Basics)</li>

<li><SiPostman className="icon"/> Postman</li>

</ul>

)}

</div>


{/* Databases */}

<div className="skillCard" onClick={()=>toggleCard("database")}>

<h3>Databases & Cloud</h3>

{active.includes("database") && (

<ul className="skillList">

<li><SiMysql className="icon"/> MySQL</li>

<li><SiMongodb className="icon"/> MongoDB</li>

</ul>

)}

</div>


{/* Soft Skills */}

<div className="skillCard" onClick={()=>toggleCard("soft")}>

<h3>Soft Skills</h3>

{active.includes("soft") && (

<ul className="skillList">

<li><FaBrain className="icon"/> Problem Solving</li>

<li><FaBrain className="icon"/> Critical Thinking</li>

<li><FaBrain className="icon"/> Team Collaboration</li>

<li><FaBrain className="icon"/> Adaptability</li>

</ul>

)}

</div>

</div>

</section>

);

};

export default MySkills;





// const MySkills = () => {
//   return (
//     <section id="myskills">

//       <h2 className="skillsTitle">💡 My Skills</h2>

//       <div className="skillsContainer">

//         {/* Programming Languages */}
//         <div className="skillCard">
//           <h3>Programming Languages 👨‍💻</h3>

//           <div className="skillItem"><FaJava /> Java</div>
//           <div className="skillItem"><SiC /> C</div>
//           <div className="skillItem"><SiPython /> Python</div>
//           <div className="skillItem"><FaBrain /> DSA</div>
//         </div>


//         {/* Web Technologies */}
//         <div className="skillCard">
//           <h3>Web Technologies 🌐</h3>

//           <div className="skillItem"><SiJavascript /> HTML, CSS, JavaScript</div>
//           <div className="skillItem"><SiReact /> ReactJS, NodeJS</div>
//           <div className="skillItem"><SiTailwindcss /> Tailwind CSS</div>
//         </div>


//         {/* Frameworks */}
//         <div className="skillCard">
//           <h3>Frameworks & Tools 🛠️</h3>

//           <div className="skillItem"><SiSpringboot /> Spring Boot</div>
//           <div className="skillItem"><FaGitAlt /> Git & GitHub</div>
//           <div className="skillItem"><SiDocker /> Docker (Basics)</div>
//           <div className="skillItem"><SiPostman /> Postman</div>
//         </div>


//         {/* Databases */}
//         <div className="skillCard">
//           <h3>Databases & Cloud ☁️</h3>

//           <div className="skillItem"><SiMysql /> MySQL</div>
//           <div className="skillItem"><SiMongodb /> MongoDB</div>
//         </div>


//         {/* Soft Skills */}
//         <div className="skillCard">
//           <h3>Soft Skills 💼</h3>

//           <div className="skillItem"><FaBrain /> Problem-solving</div>
//           <div className="skillItem"><FaBrain /> Critical Thinking</div>
//           <div className="skillItem"><FaBrain /> Team Collaboration</div>
//           <div className="skillItem"><FaBrain /> Adaptability</div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MySkills;