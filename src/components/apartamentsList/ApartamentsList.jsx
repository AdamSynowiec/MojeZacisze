import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

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
            rooms: 2,
            area: "60 m²",
            orientation: "Południe",
            floor: 3,
            price: "450,000 zł",
            status: "Dostępne",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 2,
            area: "60 m²",
            orientation: "Południe",
            floor: 3,
            price: "450,000 zł",
            status: "Dostępne",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 2,
            area: "60 m²",
            orientation: "Południe",
            floor: 3,
            price: "450,000 zł",
            status: "Rezerwacja",
            actions: {
                view: "Zobacz",
                download: "PDF"
            }
        },
        {
            id: "M01",
            rooms: 2,
            area: "60 m²",
            orientation: "Południe",
            floor: 3,
            price: "450,000 zł",
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
        <section>
            <div className="container mx-auto grid grid-cols-12 gap-8 py-24 px-5">
                {/* Nagłówek */}
                <div className="col-span-12">
                    <div className="text-center max-w-2xl mx-auto pb-12">
                        <h2 className="font-montserrat text-5xl font-semibold text-gray-800 mb-4">
                            Lokale
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Znajdź mieszkanie idealne dla siebie z dostępnych opcji i filtruj według swoich potrzeb.
                        </p>
                    </div>
                </div>

                {/* Panel filtrów */}
                <aside className="col-span-12 lg:col-span-3 bg-gray-100 p-6  shadow-md">
                    <h3 className="font-montserrat text-2xl text-gray-700 mb-4">Filtry</h3>
                    <div className="flex flex-col gap-4">
                        {/* ID mieszkania */}
                        <select
                            name="id"
                            onChange={handleFilterChange}
                            value={filters.id}
                            className="p-2 rounded border-gray-300"
                        >
                            <option value="">Mieszkanie</option>
                            <option value="M01">M01</option>
                            <option value="M02">M02</option>
                            <option value="M03">M03</option>
                            <option value="M04">M04</option>
                        </select>

                        {/* Kondygnacja */}
                        <select
                            name="floor"
                            onChange={handleFilterChange}
                            value={filters.floor}
                            className="p-2 rounded border-gray-300"
                        >
                            <option value="">Kondygnacja</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        {/* Powierzchnia - Suwak */}
                        <div>
                            <label className="block mb-2 text-gray-600 font-semibold">Powierzchnia (m²)</label>
                            <Range
                                step={1}
                                min={MIN_AREA}
                                max={MAX_AREA}
                                values={filters.areaRange}
                                onChange={handleRangeChange}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        className="h-2 w-full bg-gray-200 rounded"
                                        style={{
                                            background: getTrackBackground({
                                                values: filters.areaRange,
                                                colors: ["#D1D5DB", "#a3a3a3", "#D1D5DB"],
                                                min: MIN_AREA,
                                                max: MAX_AREA,
                                            }),
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        className="w-5 h-5 bg-gray-500 rounded-full shadow focus:outline-none"
                                    />
                                )}
                            />
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                                <span>{filters.areaRange[0]} m²</span>
                                <span>{filters.areaRange[1]} m²</span>
                            </div>
                        </div>

                        {/* Ekspozycja */}
                        <select
                            name="exposure"
                            onChange={handleFilterChange}
                            value={filters.exposure}
                            className="p-2 rounded border-gray-300"
                        >
                            <option value="">Ekspozycja</option>
                            <option value="Płn/Zach">Płn/Zach</option>
                            <option value="Południe">Południe</option>
                            <option value="Wschód">Wschód</option>
                            <option value="Zachód">Zachód</option>
                        </select>

                        {/* Pokoje */}
                        <input
                            type="number"
                            name="rooms"
                            placeholder="Liczba pokoi"
                            onChange={handleFilterChange}
                            value={filters.rooms}
                            className="p-2 rounded border-gray-300"
                        />

                        {/* Cena */}
                        <input
                            type="number"
                            name="price"
                            placeholder="Cena maksymalna"
                            onChange={handleFilterChange}
                            value={filters.price}
                            className="p-2 rounded border-gray-300"
                        />

                        {/* Status */}
                        <select
                            name="status"
                            onChange={handleFilterChange}
                            value={filters.status}
                            className="p-2 rounded border-gray-300"
                        >
                            <option value="">Status</option>
                            <option value="Dostępne">Dostępne</option>
                            <option value="Rezerwacja">Rezerwacja</option>
                            <option value="Sprzedane">Sprzedane</option>
                        </select>
                    </div>
                </aside>

                {/* Tabela mieszkań */}
                <div className="col-span-12 lg:col-span-9">
                    <div className="overflow-x-auto bg-white shadow-md ">
                        <table className="w-full text-gray-600 text-center">
                            <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                    {["Mieszkanie", "Kondygnacja", "Powierzchnia", "Ekspozycja", "Pokoje", "Cena", "Status", "Plan", "Rzut"].map(
                                        (header) => (
                                            <th key={header} className="p-3 font-semibold">
                                                {header}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {/* Przykład danych */}
                                {data?.map((val, key) => {
                                    return (
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-3">{val.id}</td>
                                            <td className="p-3">{val.rooms}</td>
                                            <td className="p-3">{val.area}</td>
                                            <td className="p-3">{val.orientation}</td>
                                            <td className="p-3">{val.floor}</td>
                                            <td className="p-3">{val.price}</td>

                                            {/* Status Cell */}
                                            <td
                                                className={`p-3 ${val.status === "Sprzedane"
                                                    ? "text-red-600"
                                                    : val.status === "Rezerwacja"
                                                        ? "text-yellow-600"
                                                        : val.status === "Dostępne"
                                                            ? "text-green-600"
                                                            : ""
                                                    }`}
                                            >
                                                {val.status}
                                            </td>

                                            {/* Action Buttons */}
                                            <td className="p-3">
                                                <button className="text-blue-500 hover:underline">
                                                    {val.actions.view}
                                                </button>
                                            </td>
                                            <td className="p-3">
                                                <button className="text-blue-500 hover:underline">
                                                    {val.actions.download}
                                                </button>
                                            </td>
                                        </tr>
                                    );

                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentsList;
