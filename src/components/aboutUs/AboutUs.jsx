import React from 'react'
import SZYM_parking_001 from '../../assets/images/SZYM_parking_001.jpg'
import logo_white from '../../assets/images/logo_white.png'

const AboutUs = () => {
    return (
        <section className="py-24 px-5">
            <div className="container mx-auto grid lg:grid-cols-2 gap-24">
                <div className="flex flex-col items-start justify-center">
                    <span className='font-montserrat uppercase font-light text-zinc-500'>poznaj inwestycję</span>
                    <h2 className='font-montserrat text-6xl font-normal py-4 text-zinc-800'>Moje zacisze</h2>
                    <p className='font-montserrat text-xl font-light text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo maxime autem animi quas repellat voluptates nulla porro, unde totam. Illo deserunt ea vero nemo architecto? Quibusdam ad laborum expedita?</p>
                    <div className="grid grid-cols-3 w-full mt-12 divide-x">
                        <div className=" text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-zinc-800'>5</h3>
                            <span className='font-montserrat uppercase text-md lg:text-lg font-light text-zinc-500'>Liczba<br/>budynków</span>
                        </div>
                        <div className=" text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-zinc-800'>50</h3>
                            <span className='font-montserrat uppercase text-md lg:text-lg font-light text-zinc-500'>Lokali<br/>mieszkalnych</span>
                        </div>
                        <div className=" text-center p-2">
                            <h3 className='font-poppins font-normal text-5xl lg:text-6xl mb-2 text-zinc-800'>100</h3>
                            <span className='font-montserrat uppercase text-md lg:text-lg font-light text-zinc-500'>Miejsc parkingowych</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={SZYM_parking_001} className="w-full" alt="" />
                    <img src={logo_white} alt="" className="absolute z-10 w-10 w-20 bottom-0 right-0 opacity-50" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs