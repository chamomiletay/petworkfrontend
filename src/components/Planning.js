import React from 'react'
import pawprint from './blue-pawprint.png'
import './Planning.css'
import wireframe1 from './wireframe1.png'
import wireframe2 from './wireframe2.png'
import trello from './trello.png'

const Planning = () => {
  return (
    <div>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h2 className='title'>Planning</h2>
        <img className='pawprint' src={pawprint} alt='pawprint'/>

        <p>How Petwork came to fruition</p>

      <div className='container'>

        <div className='content'>
          <h2>Initial Brainstorm Process</h2>
          <ul>
            <li className='plan'>User creates a profile and is able to update information</li>
          </ul>
          
          <img className='wireframe' src={wireframe1} alt='first intial wireframe'/>

          <ul>
            <li className='plan'>User can easily access dog breed information via database.</li>
            <li className='plan'>User will have ability to favorite pages for easy access</li>
          </ul>

          <img className='wireframe' src={wireframe2} alt='second intial wireframe'/>
        </div>

        <div className='content'>
          <h2>Allocating Tasks</h2>

          <ul>
            <li className='plan'>A Trello board was prepared in order to log current to-dos</li>
            <li className='plan'>Allowed ease of dividing tasks amongst teammates</li>
          </ul>
          <img className='photo' src={trello} alt='Trello board screenshot'/>

        </div>

      </div>
    </div>
  )
}

export default Planning