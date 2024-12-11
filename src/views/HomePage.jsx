import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import GallerySlider from '../components/gallerySlider/GallerySlider'
import Footer from '../components/footer/Footer'
import Localization from '../components/localization/Localization'
import ApartamentsList from '../components/apartamentsList/ApartamentsList'

import SZYM_ogrody_001 from '../assets/images/SZYM_ogrody_001.jpg'
import SZYM_parking_001 from '../assets/images/SZYM_parking_001.jpg'
import SZYM_taras_001 from '../assets/images/SZYM_taras_001.jpg'
import Nav from '../components/nav/Nav'

const HomePage = () => {

    const images = [
        {
            src: SZYM_ogrody_001,
            title: "Spokój",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ea minima alias deleniti sint in est, ab quas eveniet eligendi sunt nemo illo numquam nulla enim adipisci eaque reprehenderit aspernatur!",
        },
        {
            src: SZYM_parking_001,
            title: "Przestrzeń",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ea minima alias deleniti sint in est, ab quas eveniet eligendi sunt nemo illo numquam nulla enim adipisci eaque reprehenderit aspernatur!",
        },
        {
            src: SZYM_taras_001,
            title: "Cisza",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ea minima alias deleniti sint in est, ab quas eveniet eligendi sunt nemo illo numquam nulla enim adipisci eaque reprehenderit aspernatur!",
        }
    ];


    return (
        <>
            <Nav />
            <Hero />
            <AboutUs />
            <GallerySlider images={images} />
            <Localization />
            <ApartamentsList />
            <Footer />
        </>
    )
}

export default HomePage