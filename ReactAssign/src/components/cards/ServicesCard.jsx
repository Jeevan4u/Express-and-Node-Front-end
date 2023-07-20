import React from "react";

const ServicesCard = ({ cardData }) => {
  return (
    <div className="serviceCard py-8 px-4 flex items-center flex-col shadow-md my-6">
      <div className="cardHeader p-4">
        <div className="overlay bg-brand_primary_fade rounded-lg p-4">
          <img src={cardData?.cardImage} alt="" />
        </div>
      </div>
      <div className="cardTitle p-4">
        <h4 className="text-[28px]">{cardData?.cardTitle}</h4>
      </div>
      <div className="cardDescription p-4">
        <h5 className="text-neutral_text">{cardData?.cardDesc}</h5>
      </div>
    </div>
  );
};

export default ServicesCard;
