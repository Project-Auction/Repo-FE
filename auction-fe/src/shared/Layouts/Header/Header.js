import "./Header.css";

function Header(props) {
  return <div className="header-wrapper">{props.children}</div>;
}

export default Header;
