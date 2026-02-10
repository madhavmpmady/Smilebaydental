import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import LearnMore from './pages/LearnMore';
import DoctorProfile from './pages/DoctorProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Doctors />
              </>
            }
          />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
