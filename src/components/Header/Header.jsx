import "./Header.css";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import menuClose from "../../assets/images/icon-menu-close.svg";
import Nav from "../Nav/Nav";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container">
      <img src={logo} alt="Logo of company" />
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={isMenuOpen ? menuClose : menu} alt="" />
      </button>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
