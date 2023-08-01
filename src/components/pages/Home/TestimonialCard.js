import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const TestimonialCard = ({ image, name, ratings, message }) => {
    return (
        <article className='testimonialCard'>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <span>
                {ratings.map((e, index) => {
                    if (e === '1') {
                        return (
                            <FaStar key={index} />
                        )
                    }
                    else if (e === '0.5') {
                        return (
                            <FaStarHalf key={index} />
                        )
                    }
                })}
            </span>
            <blockquote>"{message}"</blockquote>
        </article>
    )
}

export default TestimonialCard
