import React from 'react';
import countryData from '../API/country.json';

const About = () => {
    return (
        <section className='section-about container'>
            <h2 className='container-title'>
                Interesting Facts
                <br />
            </h2>
            <div className='gradient-cards'>
                {
                    countryData?.map((country)=>{
                        const {id, countryName, capital, population, interestingFact } = country;
                        return <div className='card'>
                        <div className='container-card bg-blue-box'>
                            <p className='card-title'>
                                {countryName}
                            </p>
                            <p>
                                <span className='card-description'>
                                    Capital:
                                </span>
                                {capital}
                            </p>
                            <p>
                                <span className='card-description'>
                                    Population:
                                </span>
                                {population}
                            </p>
                            <p>
                                <span className='card-description'>
                                    Fact:
                                </span>
                                {interestingFact}
                            </p>
                        </div>
                    </div>
                    })
                }
            </div>
        </section>
    );
}

export default About;
