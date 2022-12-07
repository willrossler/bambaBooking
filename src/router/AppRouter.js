import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingScreen from "../screens/BookingScreen";
import BookingScreen from "../screens/BookingScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/book" element={<BookingScreen />} />
    </Routes>
  );
};

export default AppRouter;
