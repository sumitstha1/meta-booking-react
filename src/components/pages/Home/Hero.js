import React from 'react'
import './Hero.css'
import hero from './assets/restaurant-food.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container grid'>
                <div className='hero-info'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad eligendi dolorum obcaecati animi labore nam dolorem!</p>
                    <Link to={"/"} className='focus-button'>Reserve a table</Link>
                </div>
                <img src={hero} alt="Hero" className='hero-img' />
            </div>
        </section>
    )
}

export default Hero
