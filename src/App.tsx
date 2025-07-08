import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelBookingPage from './Components/Bookings-Page/HotelBooking';
import Homepagecarouse from './Components/Homepage/HomePage';
import { Header } from './Components/Header/Header';
import { FooterSection } from './Components/Footer/Footer';
import AboutUsPage from './Components/AboutUs/AboutUsPage';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <>
    <Header />
    <Router>
    <Routes>
    <Route path="/" element={<Homepagecarouse />} />
        <Route path="/hotel-booking" element={<HotelBookingPage />} /> 
        <Route path="/aboutus" element={<AboutUsPage/>}/>
    </Routes>
    </Router>
    <FooterSection />
     </>
  )
}

export default App
