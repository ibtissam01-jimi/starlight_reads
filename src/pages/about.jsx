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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
            dolore dolorum officiis necessitatibus quis numquam omnis veniam
            eius repellendus similique illum repudiandae ab obcaecati vero
            tempore voluptate, voluptas culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
            dolore dolorum officiis necessitatibus quis numquam omnis veniam
            eius repellendus similique illum repudiandae ab obcaecati vero
            tempore voluptate, voluptas culpa.
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
