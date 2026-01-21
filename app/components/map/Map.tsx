"use client";
import RichTextRenderer from "../RichTextRenderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Map as Mapbox, Marker, Popup } from "react-map-gl/mapbox";

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

// Styling for RichTextRenderer popup
const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs leading-0.5 text-base-content">{children}</p>
);
const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: (text) => text.replace("!", "?"),
};

const Map = ({ locations, addresses }: MapProps) => {
  // Controls which popup is displayed on clicking a marker
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Get average (centre) lat and lon values from coordinate data
  let lat = locations[0].lat;
  let lon = locations[0].lon;
  if (locations.length > 1) {
    lat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    lon = locations.reduce((sum, loc) => sum + loc.lon, 0) / locations.length;
  }

  const lat_offset = 0.01;

  return (
    <Mapbox
      key="mapbox-instance"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: lon,
        latitude: lat + lat_offset,
        zoom: 12,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {locations.map((location, index) => {
        return (
          <Marker
            key={index}
            latitude={location.lat}
            longitude={location.lon}
            anchor="bottom"
            color="rgba(232, 95, 92, 1)"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setActiveIndex(index);
            }}
          ></Marker>
        );
      })}
      {activeIndex !== null && (
        <Popup
          offset={40}
          longitude={locations[activeIndex].lon}
          latitude={locations[activeIndex].lat}
          closeButton
          onClose={() => {
            setActiveIndex(null);
          }}
        >
          <div className="p-1">
            <RichTextRenderer
              documents={addresses[activeIndex]}
              options={options}
            />
          </div>
        </Popup>
      )}
      ;
    </Mapbox>
  );
};

export default Map;
