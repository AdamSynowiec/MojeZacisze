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
        <section
            style={{
                backgroundImage: `url(http://localhost:3000/static/media/SZYM_parking_001.edb7e09db2533c1ddb04.jpg)`,
                backgroundSize: '100%',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="bg-black/[0.5] py-24 px-5">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="mx-auto max-w-5xl text-center mb-12">
                        <h2 className="drop-shadow-xl font-poppins font-thin uppercase text-3xl md:text-4xl lg:text-5xl pb-4 text-white">
                            Lokalizacja
                        </h2>
                        <p className="drop-shadow-xl font-poppins font-thin text-lg md:text-xxl lg:text-3xl text-white">
                            Osiedle znajduje się w jednej z najbardziej pożądanych lokalizacji w mieście.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div class="lg:col-span-3 grid overflow-hidden gap-px rounded-lg grid-cols-1">
                            {features.map(({ id, title, description }) => (
                                <div class="flex flex-col gap-3 bg-background p-5 md:gap-6"
                                    key={id}
                                    className="group bg-white p-5 cursor-pointer hover:bg-gray-100 transition-all"
                                    onMouseEnter={() => handleMouseEnter(id)}
                                    onMouseLeave={() => handleMouseLeave(id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket size-6 shrink-0">
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                    </svg>
                                    <div className='mt-2'>
                                        <h2 class="text-base font-semibold  font-montserrat text-gray-900">{title}</h2>
                                        <p class="text-sm font-montserrat text-gray-500">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Section */}
                        <div className="lg:col-span-9 relative z-10">
                            <MapContainer
                                center={[50.011619918187705, 19.877485787333782]} // Map center coordinates
                                zoom={15}
                                className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden"
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                />

                                {/* Map Markers */}
                                {locations.map(({ id, position, title, description }) => (
                                    <Marker
                                        key={id}
                                        position={position}
                                        icon={activeMarkerId === id ? activeCustomIcon : customIcon}
                                        ref={(el) => (markerRefs.current[id] = el)}
                                    >
                                        <Popup>
                                            <div className="text-sm">
                                                <strong className="text-gray-800">{title}</strong>
                                                <p className="text-gray-600 mt-1">{description}</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localization;
