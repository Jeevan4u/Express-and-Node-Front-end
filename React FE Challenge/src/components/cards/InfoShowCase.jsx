import React from "react";

const InfoShowCase = ({ infoCardDetails }) => {
  return (
    <div className="showCases flex items-center">
      <div className="imageContainre">
        <img src={infoCardDetails?.image} className="" alt="" />
      </div>
      <div className="cardLayout px-4">
        <div className="showCaseDetails  lg:text-[38px] font-[700] text-neutral_text">
          {infoCardDetails?.details}
        </div>
        <div className="showCaseTitle  lg:text-[18px] font-[500] text-neutral_text_fade">
          <p>{infoCardDetails?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoShowCase;
