import React from 'react'
import './Specials.css'
import { Link } from 'react-router-dom'
import greeksalad from './assets/greek-salad.jpg'
import bruschetta from './assets/bruschetta.jpg'
import lemon from './assets/lemon-dessert.jpg'
import SpecialCard from './SpecialCard'

const meals = [
  {
    image: greeksalad,
    name: "Greek Salad",
    price: "12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    image: bruschetta,
    name: "Bruschetta",
    price: "5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    image: lemon,
    name: "Lemon Dessert",
    price: "5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]

const Specials = () => {


  return (
    <section className='container grid special-section'>
      <div className='special-head'>
        <h2>Specials</h2>
        <Link to={"/"} className='focus-button'>Online Menu</Link>
      </div>
      {meals.map((meal, index) =>
          <SpecialCard key={index} image={meal.image} name={meal.name} price={meal.price} desc={meal.desc} />
      )}
    </section>
  )
}

export default Specials
