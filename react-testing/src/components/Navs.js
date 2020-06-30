import React from 'react'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
    <div className='flex flex-wrap mt3'>
      <Link to='/about' className='mr3 link gold'>About</Link>
      <Link to='/projects' className='mr3 link gold'>Projects</Link>
      <Link to='/contact' className='link gold'>Contact</Link>
    </div>
  )
}
