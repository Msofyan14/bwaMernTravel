import React from "react";
import Fade from "react-reveal";

export default function FeauturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${
                index === 0 ? "column-7 row-2" : "column-5 row-1"
              } 
              `}
            >
              <Fade bottom delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      // style={index === 0 ? { height: 730 } : { height: 360 }}
                      className="image-cover"
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      alt={item._id}
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
