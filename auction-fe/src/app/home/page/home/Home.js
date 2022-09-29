import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import ButtonFiled from "../../../../shared/components/FormElement/Button";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__page-container">
      {/* Nav and Header */}
      <MainNavigation />
      {/* Nav */}

      {/* Content */}
      <div className="home__page-content">
        {/* Advertisement */}
        <div className="home__page-content-advertisement">
          <div className="row">
            <div className="col-7 pl-0 pr-0">
              <div className="home__page-content-advertisement-left">
                <img
                  src="https://livedemo00.template-help.com/wt_64509/images/landing-auction-12-1280x720.jpg"
                  alt="Advertisement"
                />

                <div className="content">
                  <p>ONLINE</p>
                  <h2>AUCTION</h2>
                  <p>FOR THE WHOLE FAMILY</p>

                  <p className="introduce">
                    Online Auction is where everyone goes to shop, sell, and
                    give, while discovering variety and affordability
                  </p>

                  <ButtonFiled primary size="big" className="btn-register">
                    REGISTER NOW
                  </ButtonFiled>
                </div>
              </div>
            </div>
            <div className="col-5 pl-0 lr-0">
              <div className="home__page-content-advertisement-right">
                <div className="top">
                  <div className="content">
                    <Link className="name">APPLE IPHONE 7</Link>

                    <div className="detail">
                      <span>Current Price</span>
                      <p>$387.00</p>
                    </div>
                  </div>

                  <div className="btn-bid">
                    <ButtonFiled primary>SUBMIT A BID</ButtonFiled>
                  </div>

                  <img
                    className="home__page-content-advertisement-right-img"
                    src="https://livedemo00.template-help.com/wt_64509/images/landing-auction-11-230x469.png"
                    alt="Product"
                  />
                </div>

                <div className="bottom">
                  <img
                    className="home__page-content-advertisement-right-img"
                    src="https://livedemo00.template-help.com/wt_64509/images/landing-auction-12-377x267.png"
                    alt="Product"
                  />

                  <div className="content">
                    <Link className="name">Parrot Cockpit FPV Glasses</Link>

                    <div className="detail">
                      <span>Current Price</span>
                      <p>$387.00</p>
                    </div>
                  </div>

                  <div className="btn-bid">
                    <ButtonFiled primary>SUBMIT A BID</ButtonFiled>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Advertisement */}
      </div>
      {/* Content */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default Home;
