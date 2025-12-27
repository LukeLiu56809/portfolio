import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import RoomSenseProject from './pages/RoomSenseProject';

function App() {
  return (
    <Router basename="/">
      <div className="text-black duration-200 ease-out dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/gobot" element={<GobotProject />} />
          <Route path="/trf" element={<TrfProject />} />
          <Route path="/shark" element={<SharkProject />} />
          <Route path="/ir" element={<IRProject />} />
          <Route path="/blv" element={<BLVProject />} />
          <Route path="/embedded" element={<EmbeddedProject />} />
          <Route path="/roomsense" element={<RoomSenseProject />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;