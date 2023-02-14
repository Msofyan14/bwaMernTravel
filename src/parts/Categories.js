import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
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
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.name}
                          className="image-cover"
                          // style={{ width: "100%" }}
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${item._id}`}
                          className="stretched-link d-block secondcolor "
                        >
                          <h5 className="h4 text-secondary">{item.title}</h5>
                        </Button>
                        <span className="text-secondcolor">
                          {item.city}, {item.country}
                        </span>
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
  });
};

export default Categories;
