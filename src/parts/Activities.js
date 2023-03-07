import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Activities = ({ data }) => {
  if (data.length === 0) return null;
  return (
    <section className="container" style={{ position: "relative", zIndex: -1 }}>
      <Fade bottom>
        <h4 className="mb-3 fw-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                {" "}
                <Fade bottom delay={300 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag text-white">
                        Popular <span className="fw-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          item.imageUrl[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                        className="image-cover"
                        // style={{ maxWidth: 300 }}
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block secondcolor "
                      >
                        <h5 className="h4 text-secondary">{item.name}</h5>
                      </Button>
                      <span className="text-secondcolor">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default Activities;
