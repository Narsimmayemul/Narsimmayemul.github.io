import React,{useEffect} from "react";
import AOS from "aos";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up"  className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">Contact Me</span>
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Send an Email. I would love to talk more to you. 
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: narsimmayemul49450@gmail.com"
          >
            narsimmayemul@gmail.com
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="tel:+917385692206"
          >
            +917385692206
          </a>
        </div>


        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="https://www.linkedin.com/in/narsimma-yemul-7653781b5/"
          >
            Linkedin 
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="https://github.com/Narsimmayemul"
          >
            Github 
          </a>
        </div>


      </div>
    </section>
  );
}
