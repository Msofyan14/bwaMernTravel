import React from "react";
import IconCities from "assets/images/icons/Ic_cities.svg";
import IconTraveler from "assets/images/icons/Ic_traveler.svg";
import IconTreasure from "assets/images/icons/Ic_treasure.svg";
import ImagerHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container hero-wrapper">
        <div className="row align-items-center justify-content-between ">
          <div className="col-auto pe-5" style={{ width: 530 }}>
            <h1 className="fw-bold lh-base mb-3">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p className="mb-4 fw-light text-secondcolor w-75">
              we provide what you need to enjoy your holiday with family, Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row icon-wrapper">
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.traveler} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.traveler)}{" "}
                  <span className="text-secondcolor fw-light">Travelers</span>
                </h6>
              </div>
              <div className="col-auto px-3 px-lg-5 ">
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasure} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasure)}{" "}
                  <span className="text-secondcolor fw-light">Treasures</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-secondcolor fw-light">Cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 ps-5 mt-sm-5 hero-image-wrapper">
            <div className="hero-image-placeholder">
              <img
                src={ImagerHero}
                alt="Room With Couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -40px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room With Couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
