import React from "react";
import insta from "../../assets/images/insta.png";
import yt from "../../assets/images/YT.png";
import big from "../../assets/images/big.png";
import twitter from "../../assets/images/twitter.png";
import { SendIcon } from "../../utils/icons";
const Footer = () => {
  const socialsDetails = [
    {
      icon: insta,
      link: "https://www.instagram.com/",
    },
    {
      icon: yt,
      link: "https://www.youtube.com/",
    },
    {
      icon: big,
      link: "https://www.instagram.com/",
    },
    {
      icon: twitter,
      link: "https://www.twitter.com/",
    },
  ];
  const companyDetails = [
    {
      title: "About us",
    },
    {
      title: "Blog",
    },
    {
      title: "Contact us",
    },
    {
      title: "Pricings",
    },
  ];
  return (
    <div className="bg-brand_secondary text-white py-14">
      <div className="aboutCompany container m-auto">
        <footer className="grid grid-cols-1 md:grid-cols-2">
          <div className="leftFooter justify-self-center lg:justify-self-start">
            <div className="logoContainer my-4">Logo</div>
            <p className="my-2">Copyright © 2023 My company Pvt Ltd</p>
            <p className="my-2">All rights reserved</p>
            <div className="socials">
              <ul className="socialLists flex ">
                {socialsDetails?.map((elem, i) => (
                  <div key={i}>
                    <div className="circle h-[35px] w-[35px] rounded-full flex items-center justify-center bg-neutral_text_fade m-2">
                      <img src={elem.icon} alt="" />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="rightFooter my-4 flex justify-around flex-wrap ">
            <div className="footerSecond basis-[31%]">
              <h4 className="text-[29px] font-[600]">Company</h4>
              <ul className="companyLists">
                {companyDetails?.map((elem, i) => (
                  <div key={i}>
                    <li className="my-2">{elem.title}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="footerSecond basis-[31%]">
              <h4 className="text-[29px] font-[600]">Company</h4>
              <ul className="companyLists">
                {companyDetails?.map((elem, i) => (
                  <div key={i}>
                    <li className="my-2">{elem.title}</li>
                  </div>
                ))}
              </ul>
            </div>

            <div className="footerSecond basis-[31%] ">
              <h4 className="text-[29px] font-[500] mb-4">Stay UptoDate</h4>
              <div className="inputGroup relative w-full h-full">
                <input
                  type="text"
                  placeholder="Your Email address"
                  className="input  w-full max-w-xs bg-neutral_text_fade"
                />
                <SendIcon
                  className={"absolute top-[13px] right-[15px] hidden xl:block"}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
