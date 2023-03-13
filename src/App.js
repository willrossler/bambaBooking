import {
  Routes,
  Route,
  ScrollRestoration,
  useLocation,
  Router,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MembershipScreen from "./screens/MembershipScreen";
import LandingScreen from "./screens/LandingScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const location = useLocation();

  const { pathname } = useLocation();
  useEffect(() => {
    if (location.hash === "") {
      window.scrollTo(0, 0);
    }
  }, [location]);
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
        <Route path="/ungdomstraning" element={<DetailsScreen3 />} />
        <Route path="/foretagstraning" element={<DetailsScreen3 />} />
        <Route path="/boxing3" element={<DetailsScreen3 />} />
        <Route path="/martialarts" element={<DetailsScreen3 />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/medlemskap" element={<MedlemskapScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/najmedin" element={<NajDesktop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
