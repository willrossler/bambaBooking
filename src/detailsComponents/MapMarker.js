// import React from "react";
// import "../componentStyles/mapMarker.css";
// const MapMarker = () => {
//   return (
//     <div class="marker">
//       <div class="circle outer-circle"></div>
//       <div class="circle middle-circle"></div>
//       <div class="circle inner-circle"></div>
//     </div>
//   );
// };

// export default MapMarker;

const MapMarker = () => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
      <circle fill="#ffffff" cx="22" cy="22" r="20" stroke="#3c469c" stroke-width="4"/>
      <circle fill="#f5aac9" cx="22" cy="22" r="12"/>
    </svg>
  `;
  const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    svgMarkup
  )}`;
  return <img src={svgUrl} alt="Map marker" />;
};
