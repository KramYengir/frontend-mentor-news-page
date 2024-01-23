import PropTypes from "prop-types";

import "./Nav.css";

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "open" : ""}>
      <ul>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            New
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Popular
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Trending
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  isMenuOpen: false,
};

export default Nav;
