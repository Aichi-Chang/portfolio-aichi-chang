import React from 'react'
import { Link } from 'react-router-dom'

import Fact from './Fact'

export default function Home() {
  return (
    <div>
      <div className='flex flex-row items-center'>
        <div className='flex items-center justify-center mr2 relative'>
        <div className='absolute flex items-center justify-center'>
          <div className='smallCircle'></div>
          <div className='circle'></div>
        </div>
          <div className='bigCircle'></div>
        </div>
        
        <h1>Aichi Chang</h1>
      </div>
      
      <h2>Junior Software Engineer Base in London</h2>

      <div className='flex flex-wrap'>
        <Link to='/about' className='ma3 link'>About</Link>
        <Link to='/projects' className='ma3 link'>Projects</Link>
        <Link to='/contact' className='ma3 link'>Contact</Link>
      </div>
      
      <Fact />
      
    </div>
  )
}
