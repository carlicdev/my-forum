import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/forums" className="nav-link" href="#">Forums<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" href="#">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link" href="#">Register</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/" className="dropdown-item" href="#">Action</Link>
          <Link to="/" className="dropdown-item" href="#">Another action</Link>
          <Link to="/" className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}

export default Navbar;