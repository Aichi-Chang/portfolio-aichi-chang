import React, { useState, useEffect } from 'react'
import Button from './Button'

export default function Fact() {

  const [expand, setExpand] = useState({
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false
  })



  return (
    <div>
    <h2>Some fun fact of me</h2>
   <p>
     Hello, I'm Aichi. Junior software engineer - enjoy reading manga, good food, and films <span role='img' aria-label='sunglasses'>😎</span>
   </p>
   {expand.one === true && <p id='intro-one'>I have enrolled in the General Assembly Software Engineering Bootcamp. I used to be a fashion designer(with lots of creative ideas)</p>}
   {expand.two === true && <p id='intro-two'>Being a software engineer has perfectly combined my creativity, problem-solving skills, and my knowledge in technology. <span role='img' aria-label='star'>💫</span></p>}
   {expand.three === true && <p id='intro-three'>I write code with JavaScrip and Python. I\'m also good at React, Node.js, Express, Django, MongoDB, PostgresQL, Webpack, Babel and more...</p>}
   {expand.four === true && <p id='intro-four'>I'm currently volunteering at Code Your Future as a teaching assistant <span role='img' aria-label='women-with-computer'>👩🏻‍💻</span>.</p>}
   {expand.five === true && <p id='intro-five'>I also speak French and Paris was my second home.</p>}
   {expand.six === true && <p id='intro-six'>You can contact me via Github, LinkedIn or Tumblr. À bientôt <span role='img' aria-label='wave'>👋</span></p>}
   <Button
    expand={expand}
    update={setExpand}
   />
   </div>
  )
}
