import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'

import Facts from './Facts'
import Navs from './Navs'
import Projects from './Projects'
import Sketch from './Sketch'



export const UpdateExpandContext = React.createContext()

export default function Home() {

  let projectRef = useRef(null)
  let factRef = useRef(null)
  
  const [viewProjects, setViewProjects] = useState(false)
  const [showLess, setShowLess] = useState(true)
  
  const [color, setColor] = useState({
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255]
  })
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)


  function randomColor() {
    setColor({
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255]
    })
  }

  function setWAndH() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  function handleView() {
      setViewProjects(!viewProjects)
      if (showLess === true) {
        setShowLess(false)
      } else {
        setTimeout(() => {
          setShowLess(true)
        }, 650)
      }
  }

  const value = {
    showLess,
    setShowLess,
    viewProjects,
    setViewProjects,
    handleView
  }

    useEffect(() => {

      if(viewProjects) {
        projectRef.current.scrollIntoView({
          behavior: 'smooth'
        }) 
      } else {
        factRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      window.addEventListener("resize", setWAndH);
        return () => window.removeEventListener("resize", setWAndH);
    })
  

  return (
    <div className='ma4'>
    <div ref={factRef}></div>
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

      <P5Wrapper sketch={Sketch} color={color} width={width} height={height}></P5Wrapper>
      
      <UpdateExpandContext.Provider value={value}>
        <div className='mb4'>
          <Facts />
        </div>
      </UpdateExpandContext.Provider>
      

        {!showLess && <div className='mt4' ref={projectRef}>
          <Projects />
        </div>}

      {viewProjects && <button className='button' onClick={() => handleView()}>Show Less</button>}
      
    </div>
  )
}
