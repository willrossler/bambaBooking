import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../componentStyles/mapStyles.css";

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBo6BuIHPsmjbTKwZIWg0mPpohgu3JHqow",
  });

  if (!isLoaded) return <div>LOADING MAP...</div>;
  return (
    <>
      <GoogleMap
        className=""
        zoom={17}
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
