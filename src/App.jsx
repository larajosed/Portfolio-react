import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
