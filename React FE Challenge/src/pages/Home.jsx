import React, { Fragment, useEffect } from "react";
import svgAsset from "../assets/images/11.svg";
import ServicesCard from "../components/cards/ServicesCard";
import card1 from "../assets/images/national.png";
import card2 from "../assets/images/users.png";
import card3 from "../assets/images/hands.png";
import InfoShowCase from "../components/cards/InfoShowCase";
import greenUser from "../assets/images/userGreen.png";
import hands from "../assets/images/handsGreen.png";
import touch from "../assets/images/Touch.png";
import payment from "../assets/images/payment.png";
import { useSelector } from "react-redux";
import { appSelector } from "../features/slice/appSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/footer/footer";
import { useGetProductsQuery } from "../features/api/productApi";
const Home = () => {
  const { token } = useSelector(appSelector);
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const navigate = useNavigate();
  const cardData = [
    {
      cardImage: card1,
      cardTitle: "Quality and Reliability",
      cardDesc:
        "Our rigorous quality control ensures that each item meets the highest standards, providing you with a reliable and durable solution.",
    },
    {
      cardImage: card2,
      cardTitle: "Expert Customer Support",
      cardDesc:
        " Our knowledgeable and friendly customer support team is always ready to assist you. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardImage: card3,
      cardTitle: "Hassle-Free Returns",
      cardDesc:
        "We offer a hassle-free return policy, so if you're not completely satisfied with your purchase, you can easily return it within a specified time frame.",
    },
  ];
  const showCaseDetails = [
    {
      image: greenUser,
      title: "Members",
      details: "2,245,341",
    },
    {
      image: hands,
      title: "Events held",
      details: "46,328",
    },
    {
      image: touch,
      title: "Payments",
      details: "828,867",
    },
    {
      image: payment,
      title: "Meets",
      details: "1,926,436",
    },
  ];
  useEffect(() => {
    if (token.product_token) {
      navigate("/dashboard");
    }
  }, []);
  if (isLoading || !isSuccess) {
    return (
      <div className="loadingSpinner h-screen w-screen">
        <span class="loader"></span>
      </div>
    );
  }
  const { products } = data?.data;

  return (
    <>
      {/* // Hero section for home page */}
      <main className="heroSection bg-neutral_background px-4">
        <div className="container grid grid-cols-1 text-[46px] font-[700]  m-auto py-40 md:grid-cols-2 ">
          <div className="heroContent flex flex-col justify-around">
            <div className="mainContens">
              <h1 className="text-neutral_tex leading-tight">
                Explore our wide range of our{" "}
                <span className="text-brand_primary">electronic products</span>
              </h1>

              <p className="text-neutral_text_fade text-[14px] leading-[1.5] my-6 pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>

            <button className="btn btn-success p-4 w-full md:w-[475px] ">
              <p className="text-white">Explore more</p>
            </button>
          </div>
          <div className="heroImage hidden md:grid">
            <img src={svgAsset} alt="" />
          </div>
        </div>
      </main>
      {/* // Services section for home page // */}
      <section className="services">
        <h1 className="text-neutral_text text-[38px] text-center py-8 font-[600]">
          Our Services
        </h1>
        <div className="container flex justify-between items-center m-auto flex-wrap">
          {cardData?.map((elem, i) => (
            <div className="md:basis-[30.33%]" key={i}>
              <ServicesCard cardData={elem} />
            </div>
          ))}
        </div>
      </section>
      {/* // About us section for home page // */}
      <section className="aboutUs bg-neutral_background py-8 my-4">
        <div className="container  m-auto ">
          <h1 className="text-neutral_text text-[38px] text-center py-8 font-[600]">
            About Us
          </h1>
          <div className="grid grid-cols-1 justify-center lg:grid-cols-2 lg:justify-between">
            <div className="aboutContent">
              <p className="text-neutral_text text-[28px] leading-[1.5] font-[600] my-6 pt-10 text-center">
                Helping People get the<br></br>
                <span className="text-brand_primary">best smart Phones</span>
              </p>
            </div>

            <div className="infoShowCase  flex flex-wrap justify-between gap-4 px-4 ">
              {showCaseDetails?.map((elem, i) => (
                <div key={i} className="lg:basis-[48%] ">
                  <InfoShowCase infoCardDetails={elem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="aboutUs py-8 my-4">
        <div className="container  m-auto ">
          <h1 className="text-neutral_text text-[38px] text-center py-8 font-[600]">
            Products :
          </h1>
          <div className="productContainer flex justify-between items-start flex-wrap gap-5">
            {products?.map((elem, i) => (
              <Fragment key={i}>
                <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/files/${
                        elem.imageLink
                      }`}
                      className="object-cover h-full w-full"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{elem.category}</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis reiciendis vel, vitae blanditiis laboriosam a minus
                      doloremque.
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
