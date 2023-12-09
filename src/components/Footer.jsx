import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/Narsimmayemul">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/narsimma-yemul-7653781b5/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Narsimmayemul">
            Designed and built by Narsimma Yemul{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto: codecode355@gmail.com" id="contact-email">narsimmayemul49450@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
