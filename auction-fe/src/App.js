import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from "./app/admin/page/Admin";
import Home from "./app/home/page/home/Home";
import Payment from "./app/payment/page/Payment";
import ProtectRoutes from "./routes/ProtectRoutes";
import MainNavigation from "./shared/components/UIElement/Navigation/MainNavigation";
import Footer from "./shared/components/Layouts/Footer";
import AboutUs from "./app/home/page/about-us/about-us";
import Modal from "./shared/components/UIElement/Modal";

function App() {
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    setUser({
      id: "1",
      name: "Tuan",
      permissions: ["analyze"],
      roles: ["admin"],
    });
  };

  const handleClear = () => {
    setShow(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App" style={{ marginTop: 100 }}>
      {user ? (
        <button onClick={handleLogout}>LOG OUT</button>
      ) : (
        <button onClick={handleLogin}>LOGIN</button>
      )}

      <button
        onClick={() => {
          setShow(true);
        }}
      >
        SHOW MODAL
      </button>

      <Modal
        show={show}
        header="Modal"
        footer={
          <>
            <button className="btn btn-primary">BUTTON</button>
            <button className="btn btn-danger">BUTTON</button>
          </>
        }
        onClear={handleClear}
      >
        THIS IS MODAL
      </Modal>

      <Router>
        <MainNavigation />
        <Routes>
          {/* Public Page */}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
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

        <Footer />
      </Router>
    </div>
  );
}

export default App;
