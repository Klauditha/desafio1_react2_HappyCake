import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/contact">Contacto</Link>
            </li>
          </ul>
          <a className="navbar-brand" href="#">
            Navbar w/ text
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
