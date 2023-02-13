import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MembershipScreen from "./screens/MembershipScreen";
import LandingScreen from "./screens/LandingScreen";
import ScheduelScreen from "./screens/ScheduleScreen";
import CampScreen from "./screens/CampScreen";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import ShopScreen from "./screens/ShopScreen";
import MobileFooter from "./components/MobileFooter";
import TrainingScreen from "./screens/TrainingScreen";
import TestScreen from "./screens/TestScreen";

import ScheduleComponent from "./components/ScheduleComponent";
import PtScreen from "./screens/PtScreen";
import DetailsScreen3 from "./screens/detailscreens/DetailsScreen3";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      style={{
        backgroundColor: location.pathname === "/booking" ? "#3C469C" : "black",
      }}
      className="App"
    >
      {location.pathname !== "/membership" &&
        location.pathname !== "/schedule" &&
        location.pathname !== "/campbooking" &&
        location.pathname !== "/ptschedule" &&
        location.pathname !== "/weeklyschedule" && (
          <Header currentPage={location.pathname} />
        )}
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/booking" element={<LandingScreen />} />
        <Route path="/weeklyschedule" element={<ScheduleComponent />} />
        <Route path="/training" element={<TrainingScreen />} />
        <Route path="/membership" element={<MembershipScreen />} />
        <Route path="/schedule" element={<ScheduelScreen />} />
        <Route path="/campbooking" element={<CampScreen />} />
        <Route path="/ptschedule" element={<PtScreen />} />
        <Route path="/details" element={<DetailsScreen3 />} />
        <Route path="/boxing" element={<DetailsScreen3 />} />
        <Route path="/weightlifting" element={<DetailsScreen3 />} />
        <Route path="/bootcamp" element={<DetailsScreen3 />} />
        <Route path="/mentaltraining" element={<DetailsScreen3 />} />
        <Route path="/personaltraining" element={<DetailsScreen3 />} />
        <Route path="/boxing3" element={<DetailsScreen3 />} />
        <Route path="/martialarts" element={<DetailsScreen3 />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/test" element={<TestScreen />} />
      </Routes>
      <MobileFooter currentPage={location.pathname} />

      <Footer currentPage={location.pathname} />
    </div>
  );
}

export default App;
