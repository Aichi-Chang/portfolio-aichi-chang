import React, {useState} from 'react'

export default function Order({expand, update}) {

 const [count, setCount] = useState(0)
 const order = ['one', 'two', 'three', 'four', 'five', 'six']


 function handleClick() {
  setCount(count+1)
  // if (count >= 5) {
  //   setCount(0)
  // }
  const newData = { ...expand, [order[count]]: true }
  update(newData) 
}


  return (
    <div>
      {count <= 5 && <button id='add-text' className='button hover-silver' onClick={() => handleClick()}>What's more?</button>}
      {count > 5 && <h3>Enchanté <span role='img' aria-label='wave'>👋</span></h3>}
    </div>
  )
}
