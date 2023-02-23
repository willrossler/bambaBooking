import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapMarker from "../detailsComponents/MapMarker";
import "../componentStyles/mapStyles.css";

const MapComponent = () => {
  const mapStyles = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
        {
          saturation: "-3",
        },
        {
          lightness: "29",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#b7b7b7",
        },
        {
          visibility: "on",
        },
      ],
    },
  ];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBo6BuIHPsmjbTKwZIWg0mPpohgu3JHqow",
  });

  const position = { lat: 59.33816952392279, lng: 18.092797456516912 };

  if (!isLoaded) return <div>Laddar Google Maps...</div>;
  return (
    <>
      <GoogleMap
        zoom={17}
        options={{ styles: mapStyles }}
        center={position}
        mapContainerClassName="mapStyleClass"
      >
        <Marker position={position} icon={<MapMarker />} optimized={false} />
      </GoogleMap>
    </>
  );
};

export default MapComponent;
