import { memo } from "react";
import Header from "../../Layouts/Header";
import HeaderNavInner from "../../Layouts/HeaderNavInner";
import NavLinks from "./NavLinks";

function MainNavigation({ headerInner }) {
  return (
    <>
      {/* SideDrawer */}
      {/* SideDrawer */}

      <Header>
        <NavLinks />
      </Header>
      {headerInner && <HeaderNavInner />}
    </>
  );
}

export default memo(MainNavigation);
