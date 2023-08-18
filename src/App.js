import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/books-page';
import Categories from './components/categories-page';
import Navbar from './components/nav-bar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
