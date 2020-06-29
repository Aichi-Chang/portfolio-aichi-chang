import React from 'react'
import { Link } from 'react-router-dom'

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

      <div>
       <h2>Some fun fact of me</h2>
      <p>
        Hello, I'm Aichi. Junior software engineer - enjoy reading manga, good food, and films <span role='img' aria-label='sunglasses'>😎</span>
      </p> 
      <p>
        I have enrolled in the General Assembly Software Engineering Bootcamp. I used to be a fashion designer(with lots of creative ideas)
      </p>
      <p>
        Being a software engineer has perfectly combined my creativity, problem-solving skills, and my knowledge in technology. <span role='img' aria-label='star'>💫</span>
      </p>
      <p>
        I write code with JavaScrip and Python. I'm also good at React, Node.js, Express, Django, MongoDB, PostgresQL, Webpack, Babel and more...
      </p>
      <p>
        I'm currently volunteering at Code Your Future as a teaching assistant <span role='img' aria-label='women-with-computer'>👩🏻‍💻</span>
      </p>
      <p>
        I also speak French and Paris was my second home. 
      </p>
      <p>
        You can contact me via Github, LinkedIn or Tumblr. À bientôt <span role='img' aria-label='wave'>👋</span>
      </p>
      <button id='change text'>What's More?</button>
      </div>
      
      
    </div>
  )
}
