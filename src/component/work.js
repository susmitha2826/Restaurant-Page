import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose from a variety of delicious meals that suit your taste. We offer a range of options to satisfy your cravings and make meal planning easy.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how frequently you’d like to receive your meals. Whether you prefer daily, weekly, or another schedule, we can accommodate your needs.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy quick and reliable delivery right to your door. Our team ensures that your meals arrive fresh and on time, so you can enjoy hassle-free dining.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        This is how it works: we prioritize hygiene by implementing touchless solutions 
        that ensure a clean and safe experience while delivering the highest quality service.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;