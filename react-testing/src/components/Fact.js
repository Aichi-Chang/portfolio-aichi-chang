import React, { useState } from 'react'

export default function Fact() {

  const [factArr, setFactArr] = useState([
    'I have enrolled in the General Assembly Software Engineering Bootcamp. I used to be a fashion designer(with lots of creative ideas)',
    `Being a software engineer has perfectly combined my creativity, problem-solving skills, and my knowledge in technology. <span role='img' aria-label='star'>💫</span>`,
    'I write code with JavaScrip and Python. I\'m also good at React, Node.js, Express, Django, MongoDB, PostgresQL, Webpack, Babel and more...',
    `I'm currently volunteering at Code Your Future as a teaching assistant <span role='img' aria-label='women-with-computer'>👩🏻‍💻</span>`,
    'I also speak French and Paris was my second home.',
    `You can contact me via Github, LinkedIn or Tumblr. À bientôt <span role='img' aria-label='wave'>👋</span>`
  ])
  const [count, setCount] = useState(0)

  function handleClick() {
    if (count >= 5) {
      setCount(0)
    } else {
      setCount(count+1)
    }  
  }

  return (
    <div>
    <h2>Some fun fact of me</h2>
   <p>
     Hello, I'm Aichi. Junior software engineer - enjoy reading manga, good food, and films <span role='img' aria-label='sunglasses'>😎</span>
   </p>
   <p>{factArr[count]}</p>
   <button id='add-text' onClick={() => handleClick()}>What's More?</button>
   </div>
  )
}
