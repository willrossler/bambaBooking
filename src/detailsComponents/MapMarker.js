import React from "react";
import "../componentStyles/mapMarker.css";
const MapMarker = () => {
  return (
    <div class="marker">
      <div class="circle outer-circle"></div>
      <div class="circle middle-circle"></div>
      <div class="circle inner-circle"></div>
    </div>
  );
};

export default MapMarker;
