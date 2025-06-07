import React from 'react';
import CountUp from 'react-countup';
import SZYM_parking_001 from '../../assets/images/SZYM_parking_003.jpg';

const statistics = [
    { value: 5, label: 'Liczba\nbudynków' },
    { value: 10, label: 'Lokali\nmieszkalnych' },
    { value: 16, label: 'Miejsc parkingowych' }
];

const AboutUs = () => (
    <section className="py-24 px-5" id="o_inwestycji">
        <div className="container mx-auto grid lg:grid-cols-2 gap-24">
            <div className="flex flex-col items-start justify-center">
                <span className="font-montserrat uppercase font-light text-gray-500">Poznaj inwestycję</span>
                <h2 className="font-poppins text-4xl md:text-5xl lg:text-[65px] font-extralight text-gray-800 py-4">Zakątek Szymonowica</h2>
                <p className="font-montserrat text-xl font-light text-gray-500">
                    Projekt przedstawia nowoczesne, kameralne osiedle zlokalizowane w spokojnej i zielonej części Krakowa –
                    Dzielnicy Dębniki, przy ul. Szymonowica. Projekt łączy nowoczesną architekturę z funkcjonalnością,
                    tworząc idealną przestrzeń do życia dla osób ceniących komfort, bliskość natury oraz wygodny dostęp do centrum miasta.
                </p>
                <div className="grid grid-cols-3 w-full mt-12 divide-x">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center p-2">
                            <h3 className="font-poppins font-normal text-5xl lg:text-6xl mb-2 text-gray-800">
                                <CountUp start={0} end={stat.value} duration={3} delay={2} />
                            </h3>
                            <span className="font-montserrat uppercase text-sm lg:text-lg font-light text-gray-500" dangerouslySetInnerHTML={{ __html: stat.label }} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1200">
                <img src={SZYM_parking_001} className="w-full" alt="Zakątek Szymonowica" />
            </div>
        </div>
    </section>
);

export default AboutUs;
