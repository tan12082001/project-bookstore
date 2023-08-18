import '../styles/nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className="nav-links">
      <li className="link">
        <Link to="/">Books</Link>
      </li>
      <li className="link">
        <Link to="/Categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
