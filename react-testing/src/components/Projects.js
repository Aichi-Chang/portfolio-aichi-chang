import React from 'react'
import { Link } from 'react-router-dom'

import spaceInvaders from '../assets/spaceInvaders.png'
import aPlusL from '../assets/aPlusL.png'
import theVault from '../assets/theVault.png'
import workbench from '../assets/workbench.png'
import bookDoctor from '../assets/bookDoctor.png'


export default function Projects({ viewProjects }) {


  return (
    <>

    <div className='flex flex-wrap wrap justify-center bg-light-gray'>

      <div className='project ma4'>
        <img src={bookDoctor} alt='space invader' />
        <h3>Book-Doctor</h3>
        <p>Book-doctor is an online GP appointment booking system. The idea is to help ease the phone line occupation and move the booking to an online app. This app has two way login, allows GP and their patients to use.</p>
        <p>Patients can easily view the avalible time of their GP and book an appointment. Once booked, they will receive an email confirmation from the app. After the appointment, GP will also be able to leave medical history as a note or prescibe medicine to their patients.</p>
        <a className='button mr3' href='https://book-doctor.herokuapp.com/'>View Site</a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/bookdoctor'>Github</a>
      </div>

      <div className='project ma4'>
        <img src={workbench} alt='space invader' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' href='https://aichi-chang.github.io/SEI-Project-1/'>View Site</a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/SEI-Project-1'>Github</a>
      </div>

      <div className='project ma4'>
        <img src={theVault} alt='space invader' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' href='https://aichi-chang.github.io/SEI-Project-1/'>View Site</a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/SEI-Project-1'>Github</a>
      </div>

      <div className='project ma4'>
        <img src={aPlusL} alt='space invader' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' href='https://aichi-chang.github.io/SEI-Project-1/'>View Site</a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/SEI-Project-1'>Github</a>
      </div>

      <div className='project ma4'>
        <img src={spaceInvaders} alt='space invader' />
        <h3>Space Invaders</h3>
        <p>Space Invaders is my first solo project, built with vanilla JavasCript. This is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.</p>
        <a className='button mr3' href='https://aichi-chang.github.io/SEI-Project-1/'>View Site</a>
        <a className='button mr3' href='https://github.com/Aichi-Chang/SEI-Project-1'>Github</a>
      </div>

      {!viewProjects && <div className='mt5 fixed right-2 left-2-ns bottom-2'>
        <Link className='button' to='/'>Take me Back</Link>
      </div>}
    </div>


    </>
  )
}
