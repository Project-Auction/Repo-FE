import "./Footer.css";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import CustomFormProvider from "../../FormElement/CustomFormProvider";
import { FormInput } from "../../FormElement/Input";
import ButtonField from "../../FormElement/Button";
import { memo } from "react";

function Footer() {
  const methods = useForm();

  return (
    <div className="footer__container">
      <div className="container">
        <div className="footer__header">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer__item">
                <h3 className="header">Mobile Apps</h3>

                <div className="download-app">
                  <div className="download-app__item">
                    <GoogleIcon className="icon__download" />
                    <div className="download-app__item-content">
                      <span>
                        Get in on
                        <p>Google Play</p>
                      </span>
                    </div>
                  </div>

                  <div className="download-app__item">
                    <AppleIcon className="icon__download" />
                    <div className="download-app__item-content">
                      <span>
                        Get in on
                        <p>App Store</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer__item">
                <h3 className="header">Contact Us</h3>

                <div className="content">
                  <div className="content__item">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="content__icon"
                    />
                    <span>DUY TAN UNIVERSITY</span>
                  </div>

                  <div className="content__item">
                    <FontAwesomeIcon icon={faPhone} className="content__icon" />

                    <span>(+84)236 6517 021</span>
                  </div>

                  <div className="content__item">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="content__icon"
                    />
                    <a href="mailto:nguyenhanhtuan1206@gmail.com">
                      Tuan@gmail.com
                    </a>
                  </div>

                  <div className="content_item social">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer__item">
                <h3 className="header">NewsLetter</h3>

                <div className="content">
                  <span>
                    Keep up with our always upcoming product features and
                    technologies. Enter your e-mail and subscribe to our
                    newsletter.
                  </span>
                </div>

                <div className="mt-4">
                  <CustomFormProvider {...methods}>
                    <form className="footer__form">
                      <FormInput
                        fieldName="sendEmailFooter"
                        element="input"
                        type="email"
                        required
                        placeholder="Enter your email"
                        noBorder
                      />
                      <ButtonField type="submit" primary small>
                        Subscribe
                      </ButtonField>
                    </form>
                  </CustomFormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <ul className="footer__bottom-left-area">
            <Link to="/about-us">About</Link>
            <Link to="/about-us">Service</Link>
            <Link to="/about-us">Shop</Link>
            <Link to="/about-us">About</Link>
            <Link to="/about-us">Blog</Link>
            <Link to="/about-us">PORTFOLIO</Link>
            <Link to="/about-us">CONTACTS</Link>
          </ul>

          <p className="footer__bottom-right-area">© 2022 Designed by Tuan</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
