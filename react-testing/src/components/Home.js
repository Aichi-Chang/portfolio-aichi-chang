import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Facts from './Facts'
import Navs from './Navs'
import Projects from './Projects'



export const UpdateExpandContext = React.createContext({
  viewProjects: false,
  handleView: () => {}
})

export default function Home() {

  let projectRef = useRef(null)
  const [viewProjects, setViewProjects] = useState(false)

  function handleView() {
    setViewProjects(!viewProjects)
  }

  // function getProjects() {
  //   if (viewProjects) {
  //     return <div className='mt4' ref={projectRef}>
  //     <Projects />
  //   </div>}
  //   }


    useEffect(() => {
      if(projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
    })
  


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
      
      <div className='mb4'>
        <Facts />
      </div>

        <div className='mt4' ref={projectRef}>
        <Projects />
      </div>
      
      
    </div>
  )
}
