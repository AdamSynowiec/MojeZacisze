import React from 'react'
import './Hero.css';
const Hero = () => {
    return (
        <div className="min-h-screen relative z-40 hero-background">
            <div className="w-full h-full bg-black/[0.2] ">
                <div className="container mx-auto flex flex-col items-center justify-center  min-h-[100vh] px-5">
                    <div className="text-white flex flex-col items-center justify-center text-center ">
                        <h1 className='
                        drop-shadow-xl
                        font-poppins
                        font-thin
                        uppercase 
                        text-5xl md:text-8xl lg:text-8xl 
                        pb-4
                        '
                            data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" data-aos-anchor-placement="top-bottom"
                        >Zakątek Szymonowica</h1>
                        <span className='
                        drop-shadow-xl
                        font-poppins
                        font-thin
                        uppercase 
                        text-lg md:text-xxl lg:text-3xl
                        '
                            data-aos="fade-up" data-aos-delay="1600" data-aos-duration="1200" data-aos-anchor-placement="top-bottom"
                        >Apartamenty w zielonej części Krakowa</span>
                    </div>
                    <div className="absolute bottom-10 flex flex-col items-center space-y-2">
                        <span className="text-sm uppercase tracking-wider text-white font-montserrat"
                        >Sprawdź ofertę</span>
                        <div className="animate-bounce">
                            <svg className="w-full h-full text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19V5m0 14-4-4m4 4 4-4" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero