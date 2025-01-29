import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import About from './About';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <main className='hero-section main'>
            <div className='container grid grid-two-cols'>
                <div className='hero-content'>
                    <h1 className='heading-xl'>
                        Explore the World - One Country at a Time!
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you need.
                    </p>
                    <NavLink  to="/about" className='explore-button'>
                        Start Exploring <FaLongArrowAltRight />
                    </NavLink>
                </div>
                <div className='hero-image'>
                    <img src="/world.png" alt="World" className='banner-image'/>
                </div>
            </div>
        </main>
        <About />
        </>
    );
}

export default Home;
