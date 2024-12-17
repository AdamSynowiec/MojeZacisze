import React from 'react'
import CountUp from 'react-countup'
import SZYM_parking_001 from '../../assets/images/SZYM_parking_001.jpg'
import logo_white from '../../assets/images/logo_white.png'

const AboutUs = () => {
    return (
        <section className="py-24 px-5">
            <div className="container mx-auto grid lg:grid-cols-2 gap-24">
                <div className="flex flex-col items-start justify-center">
                    <span className='font-montserrat uppercase font-light text-gray-500'>poznaj inwestycję</span>
                    <h2 className='font-montserrat text-6xl font-normal py-4 text-gray-800'>Moje zacisze</h2>
                    <p className='font-montserrat text-xl font-light text-gray-500'>
                        Projekt przedstawia nowoczesne, kameralne osiedle zlokalizowane w spokojnej i zielonej części <i className='text-mainColor'>Krakowa – Dzielnicy Dębniki, przy ul. Szymonowicza</i>. Projekt łączy nowoczesną architekturę z funkcjonalnością, tworząc idealną przestrzeń do życia dla osób ceniących komfort, bliskość natury oraz wygodny dostęp do centrum miasta.
                    </p>
                    <div className="grid grid-cols-3 w-full mt-12 divide-x">
                        <div className="text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-gray-800'>
                                <CountUp start={0} end={5} duration={3} delay={2} />
                            </h3>
                            <span className='font-montserrat uppercase text-sm lg:text-lg font-light text-gray-500'>
                                Liczba<br />budynków
                            </span>
                        </div>
                        <div className="text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-gray-800'>
                                <CountUp start={0} end={10} duration={3} delay={2} />
                            </h3>
                            <span className='font-montserrat uppercase text-sm lg:text-lg font-light text-gray-500'>
                                Lokali<br />mieszkalnych
                            </span>
                        </div>
                        <div className="text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-gray-800'>
                                <CountUp start={0} end={20} duration={3} delay={2} />
                            </h3>
                            <span className='font-montserrat uppercase text-sm lg:text-lg font-light text-gray-500'>
                                Miejsc parkingowych
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative" data-aos="fade-up" data-aos-duration="1200">
                    <img src={SZYM_parking_001} className="w-full" alt="" />
                    <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
