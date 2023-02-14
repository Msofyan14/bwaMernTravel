import React from "react";
import Fade from "react-reveal";
import InputText from "elements/Form/InputText";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  // console.log(data);
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-12 col-lg-5 border-end py-lg-5 px-5  mb-5 mb-lg-0"
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                    style={{ height: 270 }}
                    className="image-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-secondcolor">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-auto">
                    <span className="text-secondary fw-normal">
                      ${+checkout.duration * ItemDetails.price} USD{" "}
                      <span className="text-secondcolor"> per </span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div
            className="col-12 col-lg-5 py-lg-5 px-5 "
            style={{ paddingLeft: 80 }}
          >
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
