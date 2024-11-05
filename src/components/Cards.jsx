import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore These Places</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem src="images/Mondstadt_1.jpg" text="Explore this place" label="Mondstadt" path="/regions"/>
                <CardItem src="images/Mondstadt_1.jpg" text="Explore this place" label="Mondstadt" path="/regions"/>
                <CardItem src="images/Mondstadt_1.jpg" text="Explore this place" label="Mondstadt" path="/regions"/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
