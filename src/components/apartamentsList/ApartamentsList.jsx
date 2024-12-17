import React, { useEffect, useState } from "react";
import { FaEye } from 'react-icons/fa'

const MIN_AREA = 20;
const MAX_AREA = 200;

const ApartmentsList = () => {
    const [filters, setFilters] = useState({
        id: "",
        floor: "",
        areaRange: [MIN_AREA, MAX_AREA],
        exposure: "",
        rooms: "",
        price: "",
        status: "",
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        const rowData = [{
            id: "M01",
            rooms: 1,
            area: "54 m²",
            orientation: "Południe",
            floor: 2,
            price: "810,000 zł",
            status: "Dostępne",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 3,
            area: "65 m²",
            orientation: "Południe",
            floor: 3,
            price: "975,000 zł",
            status: "Dostępne",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 4,
            area: "72 m²",
            orientation: "Południe",
            floor: 3,
            price: "1 080,000 zł",
            status: "Rezerwacja",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 2,
            area: "45 m²",
            orientation: "Południe",
            floor: 1,
            price: "675,000 zł",
            status: "Sprzedane",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        }
        ];
        setData(rowData);

    }, [])

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleRangeChange = (values) => {
        setFilters((prev) => ({ ...prev, areaRange: values }));
    };

    return (
        <section className="pb-24 px-5">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                {/* Nagłówek */}
                <div className="col-span-12">
                    <div className="text-center max-w-2xl mx-auto pb-12">
                        <h2 className="font-montserrat text-6xl font-normal py-4 text-gray-800">
                            Lokale
                        </h2>
                    </div>
                </div>

                {/* Tabela mieszkań */}
                <div className="col-span-12 lg:col-span-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
                        <table className="w-full text-gray-600 text-center">
                            <thead className="bg-mainColor text-white">
                                <tr>
                                    {["Mieszkanie", "Kondygnacja", "Powierzchnia", "Pokoje", "Cena", "Status", "Karta mieszkania"].map((header) => (
                                        <th key={header} className="p-4 font-semibold text-sm sm:text-base uppercase tracking-wide font-poppins">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* Przykład danych */}
                                {data?.map((val, key) => (
                                    <tr key={key} className="hover:bg-gray-50 transition-all">
                                        <td className="p-3 border-b font-montserrat">{val.id}</td>
                                        <td className="p-3 border-b font-montserrat">{val.floor}</td>
                                        <td className="p-3 border-b font-montserrat">{val.area}</td>
                                        <td className="p-3 border-b font-montserrat">{val.rooms}</td>
                                        <td className="p-3 border-b font-montserrat">{val.price}</td>

                                        {/* Status Cell */}
                                        <td
                                            className={`p-3 border-b font-semibold font-montserrat ${val.status === "Sprzedane"
                                                ? "text-red-600"
                                                : val.status === "Rezerwacja"
                                                    ? "text-yellow-600"
                                                    : val.status === "Dostępne"
                                                        ? "text-mainColor"
                                                        : ""
                                                }`}
                                        >
                                            {val.status}
                                        </td>

                                        {/* Action Buttons */}
                                        <td className="p-3 border-b">
                                            <button className="font-montserrat bg-mainColor/[0.8] hover:bg-mainColor/[1] text-white px-4 py-2 rounded-lg text-sm  transition-all">
                                                <div className="flex flex-row items-center gap-2">
                                                    <FaEye />{val.actions.view}
                                                </div>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ApartmentsList;
