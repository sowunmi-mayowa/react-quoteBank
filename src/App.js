import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import {Routes, Route} from 'react-router-dom';
import Contact from './components/pages/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
    </div>
  );
}

export default App;
