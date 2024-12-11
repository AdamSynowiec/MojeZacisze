import React from 'react'
import SZYM_ogrody_001 from '../../assets/images/SZYM_ogrody_001.jpg'
import logo_white from '../../assets/images/logo_white.png'
import menuIcon from '../../assets/images/menu.svg'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url('${SZYM_ogrody_001}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
            className="min-h-screen relative z-50">
            <div className="w-full h-full bg-black/[0.2] ">
                <div className="bg-black/[0.2] shadow-md">
                    <div className="container mx-auto px-5">
                        <div className="flex flex-row items-center justify-between h-48 ">
                            <div className="block xl:hidden">
                                <ul>
                                    <li>
                                        <button className='w-16 h-16'></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden xl:block flex-1">
                                <ul className='flex items-center justify-between text-white text-md uppercase'>
                                    <li>
                                        <Link className='font-montserrat border-b-2 border-transparent hover:border-white transition-all'>O inwestycji</Link>
                                    </li>
                                    <li>
                                        <Link className='font-montserrat border-b-2 border-transparent hover:border-white transition-all'>Lokalizacja</Link>
                                    </li>
                                    <li>
                                        <Link className='font-montserrat border-b-2 border-transparent hover:border-white transition-all'>Wizualizacje</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 h-full">
                                <img src={logo_white} className="h-full mx-auto" alt="" />
                            </div>
                            <div className="hidden xl:block flex-1">
                                <ul className='flex items-center justify-between text-white text-md uppercase'>
                                    <li>
                                        <Link className='font-montserrat border-b-2 border-transparent hover:border-white transition-all'>Lokale</Link>
                                    </li>
                                    <li>
                                        <Link className='font-montserrat border-b-2 border-transparent hover:border-white transition-all'>Kontakt</Link>
                                    </li>
                                    <li>
                                        <Link className='font-montserrat border-2 border-white p-2 hover:bg-white hover:text-black transition-all'>(+48) 000 - 000 - 000</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="block xl:hidden">
                                <ul>
                                    <li>
                                        <button className='w-12 h-12'>
                                            <img className="w-12 h-12" src={menuIcon} alt="" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh_-_192px)] px-5">
                    <div className="text-white flex flex-col items-center justify-center text-center -mt-48">
                        <h1 className='
                        drop-shadow-xl
                        font-poppins
                        font-thin
                        uppercase 
                        text-7xl md:text-8xl lg:text-9xl 
                        pb-4
                        '
                            data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" data-aos-anchor-placement="top-bottom"
                        >Moje zacisze</h1>
                        <span className='
                        drop-shadow-xl
                        font-poppins
                        font-thin
                        uppercase 
                        text-lg md:text-xxl lg:text-3xl
                        '
                            data-aos="fade-up" data-aos-delay="1600" data-aos-duration="1200" data-aos-anchor-placement="top-bottom"
                        >Apartamenty w centrum Krakowa</span>
                    </div>
                    <div class="absolute bottom-10 flex flex-col items-center space-y-2">
                        <span class="text-sm uppercase tracking-wider text-white font-montserrat"
                        >Sprawdź ofertę</span>
                        <div class="animate-bounce">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero