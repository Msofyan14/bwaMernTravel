import React from "react";
import Star from "elemets/Star";
import Button from "elemets/Button";

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial Frame"
              className="position-absolute"
              style={{ margin: "-30px 0 0 -30px" }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={2}></Star>
          <h5 className="h2 fw-light lh-base my-3">{data.content}</h5>
          <span className="text-secondcolor">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
