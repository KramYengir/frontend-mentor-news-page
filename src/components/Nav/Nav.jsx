// import props
import "./Nav.css";

const Nav = ({ isMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "open" : ""}>
      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </nav>
  );
};

export default Nav;
