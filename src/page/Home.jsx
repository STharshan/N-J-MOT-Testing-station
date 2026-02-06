import React from 'react'
import Hero from "../components/Hero";
import Service from "../components/ServicesSection";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Map from "../components/MapSection"
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Service />
            <Review />
            <Contact />
            <Map />
            <Banner />
        </div>
    )
}

export default Home
