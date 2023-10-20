import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Me</Link></li>
          <li><Link to="/Contact-Me">Contact Me</Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default Navbar