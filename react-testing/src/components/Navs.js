import React from 'react'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
    <div className='flex flex-wrap items-center mt0-l mt3'>
      <Link to='/about' className='mr3 link gold hover-black nav'>About</Link>
      <Link to='/projects' className='mr3 link hover-black gold nav'>Projects</Link>
      <Link to='/contact' className='link gold hover-black nav'>Contact</Link>
    </div>
  )
}
