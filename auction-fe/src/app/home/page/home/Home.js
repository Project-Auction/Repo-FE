import { Link } from "react-router-dom";

import "./Home.css";
import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import ButtonFiled from "../../../../shared/components/FormElement/Button";
import ProductList from "../../../product/components/ProductList";
import Table from "../../../../shared/components/UIElement/Table/Table";

export const HEADER_GRID = [
  { field: "STT" },
  { field: "Name" },
  { field: "Header Title" },
  { field: "Initial Price" },
];

export const DUMMY_PRODUCTS = [
  {
    codeProduct: 1,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 2,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 3,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 5,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 6,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 7,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },

  {
    codeProduct: 4,
    name: "Macbook Air",
    headerTitle: "COUNTDOWN FINISHED",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    initialPrice: "20000",
    currentPrice: "20000",
  },
];

function Home() {
  return (
    <>
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

          {/* How it work */}
          <div className="home__page-instruction section">
            <h3 className="title-header">How it works</h3>

            <div className="row home__page-instruction-list">
              <div className="col-3">
                <div className="home__page-instruction-item">
                  <div className="header">
                    <span className="circle">01</span>
                  </div>

                  <h3 className="title-header">Register</h3>

                  <p className="desc">
                    To start using our auction, you’ll need to register. It’s
                    completely free!
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="home__page-instruction-item">
                  <div className="header">
                    <span className="circle">02</span>
                  </div>

                  <h3 className="title-header">BUY OR BID</h3>

                  <p className="desc">
                    You can instantly buy or place a bid on a desired product
                    right after registration.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="home__page-instruction-item">
                  <div className="header">
                    <span className="circle">03</span>
                  </div>

                  <h3 className="title-header">SUBMIT A BID</h3>

                  <p className="desc">
                    Submitting a bid is fast and easy. The process takes
                    approximately 5 minutes.
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="home__page-instruction-item">
                  <div className="header">
                    <span className="circle">04</span>
                  </div>

                  <h3 className="title-header">WIN</h3>

                  <p className="desc">
                    Easily win at our auction and enjoy owning the product you
                    dream of.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* How it work */}

          {/* CURRENT AUCTIONS*/}
          <div className="home__page-current-action section">
            <h3 className="title-header">Current Actions</h3>
            <div className="container">
              <div className="row">
                <ProductList
                  items={DUMMY_PRODUCTS}
                  className="col-3 home__page-current-action-list"
                />
              </div>
            </div>

            <ButtonFiled
              to="/home-catalog"
              primary
              size="big"
              className="view-all"
            >
              VIEW ALL AUCTION
            </ButtonFiled>
          </div>
          {/* CURRENT AUCTIONS*/}
        </div>
        {/* Content */}

        {/* Footer */}
        <Footer />
        {/* Footer */}

        <Table items={DUMMY_PRODUCTS} select header={HEADER_GRID} />
      </div>
    </>
  );
}

export default Home;
