import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    // Docelowa data zakończenia budowy
    const targetDate = new Date('2025-12-31T23:59:59').getTime(); // Data w formacie YYYY-MM-DDTHH:mm:ss

    // Funkcja obliczająca czas
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Po zakończeniu odliczania
        }
    };

    // Aktualizacja co sekundę
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className=""
            style={{
                backgroundImage: `url(http://localhost:3000/static/media/SZYM_parking_001.edb7e09db2533c1ddb04.jpg)`,
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
                                {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Dni</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Godzin</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                {timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}
                            </span>
                            <p className="text-white text-lg font-thin mt-2">Minut</p>
                        </div>
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-bold text-white">
                                {timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
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
