// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom'; // remove BrowserRouter here
import HotelBookingPage from './Components/Bookings-Page/HotelBooking';
import Homepagecarouse from './Components/Homepage/HomePage';
import { Header } from './Components/Header/Header';
import { FooterSection } from './Components/Footer/Footer';
import AboutUsPage from './Components/AboutUs/AboutUsPage';
import GalleryPage from './Components/GalleryPage/GalleryPage';
import RoomPage from './Components/RoomsPage/RoomPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepagecarouse />} />
        <Route path="/hotel-booking" element={<HotelBookingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/rooms" element={<RoomPage />}  />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
