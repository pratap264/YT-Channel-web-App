import React from "react";
import "./Footer.css";
import logoDis from "../Assets/discordlogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      {/* <footerup className="Footerup">
  <div className="cpyup">
  Register For Giveaway !
  <span> <a className="reg" href="https://www.youtube.com/c/SilentXjerry">Register</a> </span>
  </div>
    </footerup>
    <footer className="FooterStyle">
  <div className="cpy">
  © 2022 Copyright:
  <span> <a className="link" href="https://www.youtube.com/c/SilentXjerry">Silent X jerry.Com</a> </span>
  </div>
    </footer> */}
      <footer className="bottom">
        <div className="container">
          <section className="box1">
            <h1>
              Register for Giveaway! →{" "}
              <a href="https://www.youtube.com/c/SilentXjerry">Register</a>
            </h1>
          </section>
        </div>

        <div className="cpy">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <ul class="wrapper">
            <li class="icon facebook">
              <span class="tooltip">Facebook</span>
              <span>
                {/* <i class="fal fa-facebook-f"></i> */}
                {/* <FontAwesomeIcon icon={["far", "facebook"]} /> */}
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </span>
            </li>
            <li class="icon twitter">
              <span class="tooltip">Twitter</span>
              <span>
                {/* <i class="fab fa-twitter"></i> */}
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </span>
            </li>
            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <span>
                {/* <i class="fab fa-instagram"></i> */}
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </span>
            </li>
            <li class="icon github">
              <span class="tooltip">Github</span>
              <span>
                {/* <i class="fab fa-github"></i> */}
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </span>
            </li>
            <li class="icon youtube">
              <span class="tooltip">Youtube</span>
              <span>
                {/* <i class="fab fa-youtube"></i> */}
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </span>
            </li>
          </ul>
          <div className="DisLogo">
            {/* <img src={logoDis} alt="Discord" /> */}
            <h1>Silent X Army</h1>
          </div>
          <h4>
            © 2022 Copyright : <span></span>
            <a
              className="lastlink"
              href="https://www.youtube.com/c/SilentXjerry"
            >
              Silent X jerry.Com
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
};
