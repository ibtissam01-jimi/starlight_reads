import React from "react"

const AboutUs =()=>{
    return(
        <div>

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
          <button className="learn-more-button">Learn More</button>
        </div>

        <div className="about-image-container animate-slide-in-right">
          <img
            src={`${process.env.PUBLIC_URL}/images/b3.jpeg`}
            alt="About Us"
            className="about-image"
          />
        </div>
        </div>

        </div>
    )
}
export default AboutUs