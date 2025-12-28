import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

function AppContent() {
  const location = useLocation();
  const isInitialLoad = !sessionStorage.getItem('hasNavigated');

  useEffect(() => {
    // Mark that navigation has occurred
    if (isInitialLoad) {
      sessionStorage.setItem('hasNavigated', 'true');
      // Remove initial-load class after a short delay to allow first page animations
      setTimeout(() => {
        document.body.classList.remove('initial-load');
      }, 1000);
    } else {
      // On subsequent navigations, ensure the class is removed
      document.body.classList.remove('initial-load');
    }
  }, [location.pathname, isInitialLoad]);

  useEffect(() => {
    // Add initial-load class on first page load
    if (isInitialLoad) {
      document.body.classList.add('initial-load');
    }
  }, []);

  return (
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
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;