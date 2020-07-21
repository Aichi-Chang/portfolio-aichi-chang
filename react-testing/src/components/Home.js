import React from 'react'
import { Link } from 'react-router-dom'

import Facts from './Facts'
import Navs from './Navs'


export default function Home() {
  return (
    <div className='ma4'>

      <div className='flex-l justify-between-l'>
        
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
          
          <p className='ma0'>Junior Software Engineer Based in London</p>
        </div>
        

        <Navs />
      </div>
      
      
      <Facts />
      
    </div>
  )
}
