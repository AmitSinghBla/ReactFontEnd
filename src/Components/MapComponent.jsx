// MapComponent.js
import React, { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import '../Styles/MapComponent.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
 

const MapComponent = () => {
    const [center, setCenter] = React.useState({ lat: 34.200905, lng: 74.362271 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const markerPosition = { lat: 34.200905, lng: 74.362271 };

    const blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    return (
        <>
        <MapContainer center={center}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
        >
            <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=B8iQmWVGSYGDnoe2WNu9'
                attribution='https://api.maptiler.com/maps/basic-v2/256/tiles.json?key=B8iQmWVGSYGDnoe2WNu9' />

        <Marker position={markerPosition} icon={blueIcon} />
        <Marker position={{ lat: 40.200905, lng: 74.362271 }} icon={blueIcon} />
                    
        </MapContainer>
        </>
    );
};

export default MapComponent;
