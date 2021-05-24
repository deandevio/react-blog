import "./App.css";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="nav">
        <ul className="nav">
          <li className="nav home">
            <p className="home">Home</p>
          </li>
          <li className="nav about">
            <p className="about">About</p>
          </li>
          <li className="nav blogs">
            <p className="blogs">Blogs</p>
          </li>
          <li className="nav login">
            <p className="login">Log in</p>
          </li>
          <li className="nav signup">
            <p className="signup">Sign up</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
