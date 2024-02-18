import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img
          src="/assets/react-icon-small.png"
          alt="Blue React logo"
          className="nav--icon"
        />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  );
};

export default Navbar;
