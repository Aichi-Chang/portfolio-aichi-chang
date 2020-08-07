import React from 'react'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
    <div className='flex flex-wrap items-center mt0-l mt3'>
      <Link to='/contact' className='mr3 link gold hover-black nav'>Contact</Link>
      <Link to='/projects' className='mr3 link hover-black gold nav'>Projects</Link>
      <Link to='/notes' className='link gold hover-black nav'>Murmur</Link>
    </div>
  )
}
