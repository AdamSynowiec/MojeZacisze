import React from 'react'
import SZYM_ogrody_001 from '../../assets/images/SZYM_ogrody_001.jpg'
import './Hero.css' // Import pliku CSS, w którym dodamy animację

const Hero = () => {
    return (
        <div className="min-h-[calc(100vh_-_96px)] relative z-10 mx-auto overflow-hidden hero-background"
        >
            <div className="h-full bg-black/[0.3]">
                <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh_-_96px)] px-5">
                    <div className="text-white flex flex-col items-center justify-center text-center -mt-48">
                        <h1
                            className="
                            drop-shadow-xl
                            font-poppins
                            font-thin
                            uppercase 
                            text-7xl md:text-8xl lg:text-9xl 
                            pb-4"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                            data-aos-duration="1200"
                            data-aos-anchor-placement="top-bottom"
                        >
                            Moje zacisze
                        </h1>
                        <span
                            className="
                            drop-shadow-xl
                            font-poppins
                            font-thin
                            uppercase 
                            text-lg md:text-xxl lg:text-3xl"
                            data-aos="fade-up"
                            data-aos-delay="2400"
                            data-aos-duration="1200"
                            data-aos-anchor-placement="top-bottom"
                        >
                            Apartamenty w zielonej części Krakowa
                        </span>
                    </div>
                    <div className="absolute bottom-10 flex flex-col items-center space-y-2">
                        <span className="text-sm uppercase tracking-wider text-white font-montserrat">
                            Sprawdź ofertę
                        </span>
                        <div className="animate-bounce">
                            <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
