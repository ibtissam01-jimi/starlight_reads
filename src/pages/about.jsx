import React from "react";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import "../styles/about.css"; 

const About = () => {
  return (
    <div className="about-page">
      
      <Header />

      
      <div className="aboutbackground">
        <div className="background-text animate-fade-in">
          <h1>About Us Our Library!</h1>
        </div>
      </div>

      
      <div className="about-content">
        
        <div className="about-text animate-slide-in-left">
          <h2>About Us</h2>
          <p>
           Welcome to Starlight Reads, your web platform dedicated to the
           management and consultation of books. Designed to provide an 
           intuitive and enjoyable user experience, our application allows 
           readers to authenticate and access a vast collection of books,
          add or remove favorites, and discover additional information
          through the "About" and "Contact" pages. Furthermore, users have
          the option to purchase books with free delivery, making access to
           reading even more convenient and accessible. At Starlight Reads, we combine 
          simplicity and efficiency to meet the needs of book enthusiasts.
          </p>
         
        </div>

        
        <div className="about-image-container animate-slide-in-right">
          <img
            src={`${process.env.PUBLIC_URL}/images/bib.jpeg`}
            alt="About Us"
            className="about-image"
          />
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
