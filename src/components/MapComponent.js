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

  const pinStyle = {
    path: "M22-48c-12.15 0-22 9.85-22 22 0 13.2 21.95 26.78 21.95 26.78s.05-.05.13-.13c.32-.4.81-.65 1.37-.65.98 0 1.77.79 1.77 1.77 0 .39-.13.75-.34 1.03-.09.11-.17.22-.25.34-.07.12-.13.25-.19.38-.04.1-.08.21-.11.32-.03.11-.06.22-.08.34-.01.07-.02.13-.03.2-.01.1-.02.2-.02.3 0 .98.79 1.77 1.77 1.77.98 0 1.77-.79 1.77-1.77 0-.1-.01-.2-.02-.3-.01-.07-.02-.13-.03-.2-.02-.12-.05-.23-.08-.34-.06-.13-.12-.26-.19-.38-.08-.12-.16-.23-.25-.34-.21-.28-.34-.64-.34-1.03 0-.98.79-1.77 1.77-1.77.56 0 1.05.25 1.37.65.08.08.13.13.13.13s21.95-13.58 21.95-26.78c0-12.15-9.85-22-22-22z",
    fillColor: "#f5aac9",
    fillOpacity: 1,
    strokeColor: "#3c469c",
    strokeWeight: 4,
    scale: 1.5,
  };

  if (!isLoaded) return <div>Laddar Google Maps...</div>;
  return (
    <>
      <GoogleMap
        zoom={17}
        options={{ styles: mapStyles }}
        center={position}
        mapContainerClassName="mapStyleClass"
      >
        <Marker
          position={position}
          icon={pinStyle}
          optimized={false}
          anchor={{ x: 22, y: 22 }}
        />
      </GoogleMap>
    </>
  );
};

export default MapComponent;
