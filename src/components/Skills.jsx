import React,{useEffect} from "react";
import {DiMongodb, DiHtml5} from 'react-icons/di'
import {SiExpress,SiCss3, SiRedux,SiJavascript,SiReact,SiPostman,SiVite,SiNetlify,SiReplit} from 'react-icons/si'
import {FaBootstrap} from "react-icons/fa"
import {FaNodeJs, FaGitSquare, FaJava} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import AOS from "aos";

export const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section data-aos="fade-up" className="sections" id="skills">
        <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">Skills</span>
      </h1>
      <div></div>
        {/* <p data-aos="fade-up" style={{color:"white"}}>Here are a few Technologies I’ve been working with recently:</p> */}
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <div className="skills-card-name" > <DiHtml5 className="skills-card-img" color="rgb(21, 246, 73)" /> HTML</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiCss3 className="skills-card-img" color="rgb(21, 246, 73)"/>  CSS</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiJavascript className="skills-card-img" color="rgb(21, 246, 73)"/> JavaScript</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiReact className="skills-card-img" color="rgb(21, 246, 73)"/> React.js</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiRedux className="skills-card-img" color="rgb(21, 246, 73)"/> Redux</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <FaNodeJs className="skills-card-img" color="rgb(21, 246, 73)"/> Node.js</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiExpress className="skills-card-img" color="rgb(21, 246, 73)"/> Express.js</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><DiMongodb className="skills-card-img" color="rgb(21, 246, 73)"/> MongoDb</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><FaBootstrap className="skills-card-img" color="rgb(21, 246, 73)"/> BootStrap</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><FaJava className="skills-card-img" fontSize={'27px'} color="rgb(21, 246, 73)"/> Java</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <FaGitSquare className="skills-card-img" color="rgb(21, 246, 73)"/> Git</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><TbBrandVscode className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> VScode</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiVite className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Vite</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiNetlify className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Netlify</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiReplit className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Replit</div>
            </li>
            
          </ul>
        {/* <p data-aos="fade-up" style={{marginTop:'5rem',color:"white"}}>Here are a few Tools I’ve been working with recently:</p> */}
          <ul data-aos="fade-up"  className="skills-list">
            {/* <li className="skills-card">
              <div className="skills-card-name" > <FaGitSquare className="skills-card-img" color="rgb(21, 246, 73)"/> Git</div>
            </li> */}
            <li className="skills-card">
              <div className="skills-card-name" ><TbBrandVscode className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> VScode</div>
            </li>
            {/* <li className="skills-card">
              <div className="skills-card-name" ><SiPostman className="skills-card-img" color="rgb(21, 246, 73)"/> Postman</div>
            </li> */}
            <li className="skills-card">
              <div className="skills-card-name" ><SiVite className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Vite</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiNetlify className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Netlify</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiReplit className="skills-card-img" fontSize={'25px'} color="rgb(21, 246, 73)"/> Socket.IO</div>
            </li>
          </ul>
    </section>
  )
}
