import React from "react";
import Fade from "react-reveal";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-4">
            <img
              src={CompletedIllustration}
              style={{ maxWidth: 360 }}
              alt="completed checkout apartment"
            />
            <p className="text-secondcolor">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
