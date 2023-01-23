import { useLocation } from "react-router-dom";

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
import { ProSidebarProvider } from "react-pro-sidebar";
import WeightLiftingDetails from "./screens/detailscreens/WeightLiftingDetails";
import BootCampDetails from "./screens/detailscreens/BootCampDetails";
import MartialArtsDetails from "./screens/detailscreens/MartialArtsDetails";
import MentalTrainingDetails from "./screens/detailscreens/MentalTrainingDetails";
import PtAcademyDetails from "./screens/detailscreens/PtAcademyDetails";
import PersonalTrainingDetails from "./screens/detailscreens/PersonalTrainingDetails";
import ScheduleComponent from "./components/ScheduleComponent";
import PtScreen from "./screens/PtScreen";

function App() {
  const location = useLocation();

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
        <Route path="/boxing" element={<BoxingDetails />} />
        <Route path="/weightlifting" element={<WeightLiftingDetails />} />
        <Route path="/bootcamp" element={<BootCampDetails />} />
        <Route path="/martialarts" element={<MartialArtsDetails />} />
        <Route path="/mentaltraining" element={<MentalTrainingDetails />} />
        <Route path="/ptacademy" element={<PtAcademyDetails />} />
        <Route path="/personaltraining" element={<PersonalTrainingDetails />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
      <MobileFooter currentPage={location.pathname} />

      <Footer currentPage={location.pathname} />
    </div>
  );
}

export default App;
