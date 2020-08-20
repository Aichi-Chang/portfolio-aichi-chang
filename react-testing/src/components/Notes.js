import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function Notes() {

  // const [data, setData] = useState()

  // useEffect(() => {
  //   fetch('https://cyf-glossary-backend.herokuapp.com/all-terms')
  //     .then(res => res.json())
  //     .then(res => setData(res))
  // },[])

  return (
    <div className='mt6 flex items-center justify-center flex-column'>
      <div className='flex flex-column items-center mb3'>
      <label htmlFor='contact-linkedin-url' className='avenir'>
        - some space for me to put notes -
      </label>
      <h3 id='contact-linkedin-url' className='avenir dark-blue'>
        Coming Soon
        </h3>
      </div>
      <div className='mt5'>
        <Link className='button' to='/'>Take me Back</Link>
      </div>
    </div>
  )
}
