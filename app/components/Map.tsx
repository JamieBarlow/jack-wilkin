"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

interface MapProps {
  locations: Location[];
  className?: string;
  zoom?: number;
}

interface Location {
  lat: number;
  lon: number;
}

const Map = ({ locations, className, zoom = 13 }: MapProps) => {
  const markerIcon = L.icon({
    iconUrl: "/icons/location-pin.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  // Get average lat and lon values from coordinate data
  let lat = locations[0].lat;
  let lon = locations[0].lon;
  if (locations.length > 1) {
    lat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    lon = locations.reduce((sum, loc) => sum + loc.lon, 0) / locations.length;
  }

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => {
        return (
          <Marker
            position={[location.lat, location.lon]}
            icon={markerIcon}
            key={index}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
