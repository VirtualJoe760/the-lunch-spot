import * as React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../images/map-marker.svg";
import { useEffect, useState } from "react";

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [25, 50], // Point of the icon which will correspond to marker's location
});

const Map = () => {
  const [isClient, setIsClient] = useState(false);
  const position = [33.7412275, -116.3582463]; // Coordinates for The Lunch Spot @ Joni Drive

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // return null during ssr
  }

  return (
    <MapContainer
      center={position}
      zoom={15}
      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-100 z-0"
      scrollWheelZoom={false} // Disable zoom on scroll
      dragging={false} // Disable dragging (map moving)
      doubleClickZoom={false} // Disable zoom on double-click
      touchZoom={false} // Disable zoom on touch (mobile)
      zoomControl={false} // Hide the zoom control buttons
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon} />
    </MapContainer>
  );
};

export default Map;
