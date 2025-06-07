import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SZYM_lot_ptatka_002 from '../../assets/images/SZYM_lot_ptatka_002.jpg'
import SZYM_ogrody_001 from '../../assets/images/SZYM_ogrody_002.jpg'
import SZYM_parking_001 from '../../assets/images/SZYM_parking_003.jpg'
import SZYM_taras_001 from '../../assets/images/SZYM_taras_001.png'
import SZYM_wnetrze_001 from '../../assets/images/SZYM_wnetrze_001.png'
import SZYM_wnetrze_002 from '../../assets/images/SZYM_wnetrze_002.png'

const images = [
    SZYM_lot_ptatka_002,
    SZYM_ogrody_001,
    SZYM_parking_001,
    SZYM_taras_001,
    SZYM_wnetrze_001,
    SZYM_wnetrze_002
];

function PhotoGallery() {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [dragged, setDragged] = useState(false);
    const [calcWidth, setCalcWith] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(
                    carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
                );
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, [calcWidth]);

    // Funkcja obsługująca kliknięcie
    const handleImageClick = (index) => {
        if (!dragged) {
            setCurrentIndex(index);
            setSelectedImage(images[index]);
        }
    };

    // Funkcja do przejścia do następnego zdjęcia
    const handleNext = (e) => {
        e.stopPropagation(); // Zapobiega zamknięciu powiększonego obrazu
        if (currentIndex < images.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setSelectedImage(images[nextIndex]);
        }
    };

    // Funkcja do przejścia do poprzedniego zdjęcia
    const handlePrev = (e) => {
        e.stopPropagation(); // Zapobiega zamknięciu powiększonego obrazu
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setSelectedImage(images[prevIndex]);
        }
    };

    return (
        <div className="overflow-hidden w-full pb-12 md:pb-24 px-4" id="wizualizacje">
            {/* Główny kontener karuzeli */}
            <div className="container mx-auto pb-12 md:pb-24">
                <h2 className="font-poppins text-4xl md:text-5xl lg:text-[65px] font-extralight text-gray-800">Wizualizacje</h2>
            </div>
            <motion.div
                ref={carouselRef}
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                onDragStart={() => setDragged(true)} // Ustawienie flagi na true podczas przeciągania
                onDragEnd={() => setDragged(false)} // Resetowanie flagi po zakończeniu przeciągania
                onMouseEnter={() => { setCalcWith(!calcWidth) }}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] md:min-w-[550px] mr-4"
                        onClick={() => !dragged && handleImageClick(index)} // Kliknięcie tylko jeśli nie było drag
                    >
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="rounded-lg shadow-lg w-full h-auto pointer-events-none"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Powiększone zdjęcie */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)} // Zamknięcie zdjęcia po kliknięciu
                    >
                        <button onClick={handlePrev} className="text-white text-3xl p-4 z-10">
                            {/* Strzałka w lewo */}
                            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <motion.img
                            src={selectedImage}
                            alt="Enlarged"
                            className="rounded-lg shadow-2xl w-[90%] h-auto max-w-4xl"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                        />

                        <button onClick={handleNext} className="text-white text-3xl p-4 z-10">
                            {/* Strzałka w prawo */}
                            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default PhotoGallery;
