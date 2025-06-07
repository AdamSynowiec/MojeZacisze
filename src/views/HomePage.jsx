import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import Footer from '../components/footer/Footer'
import Localization from '../components/localization/Localization'
import ApartamentsList from '../components/apartamentsList/ApartamentsList'
import Features from '../components/features/Features'
import PhotoGallery from '../components/gallerySlider/PhotoGallery'
import NavBar from '../components/navBar/NavBar'
const HomePage = () => {

    return (
        <>
            <NavBar />
            <Hero />
            <AboutUs />
            <Features />
            <PhotoGallery />
            <ApartamentsList />
            <Localization />
            <Footer />
        </>
    )
}

export default HomePage