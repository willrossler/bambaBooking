import React from "react";

const MapMobile = () => {
  const mapStyles = [
    {
      feature: "administrative",
      element: "labels.text.fill",
      color: "0x444444",
    },
    {
      feature: "administrative.country",
      element: "geometry",
      visibility: "off",
    },
    {
      feature: "administrative.country",
      element: "geometry",
      saturation: "-3",
    },
    { feature: "administrative.country", element: "geometry", lightness: "29" },
    { feature: "landscape", element: "all", color: "0xf2f2f2" },
    { feature: "poi", element: "all", visibility: "off" },
    { feature: "road", element: "all", saturation: -100 },
    { feature: "road", element: "all", lightness: 45 },
    { feature: "road.highway", element: "all", visibility: "simplified" },
    { feature: "road.arterial", element: "labels.icon", visibility: "off" },
    { feature: "transit", element: "all", visibility: "off" },
    { feature: "water", element: "all", color: "0xb7b7b7" },
    { feature: "water", element: "all", visibility: "on" },
  ];

  const mapStylesString = mapStyles
    .map((style) => {
      const styleKeys = Object.keys(style);
      return styleKeys
        .map((key) => {
          const value = style[key];
          return `${key}:${value}`;
        })
        .join("|");
    })
    .join("&style=");

  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Lützengatan+10,+11520+Stockholm&zoom=17&size=400x400&markers=color:red%7CLützengatan+10,+11520+Stockholm&style=${mapStylesString}&key=AIzaSyBo6BuIHPsmjbTKwZIWg0mPpohgu3JHqow`;

  return (
    <div>
      <img
        className="img-fluid"
        src={staticMapUrl}
        alt="Map showing Lützengatan 10, 11520 Stockholm"
      />
    </div>
  );
};

export default MapMobile;
