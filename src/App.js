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
import BoxingDetails from "./screens/detailscreens/BoxingDetails";
import ContactScreen from "./screens/ContactScreen";
import ShopScreen from "./screens/ShopScreen";
import MobileFooter from "./components/MobileFooter";
import TrainingScreen from "./screens/TrainingScreen";
import WeightLiftingDetails from "./screens/detailscreens/WeightLiftingDetails";
import BootCampDetails from "./screens/detailscreens/BootCampDetails";
import DetailsScreen from "./screens/detailscreens/DetailsScreen";
import MentalTrainingDetails from "./screens/detailscreens/MentalTrainingDetails";
import PersonalTrainingDetails from "./screens/detailscreens/PersonalTrainingDetails";
import ScheduleComponent from "./components/ScheduleComponent";
import PtScreen from "./screens/PtScreen";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{ backgroundColor: "black" }} className="App">
      {location.pathname !== "/membership" &&
        location.pathname !== "/schedule" &&
        location.pathname !== "/camp" &&
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
        <Route path="/camp" element={<CampScreen />} />
        <Route path="/ptschedule" element={<PtScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
        <Route path="/boxing" element={<DetailsScreen />} />
        <Route path="/weightlifting" element={<DetailsScreen />} />
        <Route path="/bootcamp" element={<DetailsScreen />} />
        <Route path="/mentaltraining" element={<DetailsScreen />} />
        <Route path="/personaltraining" element={<DetailsScreen />} />
        <Route path="/martialarts" element={<DetailsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
      <MobileFooter currentPage={location.pathname} />

      <Footer currentPage={location.pathname} />
    </div>
  );
}

export default App;
