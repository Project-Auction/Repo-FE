import "./NotFound.css";

import Footer from "../../Layouts/Footer";
import MainNavigation from "../Navigation/MainNavigation";
import ButtonField from "../../FormElement/Button/ButtonField";
import { memo } from "react";

const NotFound = () => {
  return (
    <>
      <MainNavigation noHeaderInner />

      <div className="error-page__container section">
        <img
          className="error-page"
          src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg"
          alt="Error Page"
        />

        <div className="error-page__body">
          <h3 className="title">Oops! Something's missing...</h3>
          <p>This content isn't available at the moment.</p>
        </div>

        <ButtonField to="/" dark>
          Go Back
        </ButtonField>
      </div>

      <Footer />
    </>
  );
};

export default memo(NotFound);
