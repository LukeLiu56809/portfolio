import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Resume from './pages/Resume';
import GobotProject from './pages/GobotProject';
import TrfProject from './pages/TrfProject';
import SharkProject from './pages/SharkProject';
import IRProject from './pages/IRProject';
import BLVProject from './pages/BLVProject';
import EmbeddedProject from './pages/EmbeddedProject';

function App() {
  return (
    <Router>
      <div className="text-black duration-200 ease-out dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/gobot" element={<GobotProject />} />
          <Route path="/projects/trf" element={<TrfProject />} />
          <Route path="/projects/shark" element={<SharkProject />} />
          <Route path="/projects/ir" element={<IRProject />} />
          <Route path="/projects/blv" element={<BLVProject />} />
          <Route path="/projects/embedded" element={<EmbeddedProject />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
