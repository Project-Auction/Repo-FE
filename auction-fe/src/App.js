import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from "./app/admin/page/Admin";
import Home from "./app/home/page/home/Home";
import Payment from "./app/payment/page/Payment";
import ProtectRoutes from "./routes/ProtectRoutes";
import AboutUs from "./app/home/page/about-us/about-us";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
