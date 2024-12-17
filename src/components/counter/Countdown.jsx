import React, { useState, useEffect } from 'react';
import SZYM_parking_001 from '../../assets/images/SZYM_parking_001.jpg'
const Countdown = () => {
    
    return (
        <section className=""
            style={{
                backgroundImage: `url(${SZYM_parking_001})`,
                backgroundSize: '100%',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="bg-black/[0.5] py-24 mb-24 px-5 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="drop-shadow-xl font-poppins font-thin uppercase text-3xl md:text-4xl lg:text-5xl pb-4 text-white">
                        Zakończenie inwestycji Moje Zacisze
                    </h2>
                    <div className="flex justify-center gap-6 md:gap-12">
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Dni</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Godzin</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                               
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Minut</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Sekund</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
