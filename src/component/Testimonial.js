import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Clients Say</h1>
        <p className="primary-text">
          We are proud to have earned the trust of our clients. Here’s what they have to say about their experience with us.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="John Doe" />
        <p>
          "The team at this company exceeded my expectations. Their attention to detail and commitment to delivering quality solutions was exceptional. I couldn't be happier with the results!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John</h2>
        <p>CEO</p>
      </div>
    </div>
  );
};

export default Testimonial;
