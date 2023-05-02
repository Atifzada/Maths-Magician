import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import CalculatorStructure from './components/CalculatorStructure';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li><Link exact to="/">Home</Link></li>
          <li><Link exact to="/Calculator">Calculator</Link></li>
          <li><Link exact to="/Quotes">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalculatorStructure />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
