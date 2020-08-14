import React, {useState, useContext} from 'react'
import { UpdateExpandContext } from './Home'



export default function Order({expand, update}) {

 const [count, setCount] = useState(0)
 const order = ['one', 'two', 'three', 'four', 'five', 'six']
 const value = useContext(UpdateExpandContext)


 function handleClick() {
  setCount(count+1)
  const newData = { ...expand, [order[count]]: true }
  update(newData) 
}


  return (
    <div>
      {count <= 5 && <button id='add-text' className='button' onClick={() => handleClick()}>What's more?</button>}
      {count > 5 && 
        <>
        <h3>Enchanté <span role='img' aria-label='wave'>👋</span></h3>
        {!value.viewProjects && <button className='button' onClick={() => value.handleView()}>View Projects</button>}
        </>}
    </div>
  )
}
