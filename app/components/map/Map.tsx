"use client";
import RichTextRenderer from "../RichTextRenderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
// import Map from "react-map-gl/mapbox";
import dynamic from "next/dynamic";
import "mapbox-gl/dist/mapbox-gl.css";
const Mapbox = dynamic(() => import("react-map-gl/mapbox").then((m) => m.Map), {
  ssr: false,
});

export interface MapProps {
  locations: Location[];
  addresses: Document[];
  className?: string;
  zoom?: number;
  width?: number;
  height?: number;
}

interface Location {
  lat: number;
  lon: number;
}

const Map = ({ locations, addresses }: MapProps) => {
  // Get average (centre) lat and lon values from coordinate data
  let lat = locations[0].lat;
  let lon = locations[0].lon;
  if (locations.length > 1) {
    lat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    lon = locations.reduce((sum, loc) => sum + loc.lon, 0) / locations.length;
  }
  return (
    <Mapbox
      key="mapbox-instance"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: lon,
        latitude: lat,
        zoom: 12,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

// {locations.map((location, index) => {
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

export default Map;
