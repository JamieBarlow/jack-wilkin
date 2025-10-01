"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import RichTextRenderer from "./RichTextRenderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Icon } from "leaflet";
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface MapProps {
  locations: Location[];
  addresses: Document[];
  className?: string;
  zoom?: number;
}

interface Location {
  lat: number;
  lon: number;
}

const Map = ({ locations, addresses, className, zoom = 13 }: MapProps) => {
  const markerIcon = new Icon({
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

  // Styling for RichTextRenderer
  const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-xs leading-0.5">{children}</p>
  );
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) => text.replace("!", "?"),
  };

  return (
    <MapContainer
      center={[lat + 0.002, lon]}
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
            <Popup keepInView>
              <RichTextRenderer
                documents={addresses[index]}
                options={options}
              />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
