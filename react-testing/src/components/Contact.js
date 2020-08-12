import React from 'react'
import { Link } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import Sketch from './Sketch'

export default function Contact() {
  return (
    <div>

      <div className='mt6 flex items-center justify-center flex-column'>

      <div className='flex flex-column items-center mb3'>
        <label htmlFor='contact-email-address' className='avenir'>
          Email 
        </label>
        <h3 id='contact-email-address' className='avenir dark-blue'>
          aichi.p.chang [at] gmail.com
        </h3>
      </div>

      <div className='flex flex-column items-center mb3'>
        <label htmlFor='contact-linkedin-url' className='avenir'>
          LinkedIn
        </label>
        <h3 id='contact-linkedin-url' className='avenir'>
          <a className='link dark-blue grow' target='_blank' href='https://www.linkedin.com/in/aichi-chang/'>
            @aichi-chang
          </a>
        </h3>
      </div>

      <div className='flex flex-column items-center mb3'>
        <label htmlFor='contact-github-url' className='avenir'>
          Github
        </label>
        <h3 id='contact-github-url' className='avenir'>
          <a className='link dark-blue grow' target='_blank' href='https://github.com/Aichi-Chang'>
            @aichi-chang
          </a>
        </h3>
      </div>

      <div className='flex flex-column items-center mb3'>
        <label htmlFor='contact-twitter-url' className='avenir'>
          Twitter
        </label>
        <h3 id='contact-twitter-url' className='avenir'>
          <a className='link dark-blue grow' target='_blank' href='https://twitter.com/aichichang'>
            @aichichang
          </a>
        </h3>
      </div>

      <div className='flex flex-column items-center mb3'>
        <label htmlFor='contact-openprocessing-url' className='avenir'>
          Openprocessing
        </label>
        <h3 id='contact-openprocessing-url' className='avenir'>
          <a className='link dark-blue grow' target='_blank' href='https://www.openprocessing.org/user/232063'>
            @aichi-chang
          </a>
        </h3>
      </div>
        
      <div className='mt5'>
        <Link className='button' to='/'>Take me Back</Link>
      </div>
     
      </div>

  
      
    </div>
  )
}

// <P5Wrapper sketch={Sketch}></P5Wrapper>