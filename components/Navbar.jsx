import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <img
            src="/assets/react-icon-small.png"
            alt="Blue React logo"
            className="nav-logo"
          />
          <h3 className="site-name">ReactFacts</h3>
          <h4 className="course-section">React Course - Project 1</h4>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
