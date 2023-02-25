import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "655px",
};

const center = {
  lat: 35.3947620634088,
  lng: 11.04047427745604,
};

const Localisation = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.key,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Localisation;
