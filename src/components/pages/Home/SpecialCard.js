import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeliveryDining } from 'react-icons/md'
import './Specials.css'

const SpecialCard = ({ image, name, price, desc }) => {
    return (
        <article className='special-card'>
          <div className='special-image'>
            <img src={image} alt={name} />
          </div>
          <div className='special-info'>
            <h3>{name}</h3>
            <span>${price}</span>
          </div>
          <div className='special-foot'>
            <p>{desc}</p>
            <Link to={"/"}>Order a delivery <MdDeliveryDining className='scooter' /></Link>
          </div>
        </article>
      )
}

export default SpecialCard
