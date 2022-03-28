import React from 'react';
import CardsContainer from '../components/Cards/CardsContainer';
import './Home.css';
import $ from 'jquery';
const Home = () => {
    return (
        <div className='Home_Page'>
            <section className='hero_section'>
                <div className="inner_section">
                    <h1>Let's Learn Together</h1>
                    <p>Creating content about design and code</p>
                </div>
                <button className="button"></button>
            </section>
            <CardsContainer />
        </div>
    )
}
export default Home;
