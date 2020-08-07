import React from 'react'
import { Link } from 'react-router-dom'

import spaceInvaders from '../assets/spaceInvaders.png'
import aPlusL from '../assets/aPlusL.png'
import theVault from '../assets/theVault.png'
import workbench from '../assets/workbench.png'
import bookDoctor from '../assets/bookDoctor.png'
import co2Calculator from '../assets/co2Calculator.png'


export default function Projects({ viewProjects }) {


  return (
    <>

    <div className='mb6 flex flex-wrap wrap justify-center'>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={bookDoctor} alt='book doctor' />
        <h3>Book-Doctor</h3>
        <p>Book-doctor is an online GP appointment booking system. The idea is to help ease the phone line occupation and move the booking to an online app. This app has two way login, allows GP and their patients to use.</p>
        <p>Patients can easily view the avalible time of their GP and book an appointment. Once booked, they will receive an email confirmation from the app. After the appointment, GP will also be able to leave medical history as a note or prescibe medicine to their patients.</p>
        <a className='button mr3' href='https://book-doctor.herokuapp.com/'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/bookdoctor'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={workbench} alt='workbench' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' href='https://github.com/Aichi-Chang/SEI-Project-4'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' href='https://project-4-workbench.herokuapp.com/'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={theVault} alt='the vault' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' target='_blank' href='https://github.com/Aichi-Chang/SEI-Project-3-v2'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' target='_blank' href='https://project-3-2point0.herokuapp.com/'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={aPlusL} alt='a plus l' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' target='_blank' href='https://github.com/Aichi-Chang/SEI-Project-2'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' target='_blank' href='https://aichi-chang.github.io/SEI-Project-2/'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={spaceInvaders} alt='space invader' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' target='_blank' href='https://aichi-chang.github.io/SEI-Project-1/'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' target='_blank' href='https://github.com/Aichi-Chang/SEI-Project-1'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      <div className='project ma4 bg-light-gray pa4'>
        <img src={co2Calculator} alt='co2 calculator' />
        <h3>CO2 Calculator</h3>
        <p>A simple application for you to calculate the CO2 footprint that is generated from the route in the UK. It provides 3 different types of transport for you to choose and compare. The application has signup and login feature, you will be able to save routes to your personal dashboard.</p>
        <a className='button mr3' target='_blank' href='https://co2-emission-calculate2.herokuapp.com/'><p className='hover-black blue pa0 ma0'>View Site</p></a>
        <a className='button mr3' target='_blank' href='https://github.com/Aichi-Chang/co2-emission-calculator'><p className='hover-black blue pa0 ma0'>Github</p></a>
      </div>

      {!viewProjects && <div className='mt5 fixed right-2 left-2-ns bottom-2'>
        <Link className='button' to='/'>Take me Back</Link>
      </div>}
    </div>


    </>
  )
}
