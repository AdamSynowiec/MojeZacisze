import React from 'react';
import InvestLocalization from '../../assets/images/mjz_map.png';

const Localization = () => {
    return (
        <section id="lokalizacja" className="mb-12 md:mb-24">
            <div className="container max-w-[1596px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-12 flex flex-col md:flex-row lg:text-left px-4 lg:px-0 mb-0 md:mb-12">
                        <h2 className="font-poppins text-4xl md:text-5xl lg:text-[65px] font-extralight text-gray-800 mb-8 md:mb-0 md:mr-8 ">
                            Lokalizacja
                        </h2>
                    </div>
                    <div className="lg:col-span-12 flex justify-center">
                        <img src={InvestLocalization} alt="Mapa lokalizacji" className="w-full h-auto max-w-[90%] lg:max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localization;