import React, { useState } from 'react'

export default function Icons() {

  const [hoverText, setHoverText] = useState('')


  function handleMouseEnter(e) {
    setHoverText('- ' + e.target.alt)
  }

  function handleMouseLeave() {
    setHoverText('')
  }


  return (
    <div className='mt5'>
    <div>
    <h3>Technologies I use <span className=''>{hoverText}</span></h3>
    </div>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="HTML5" title="HTML5" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/html5.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="CSS3" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/css3.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="SASS" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/sass.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="JavaScript" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/javascript.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Python" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/python.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="React" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/react.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Redux" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/redux.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Node.Js" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/node-dot-js.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Express" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Django" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/django.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="MongoDB" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/mongodb.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="PostgresQL" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/postgresql.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Webpack" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/webpack.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Babel" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/babel.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Postman" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/postman.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Insomnia" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/insomnia.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Netlify" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/netlify.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Heroku" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/heroku.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="AWS" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/amazonaws.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="GraphQL" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/graphql.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Jest" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/jest.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Photoshop" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/adobephotoshop.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="Illustrator" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/adobeillustrator.svg" /></span>
      <span className='icons'><img onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={() => handleMouseLeave()} className='mw2 mr2 mt1' alt="InDesign" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/adobeindesign.svg" /></span>
    </div>
  )
}
