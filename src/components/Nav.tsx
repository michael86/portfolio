import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-bar__link">
          <a href="#landing">Home</a>
        </li>

        <li className="nav-bar__link">
          <a href="#about">About</a>
        </li>
        <li className="nav-bar__link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-bar__link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
