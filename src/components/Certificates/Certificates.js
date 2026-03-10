import React from "react";
import "./Certificates.css";

const certificates = [
{
title:"Full Stack Developer Course",
issuer:"Simplilearn",
link:"/certificates/simplilearn.pdf"
},

{
title:"Java for Beginners",
issuer:"GUVI",
link:"/certificates/guvi.pdf"
},

{
title:"SQL Full Course",
issuer:"Great Learning",
link:"/certificates/great.pdf"
},

{
title:"TCS ION Career Edge – Young Professional",
issuer:"TCS ION",
link:"/certificates/tcs.pdf"
},

{
title:"Data Science Bootcamp Course",
issuer:"Udemy",
link:"/certificates/udemy.pdf"
},

{
title:"Microsoft Excel Course - Beginners",
issuer:"Infosys SpringBoard",
link:"/certificates/infosys.pdf"
}

];

const Certificates = () => {
return (

<section id="certificates">

<h2 className="certTitle">Certificates</h2>

<div className="certContainer">

{certificates.map((cert,index)=>(

<div className="certCard" key={index}>

<h3>{cert.title}</h3>

<p>{cert.issuer}</p>

<button
onClick={()=>window.open(cert.link,"_blank")}
>
View Certificate
</button>

</div>

))}

</div>

</section>

);

};

export default Certificates;