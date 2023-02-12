import React from "react";
// import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      <div
        className="text-secondcolor"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Tidak ada Feature"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty} </span>
                  <span className="text-secondcolor fw-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
