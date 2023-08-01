import React from 'react'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'
import ind1 from './assets/ind1.jpg'
import ind2 from './assets/ind2.jpg'
import ind3 from './assets/ind3.jpg'
import ind4 from './assets/ind4.jpg'

const testimonials = [
    {
        image: ind1,
        name: "Sumit Shrestha",
        ratings: ['1', '1', '1', '1', '1'],
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: ind2,
        name: "Andrew Clifton",
        ratings: ['1', '1', '1', '1', '0.5'],
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: ind3,
        name: "Lara Jackson",
        ratings: ['1', '1', '0.5'],
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: ind4,
        name: "Selena Gomez",
        ratings: ['1', '1', '1', '1'],
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

const Testimonials = () => {
    return (
        <section className='testimonialSection'>
            <div className='container grid'>
                <h2>Testimonials</h2>
                {testimonials.map((e, index) => {
                    return (
                        <TestimonialCard image={e.image} name={e.name} ratings={e.ratings} message={e.message} />
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials
