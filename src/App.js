import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingScreen from "./screens/BookingScreen";
import LandingScreen from "./screens/LandingScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FooterMobile from "./components/FooterMobile";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/booking" element={<BookingScreen />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
