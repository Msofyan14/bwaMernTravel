import React, { useState } from "react";
import BrandIcon from "parts/IconText";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
const Header = (props) => {
  const [isActive, setIsActive] = useState(false);
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <Fade>
        <header className="mb-5">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-secondary">cation.</span>
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );
  }

  // const stylingUi = isActive ? {position: "absolute", left: 16, right: 16, padding: "0 16px"} : {}}

  return (
    <Fade>
      <header className="spacing-sm" style={{ zIndex: 10 }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsActive((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={[
                "collapse navbar-collapse",
                isActive ? "show" : "",
              ].join(" ")}
            >
              <ul
                className="navbar-nav ms-auto bg-white"
                style={
                  isActive
                    ? {
                        position: "absolute",
                        left: -16,
                        right: 16,
                        padding: "0 16px",
                      }
                    : {}
                }
              >
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("browse-by")}`}>
                  <Button className="nav-link" type="link" href="browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("stories")}`}>
                  <Button className="nav-link" type="link" href="stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("agents")}`}>
                  <Button className="nav-link" type="link" href="agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
