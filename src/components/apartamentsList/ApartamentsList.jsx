import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Config } from '../../Config.js'

const HEADERS = [
    "Mieszkanie",
    "Kondygnacja",
    "Powierzchnia",
    "Pokoje",
    // "Cena",
    "Status",
    "Karta mieszkania",
];

const API_URL = `${Config.base.url}${Config.api.apartaments}`;
const API_KEY = Config.auth.API_KEY;

const ApartmentsList = () => {
    const [data, setApartamentsData] = useState([]);
    const [selectedApartment, setSelectedApartment] = useState(null);

    const handleEsc = (event) => {
        if (event.key === "Escape") {
            handleClosePopup();
        }
    };

    useEffect(() => {
        fetch(API_URL, {
            method: "GET",
            headers: {
                "api-key": API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data)) {
                    console.error("Unexpected data format:", data);
                    return;
                }

                const apartments = data.map((item) => ({
                    id: item.flat,
                    floor: item.floor,
                    area: item.area,
                    rooms: item.rooms,
                    // price: item.price,
                    state: item.state,
                    images: item.flat_images?.map(img =>
                        `${Config.base.url}${Config.cms.rootDir}${Config.cms.mediaDir}${img.path}`
                    ) || [],
                }));

                setApartamentsData(apartments);
            })
            .catch(error => console.error("Error fetching apartments:", error));
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleEsc);

        // Disable body scroll when popup is open
        if (selectedApartment) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [selectedApartment]);

    const handleViewClick = (apartment) => setSelectedApartment(apartment);
    const handleClosePopup = () => setSelectedApartment(null);

    return (
        <section className="pb-12 md:pb-24 px-5" id="lokale">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <div className="col-span-12 text-center max-w-2xl mx-auto md:pb-12">
                    <h2 className="font-poppins text-4xl md:text-5xl lg:text-[65px] font-extralight text-gray-800">
                        Lokale
                    </h2>
                </div>
                <div className="col-span-12">
                    <div className="overflow-x-auto bg-white">
                        <table className="w-full text-gray-600 text-center">
                            <thead className="bg-mainColor text-white">
                                <tr>
                                    {HEADERS?.map((header) => (
                                        <th
                                            key={header}
                                            className="py-2 h-[100px] px-4 text-sm md:text-[18px] font-normal border-b font-poppins"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data?.map((apartment) => (
                                    <tr
                                        key={apartment.id}
                                        className="hover:bg-slate-50 transition-all font-montserrat"
                                    >
                                        {Object.values(apartment)
                                            .slice(0, 5)
                                            .map((value, idx) => (
                                                <td
                                                    key={idx}
                                                    className={`text-sm py-2 px-4 md:text-[18px] border-b h-[50px] md:h-[90px] ${apartment.state === "Sprzedane"
                                                        ? "text-red-600"
                                                        : apartment.state === "Rezerwacja"
                                                            ? "text-yellow-600"
                                                            : "text-mainColor"
                                                        }`}
                                                >
                                                    {value}
                                                </td>
                                            ))}
                                        <td className="py-2 px-4 border-b text-sm md:text-base">
                                            <button
                                                onClick={() => handleViewClick(apartment)}
                                                className="hover:underline font-bold font-montserrat"
                                            >
                                                Zobacz
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {data.length === 0 && <p className="border-l-4 border-rose-800 p-4 bg-red-500 text-white font-poppins">Brak dostępnych lokali.</p>}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedApartment && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={handleClosePopup}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#424242] w-full h-full flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <button
                                onClick={handleClosePopup}
                                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
                            >
                                <svg
                                    className="w-12 h-12 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                            </button>
                            <div className="grid grid-cols-12 h-full">
                                <div className="col-span-12 overflow-y-auto flex items-center justify-center flex-col gap-12 p-4">
                                    {selectedApartment?.images?.map((src) => (
                                        <img
                                            key={src}
                                            src={src}
                                            alt="Rzut mieszkania"
                                            className="max-h-full w-auto"
                                        />
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ApartmentsList;
