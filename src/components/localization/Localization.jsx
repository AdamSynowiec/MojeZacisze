import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Localization = () => {
    // State to track active marker
    const [activeMarkerId, setActiveMarkerId] = useState(null);

    // Define multiple custom icons
    const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1076/1076983.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    const activeCustomIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1076/1076983.png', // Different icon for active
        iconSize: [36, 36], // Slightly larger
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
    });

    // Marker locations
    const locations = [
        { id: 1, position: [50.011619918187705, 19.877485787333782], title: 'Moje Zacisze', description: 'Inwestycja' },
        { id: 2, position: [50.016943435779794, 19.873700257094733], title: 'Szkoła Podstawowa Nr 66', description: 'Szkoła Podstawowa Nr 66' },
        { id: 3, position: [50.01602697477834, 19.885019214042543], title: 'Przychodnia Weterynaryjna', description: 'Przychodnia Weterynaryjna' },
        { id: 4, position: [50.013316487820376, 19.884685411022634], title: 'Leroy Merlin', description: 'Leroy Merlin' },
    ];

    const features = [
        { id: 1, title: 'Moje Zacisze', description: "Inwestycja" },
        { id: 2, title: 'Szkoła Podstawowa Nr 66', description: "Szkoła Podstawowa Nr 66" },
        { id: 3, title: 'Przychodnia Weterynaryjna', description: "Przychodnia Weterynaryjna" },
        { id: 4, title: 'Leroy Merlin', description: "Leroy Merlin" },
    ];

    // References for markers
    const markerRefs = useRef({});

    // Event Handlers
    const handleMouseEnter = (id) => {
        setActiveMarkerId(id);
        if (markerRefs.current[id]) {
            markerRefs.current[id].openPopup(); // Open popup on hover
        }
    };

    const handleMouseLeave = (id) => {
        setActiveMarkerId(null);
        if (markerRefs.current[id]) {
            markerRefs.current[id].closePopup(); // Close popup
        }
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-montserrat text-6xl font-semibold text-zinc-800 mb-6">
                        Lokalizacja
                    </h2>
                    <p className="font-montserrat text-lg text-zinc-500 leading-relaxed">
                        Osiedle znajduje się w jednej z najbardziej pożądanych lokalizacji w mieście.
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    {/* Features List */}
                    <div className="mt-12 col-span-12 lg:col-span-3">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col"
                                onMouseEnter={() => handleMouseEnter(feature.id)}
                                onMouseLeave={() => handleMouseLeave(feature.id)}
                            >
                                <div className='bg-white p-4 mb-4 drop-shadow-lg border cursor-pointer hover:drop-shadow-md transition-all'>
                                    <h3 className="font-montserrat text-lg font-normal text-zinc-800">
                                        {feature.title}
                                    </h3>
                                    <p className="font-montserrat text-sm text-zinc-600 mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="mt-12 relative z-10 col-span-12 lg:col-span-9">
                        <MapContainer
                            center={[50.011619918187705, 19.877485787333782]} // Center position
                            zoom={13}
                            className="w-full h-[500px] rounded-lg shadow-lg"
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />

                            {/* Markers */}
                            {locations.map((location) => (
                                <Marker
                                    key={location.id}
                                    position={location.position}
                                    icon={activeMarkerId === location.id ? activeCustomIcon : customIcon}
                                    ref={(el) => (markerRefs.current[location.id] = el)}
                                >
                                    <Popup>
                                        <div className="text-sm">
                                            <strong className="text-zinc-800">{location.title}</strong>
                                            <p className="text-zinc-600 mt-1">{location.description}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localization;
