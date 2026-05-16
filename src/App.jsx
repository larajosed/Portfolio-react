import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" />
          <Route path="/sobre-mi" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
