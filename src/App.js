import Navbar from './components/Navbar/NavBar'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './components/About';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/kollegs_' element={<Home />} />
        <Route path='/kollegs_/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
