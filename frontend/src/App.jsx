import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import FreeGames from './pages/FreeGames';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

// Placeholder pages - you can create separate components for these later
const Contact = () => <div className="page-content"><h1>Contact</h1></div>;
const Blog = () => <div className="page-content"><h1>Blog</h1></div>;
const Reviews = () => <div className="page-content"><h1>Reviews</h1></div>;
const ApiAccess = () => <div className="page-content"><h1>API Access</h1></div>;
const Affiliate = () => <div className="page-content"><h1>Affiliate Program</h1></div>;
const PrivacyPolicy = () => <div className="page-content"><h1>Privacy Policy</h1></div>;
const TermsOfService = () => <div className="page-content"><h1>Terms of Service</h1></div>;
const CookiePolicy = () => <div className="page-content"><h1>Cookie Policy</h1></div>;
const RefundPolicy = () => <div className="page-content"><h1>Refund Policy</h1></div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/free-games" element={<FreeGames />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/api-access" element={<ApiAccess />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
