import { memo } from "react";
import Header from "../../../shared/components/Layouts/admin/Header";
import Navbar from "../../../shared/components/Layouts/admin/Navbar";

import "./Admin.css";

const Admin = (props) => {
  return (
    <div className="dashboard__admin-container">
      <div className="row">
        <div className="col-3 pr-0 pl-0">
          {/* Navbar */}
          <Navbar />
          {/* Navbar */}
        </div>
        <div className="col-9 pr-0 pl-0">
          <div className="dashboard__admin-right-area">
            {/* Header */}
            <Header />
            {/* Header */}

            <div className="admin__content">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Admin);
