"use client";
import ReactDOM from "react-dom/client";
import RichTextRenderer from "../RichTextRenderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState, useId } from "react";
import mapboxgl from "mapbox-gl";

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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Generate unique id for container
  const mapId = useId();

  // Calculate center coordinates
  let lat = locations[0].lat;
  let lon = locations[0].lon;
  if (locations.length > 1) {
    lat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    lon = locations.reduce((sum, loc) => sum + loc.lon, 0) / locations.length;
  }
  const lat_offset = 0.01;

  // Initialize the map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lon, lat + lat_offset],
      zoom: 12,
    });

    return () => {
      // Clean up map and markers on unmount
      markersRef.current.forEach((m) => m.remove());
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, [lat, lon, lat_offset]);

  // Add markers imperatively
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    locations.forEach((location, index) => {
      const marker = new mapboxgl.Marker({ color: "rgba(232, 95, 92, 1)" })
        .setLngLat([location.lon, location.lat])
        .addTo(mapRef.current!);

      // Create popup content
      const popupDiv = document.createElement("div");
      popupDiv.className = "p-1";

      // Render React component into popup DOM element
      const root = ReactDOM.createRoot(popupDiv);
      root.render(
        <RichTextRenderer documents={addresses[index]} options={options} />,
      );

      const popup = new mapboxgl.Popup({ offset: 40 }).setDOMContent(popupDiv);
      marker.setPopup(popup);

      // Open popup on click
      marker.getElement().addEventListener("click", (e) => {
        e.stopPropagation();
        marker.togglePopup();
        setActiveIndex(index);
      });

      markersRef.current.push(marker);
    });
  }, [locations, addresses]);

  return (
    <div
      ref={mapContainerRef}
      id={mapId}
      style={{ width: "100%", height: 400 }}
    />
  );
};

export default Map;
