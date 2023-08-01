import React from 'react'
import './Story.css'
import upper from './assets/chefmario-adrian.jpg'
import lower from './assets/chefmarioadrianu.jpg'

const Story = () => {
    return (
        <section className='container grid our-story-section'>
            <div className='our-story-desc'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat qui reiciendis ipsa. Illo explicabo ratione suscipit eligendi consequuntur laborum velit sunt maxime, facere corrupti accusamus ducimus id. Quae aspernatur unde dolores non praesentium provident nesciunt nostrum architecto, consequuntur eligendi nihil sit labore ipsum deserunt facilis corporis amet modi laborum aliquam quam inventore. Ipsum voluptate non incidunt enim magni beatae. Error adipisci facere ad voluptas esse eius, totam porro impedit harum, ducimus veritatis dignissimos hic ipsa at libero, ex nam dolor soluta saepe natus accusamus maiores in corporis. Ex facilis iusto unde odio laboriosam illum inventore eaque veniam porro sunt!</p>
            </div>
            <div className='our-story-img'>
                <img src={upper} alt="Mario Adrian Upper IMG" />
                <img src={lower} alt="Maria Adrian Lower IMG" />
            </div>
        </section>
    )
}

export default Story
