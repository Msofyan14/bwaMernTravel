import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MostPicked = (props) => {
  return (
    <section
      className="container most-picked-wrapper"
      ref={props.refMostPicked}
    >
      <Fade cascade>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                {" "}
                {/* <Fade delay={300 * index}> */}
                <div className="card card-featured">
                  <div className="tag text-white">
                    ${`${item.price}`}
                    <span className="fw-light">/ {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={
                        item.imageId[0]
                          ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                          : ""
                      }
                      alt={item.name}
                      // style={
                      //   index === 0
                      //     ? { height: 400 }
                      //     : { height: 200, width: 450 }
                      // }
                      className="image-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="stretched-link d-block text-white"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.title}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
                {/* </Fade> */}
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default MostPicked;
