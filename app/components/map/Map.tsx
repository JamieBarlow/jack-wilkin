"use client";
import RichTextRenderer from "../RichTextRenderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
// import "leaflet/dist/leaflet.css";
// import * as L from "leaflet";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { useEffect, cache } from "react";
import { Map as Mapbox, MapProps } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

// export interface MapProps {
//   locations: Location[];
//   addresses: Document[];
//   className?: string;
//   zoom?: number;
//   width?: number;
//   height?: number;
// }

interface Location {
  lat: number;
  lon: number;
}

interface Props extends MapProps {
  locations: Location[];
}

const Map = ({ locations, ...mapProps }: Props) => {
  // Get average (centre) lat and lon values from coordinate data
  let lat = locations[0].lat;
  let lon = locations[0].lon;
  if (locations.length > 1) {
    lat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    lon = locations.reduce((sum, loc) => sum + loc.lon, 0) / locations.length;
  }
  return (
    <Mapbox
      mapboxAccessToken=""
      initialViewState={{
        longitude: lon,
        latitude: lat,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

// const Map = ({ locations, addresses, className, zoom = 13 }: MapProps) => {
//   // const markerIcon = new Icon({
//   //   iconUrl: "/icons/location-pin.png",
//   //   iconSize: [32, 32],
//   //   iconAnchor: [16, 32],
//   //   popupAnchor: [0, -32],
//   // });

//   // const MarkerIcon = L.icon({
//   //   iconUrl: "/icons/location-pin.png",
//   //   iconSize: [32, 32],
//   //   iconAnchor: [16, 32],
//   //   popupAnchor: [0, -32],
//   // });

//   useEffect(() => {
//     delete (L.Icon.Default.prototype as any)._getIconUrl;
//     L.Icon.Default.mergeOptions({
//       iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
//       iconUrl: "leaflet/images/marker-icon.png",
//       shadowUrl: "leaflet/images/marker-shadow.png",
//     });
//   }, []);

//   // const MarkerIcon = () => {
//   //   return (
//   //     <Image
//   //       src="/icons/location-pin.png"
//   //       alt="map location pin"
//   //       width={32}
//   //       height={32}
//   //     />
//   //   );
//   // };

//   // Styling for RichTextRenderer
//   const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//     <p className="text-xs leading-0.5">{children}</p>
//   );
//   const options: Options = {
//     renderNode: {
//       [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     },
//     renderText: (text) => text.replace("!", "?"),
//   };

//   return (
//     <MapContainer
//       center={[lat + 0.002, lon]}
//       zoom={zoom}
//       scrollWheelZoom={false}
//       className={className}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {locations.map((location, index) => {
//         return (
//           <Marker
//             position={[location.lat, location.lon]}
//             // icon={MarkerIcon}
//             key={index}
//           >
//             <Popup keepInView>
//               <RichTextRenderer
//                 documents={addresses[index]}
//                 options={options}
//               />
//             </Popup>
//           </Marker>
//         );
//       })}
//     </MapContainer>
//   );
// };

// export default Map;
