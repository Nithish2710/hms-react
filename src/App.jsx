import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelBookingPage from './Components/Bookings-Page/HotelBooking';
import Homepagecarouse from './Components/Homepage-Carousel/HotelBookingPage';

function App() {

  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Homepagecarouse />} />
          <Route path="/hotel-booking" element={<HotelBookingPage />} />
      </Routes>
      </Router>
     </>
  )
}

export default App
