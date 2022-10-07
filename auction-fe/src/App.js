import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ScrollToTop } from "./shared/hook/scroll-to-top";
import Admin from "./app/admin/page/Admin";
import Home from "./app/home/page/home/Home";
import Payment from "./app/payment/page/Payment";
import ProtectRoutes from "./routes/ProtectRoutes";
import AboutUs from "./app/home/page/about-us/about-us";
import HomeCatalog from "./app/home/page/home/HomeCatalog";
import ProductDetail from "./app/product/components/ProductDetail";
import Auth from "./app/auth";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            {/* Public Page */}
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/home-catalog" element={<HomeCatalog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/:productId/detail" element={<ProductDetail />} />
            {/* Public Page */}

            {/* Logged In page */}
            <Route element={<ProtectRoutes isAllowed={!!user} />}>
              <Route path="/payment" element={<Payment />} />
            </Route>
            {/* Logged In page */}

            {/* Admin page */}
            <Route
              element={
                <ProtectRoutes
                  isAllowed={!!user && user.roles.includes("admin")}
                />
              }
            >
              <Route path="/admin" element={<Admin />} />
            </Route>
            {/* Admin page */}
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
