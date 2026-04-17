import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Now importing the dedicated Home component
import RSVP from './RSVP'; 
import PortfolioPage from './pages/PortfolioPage'; 
import { WeddingProvider } from './WeddingContext'; 

import './App.css'; // Only global styles go here now

export default function App() {
  return (
    <WeddingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/portfolio/:role" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </WeddingProvider>
  );
}