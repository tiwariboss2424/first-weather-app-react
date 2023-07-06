import React from "react";
// import {Container} from 'react-bootstrap';
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
const FooterComponent = () => {
  return (
    <>
      <div className="wrap-footer">
        <div className="f-content">
          <span
            className="f-copyright"
            style={{
              fontSize: "3rem",
              color: "gold",
              textShadow: "4px 3px 2px white",
            }}
          >
            @copyright-Protected
          </span>
          <div className="f-info">
            <h3 style={{ color: "white" }}>
              Creator :{" "}
              <span style={{ color: "magenta", fontSize: "2rem" }}>
                Niranjan Tiwari
              </span>
            </h3>
            <br />
            <p
              style={{ flexWrap: "wrap", marginRight: "20px", color: "white" }}
            >
              I have ceated this site using React.js for Practice
              <br /> purpose in my 2nd year of Btech. <br /> For any{" "}
              <span style={{ color: "magenta", fontSize: "1.5rem" }}>
                Query
              </span>{" "}
              Connect with me on my social <br />
              media handles ...{" "}
            </p>
            <div
              className="f-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                margin: "1rem 0 0 2rem",
              }}
            >
              <a
                href="https://www.facebook.com/niranjan.tiwari.77964"
                target="_blank"
              >
                <FaFacebook
                  style={{
                    color: "cyan",
                    fontSize: "2.3rem",
                    marginTop: "10px",
                  }}
                />
              </a>
              <a
                href="https://github.com/tiwariboss2424?tab=repositories"
                target="_blank"
              >
                <FaGithub
                  style={{
                    color: "gold",
                    fontSize: "2.3rem",
                    marginTop: "10px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/tiwari_niranjan24/"
                target="_blank"
              >
                <FaInstagramSquare
                  style={{
                    color: "orange",
                    fontSize: "2.3rem",
                    marginTop: "10px",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/niranjan-tiwari-28689719b/"
                target="_blank"
              >
                <FaLinkedin
                  style={{
                    color: "cyan",
                    fontSize: "2.3rem",
                    marginTop: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
