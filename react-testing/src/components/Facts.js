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
    <div className='mt4 background'>
    <h3 className='underline'>About Me ლ(´ ∀ ` *)ლ</h3>
   <p className='avenir'>
     Hello, I'm Aichi. Junior software developer - enjoy reading manga, eating french dessert, and watching indie films <span role='img' aria-label='sunglasses'>😎</span>
   </p>
   {expand.one === true && <p id='1' className='avenir'>I have enrolled in the General Assembly Software Engineering Bootcamp. I used to be a fashion designer(with lots of creative ideas)</p>}
   {expand.two === true && <p id='2' className='avenir'>Being a software engineer has perfectly combined my creativity, problem-solving skills, and my knowledge in technology <span role='img' aria-label='star'>💫</span></p>}
   {expand.three === true && <p id='3' className='avenir'>I write code with <strong>JavaScript</strong> and <strong>Python</strong>. I build applications with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>Django</strong>, <strong>MongoDB</strong>, <strong>PostgresQL</strong> and <strong>GraphQL</strong></p>}
   {expand.four === true && <p id='4' className='avenir'>I'm currently volunteering at <a href='https://codeyourfuture.io/' className='link blue grow'>Code Your Future</a> as a teaching assistant <span role='img' aria-label='women-with-computer'>👩🏻‍💻</span></p>}
   {expand.five === true && <p id='5' className='avenir'>I also speak Mandarin and French, Paris was my second home</p>}
   {expand.six === true && <p id='6' className='avenir'>You can find me on <a href='https://www.linkedin.com/in/aichi-chang/' className='link blue grow'>LinkedIn</a>, <a href='https://github.com/Aichi-Chang' className='link blue grow'>Github</a>, <a href='https://www.openprocessing.org/user/232063' className='link blue grow'>Openprocessing</a> or <a href='https://phoebexxx09.tumblr.com/' className='link blue grow'>Tumblr</a></p>}
   <Button
    expand={expand}
    update={setExpand}
   />
   </div>
  )
}
