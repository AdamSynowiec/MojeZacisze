import React from 'react'

import SZYM_ogrody_001 from '../../assets/images/SZYM_ogrody_001.jpg'
import SZYM_parking_001 from '../../assets/images/SZYM_parking_001.jpg'
import SZYM_taras_001 from '../../assets/images/SZYM_taras_001.jpg'
import logo_white from '../../assets/images/logo_white.png'

const GallerySlider = () => {
    return (
        <section>
            <div className="container mx-auto grid lg:grid-cols-2 gap-24 px-5 mb-24">
                <div className="relative">
                    <img src={SZYM_ogrody_001} alt="Nowoczesny design" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.15] text-center">
                        <h3 data-aos="fade-up" data-aos-delay="300" className='font-montserrat text-6xl font-normal py-4 text-white font-thin'>Nowoczesny design</h3>
                        <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                    </div>
                </div>
                <div className="relative">
                    <img src={SZYM_parking_001} alt="Nowoczesny design" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.15] text-center">
                        <h3 data-aos="fade-up" data-aos-delay="600" className='font-montserrat text-6xl font-normal py-4 text-white font-thin'>Przestronny parking</h3>
                        <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                    </div>
                </div>
                <div className="relative">
                    <img src={SZYM_taras_001} alt="Nowoczesny design" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.15] text-center">
                        <h3 data-aos="fade-up" data-aos-delay="300" className='font-montserrat text-6xl font-normal py-4 text-white font-thin'>Komfortowy taras</h3>
                        <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                    </div>
                </div>
                <div className="relative">
                    <img src={SZYM_ogrody_001} alt="Nowoczesny design" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.15] text-center">
                        <h3 data-aos="fade-up" data-aos-delay="600" className='font-montserrat text-6xl font-normal py-4 text-white font-thin'>Cicha okolica</h3>
                        <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GallerySlider