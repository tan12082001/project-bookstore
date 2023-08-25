import '../styles/nav.css';
import { Link } from 'react-router-dom';
import UserCircle from './Icons';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className="nav-links">
      <li className="link">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="link">
        <Link to="/Categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="user-icon">
      <UserCircle />
    </div>
  </nav>
);

export default Navbar;
