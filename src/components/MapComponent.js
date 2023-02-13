import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../componentStyles/mapStyles.css";

const MapComponent = () => {
  const styles = [
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
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.attraction",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.government",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.medical",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.place_of_worship",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.school",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.sports_complex",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
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

  if (!isLoaded) return <div>LOADING MAP...</div>;
  return (
    <>
      <GoogleMap
        className=""
        zoom={17}
        options={{ styles: styles }}
        center={{ lat: 59.33816952392279, lng: 18.092797456516912 }}
        mapContainerStyle={{
          width: "100%",
          height: "550px",
        }}
      >
        <Marker position={{ lat: 59.33813637421641, lng: 18.09273750252896 }} />
      </GoogleMap>
    </>
  );
};

export default MapComponent;
