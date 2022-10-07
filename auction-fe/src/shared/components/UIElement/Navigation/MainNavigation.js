import Header from "../../Layouts/Header";
import HeaderNavInner from "../../Layouts/HeaderNavInner";
import NavLinks from "./NavLinks";

function MainNavigation({ noHeaderInner }) {
  return (
    <>
      {/* SideDrawer */}
      {/* SideDrawer */}

      <Header>
        <NavLinks />
      </Header>
      {!noHeaderInner && <HeaderNavInner />}
    </>
  );
}

export default MainNavigation;
