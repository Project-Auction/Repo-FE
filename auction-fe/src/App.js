import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import usePaginate from "./shared/hook/usePaginate";
import Admin from "./app/admin/page/Admin";
import Home from "./app/home/page/home/Home";
import Payment from "./app/payment/page/Payment";
import ProtectRoutes from "./routes/ProtectRoutes";
import MainNavigation from "./shared/components/UIElement/Navigation/MainNavigation";
import Footer from "./shared/components/Layouts/Footer";
import AboutUs from "./app/home/page/about-us/about-us";
import Pagination from "./shared/components/UIElement/Pagination/Pagination";

function App() {
  const [user, setUser] = useState();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { paginate } = usePaginate();
  const storage = paginate(data, currentPage, 10);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setData(res.data);
    };

    fetch();
  }, []);

  const handleRedirectPage = useCallback((pageNumber) => {
    console.log("1");
    setCurrentPage(pageNumber);
  }, []);

  return (
    <div className="App" style={{ marginTop: 100 }}>
      <ul className="table mb-4">
        {storage.length > 0 &&
          storage.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>

      <Pagination
        capacityPage="10"
        totalData={data.length}
        currentPage={currentPage}
        onRedirect={handleRedirectPage}
      />

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
