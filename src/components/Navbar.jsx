import resume from '../resume/Narsimma_Yemul_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Navbar({ handleClick, boolean }) {

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/15Dy1O6qtW6jNVGJxOrWrQ0dkoOm1cQKi/view?usp=sharing', '_blank');
  };

  // const topwindows = () => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }

  return (
    <nav id="nav-menu" onClick={handleClick}>
      <div className='main-div'>
      <div id="logo-nav">
        <h1 className="nav-link home">
          <a className="sauce name rubber" href="#home">
            Narsimma Yemul
          </a>
        </h1>
        
        <div className="ham-container">
          {/* <a rel="noreferrer" href={resume} 
          onClick={handleDownload} 
          download={'Narsimma_Yemul_Resume'} className="contact-button resume-button first-btn">
            Resume
          </a> */}
          <span className="ham">
            <FontAwesomeIcon icon={boolean ? faBars : faXmark} />
          </span>
        </div>
      </div>
      <ul className={boolean ? "hide" : "" }>
        <li >
          <a  href="#home" className="underline">
            Home
          </a>
        </li>
        <li className="nav-link about">
          <a href="#about" className="underline">
            About
          </a>
        </li>
        <li className="nav-link skills">
          <a href="#skills" className="underline">
            Skills
          </a>
        </li>
        <li className="nav-link projects">
          <a href="#projects" className="underline">
            Projects
          </a>
        </li>
        <li className="nav-link contact">
          <a href="#contact" className="underline">
            Contact
          </a>
        </li>
      
         <li className="nav-link contact">
        <a className='resume-btn'
      href={resume} 
      onClick={handleDownload} 
      rel="noreferrer" download={'Narsimma_Yemul_Resume'} id="resume-button-1"
       >
        Resume</a>
        </li> 
                
</ul>
</div>
      {/* <a 
      href={resume} 
      onClick={handleDownload} 
      rel="noreferrer" download={'Narsimma_Yemul_Resume'} id="resume-button-1" className="contact-button nav-link resume resume-button second-btn">
        Resume</a>
         */}
    </nav>
  );
}
