import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Auth from "./app/auth";
import { ChangePassword } from "./app/users/page/password";
import { AuthContext } from "./shared/context/auth-context";
import { ScrollToTop } from "./shared/hook/scroll-to-top";
import Admin from "./app/admin/page/Admin";
import Home from "./app/home/page/home/Home";
import Payment from "./app/payment/page/Payment";
import ProtectRoutes from "./routes/ProtectRoutes";
import AboutUs from "./app/home/page/about-us/about-us";
import HomeCatalog from "./app/home/page/home/HomeCatalog";
import ProductDetail from "./app/product/components/ProductDetail";
import ProductsList from "./app/admin/components/product-management/ProductsList";
import TransactionsList from "./app/admin/components/transaction-management/TransactionsList";
import ProfileUser from "./app/users/page/profile/ProfileUser";
import EditProfile from "./app/users/components/profile/EditProfile";
import PostProduct from "./app/users/page/post-product/PostProduct";
import InvoiceUser from "./app/users/page/invoice/InvoiceUser";
import ConfirmEmail from "./app/users/page/password/ConfirmEmail";
import NotFound from "./shared/components/UIElement/ErrorPage/NotFound";
import FormChangePassword from "./app/users/components/password-auth/FormChangePassword";
import ListProductsPosted from "./app/users/components/list-product-posted/ListProductsPosted";

function App() {
  const authContext = useContext(AuthContext);

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
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            {/* Public Page */}

            {/* Require token */}
            <Route path="/reset-password/:token" element={<ChangePassword />} />
            {/* Require token */}
            <Route path="/:userId/post-product" element={<PostProduct />} />

            {/* Logged In page */}
            <Route
              element={<ProtectRoutes isAllowed={!!authContext.isLoggedIn} />}
            >
              <Route path="/:userId/payment" element={<Payment />} />
              <Route path="/:userId/profile" element={<ProfileUser />} />
              <Route
                path="/:userId/change-password"
                element={<FormChangePassword />}
              />
              <Route path="/:userId/myAds" element={<ListProductsPosted />} />
              <Route path="/:userId/edit" element={<EditProfile />} />
              {/* <Route path="/:userId/post-product" element={<PostProduct />} /> */}
              <Route path="/:userId/invoices" element={<InvoiceUser />} />
            </Route>
            {/* Logged In page */}

            {/* Admin page */}
            <Route
              element={
                <ProtectRoutes
                  isAllowed={
                    authContext.isLoggedIn &&
                    authContext.roles.includes("ROLE_MANAGER")
                  }
                />
              }
            >
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/product/list" element={<ProductsList />} />
              <Route path="/admin/transition" element={<TransactionsList />} />
            </Route>
            {/* Admin page */}

            {/* Error Page */}
            <Route path="*" element={<NotFound />} />
            {/* Error Page */}
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
