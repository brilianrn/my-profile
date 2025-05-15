"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ReactNode } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapProps {
  coords: [number, number];
  location: ReactNode;
}

export const Maps = ({ coords, location }: MapProps) => {
  return (
    <MapContainer
      center={coords}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="My Location | Brilian Rachmad Nurwachidin"
      />
      <Marker position={coords}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};
