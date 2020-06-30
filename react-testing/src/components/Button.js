import React, {useState} from 'react'

export default function Order({expand, update}) {

 const [count, setCount] = useState(0)
 const order = ['one', 'two', 'three', 'four', 'five', 'six']


 function handleClick() {
  setCount(count+1)
  if (count >= 5) {
    setCount(0)
  }
  const newData = { ...expand, [order[count]]: true }
  update(newData) 
}


  return (
    <div>
      <button id='add-text' onClick={() => handleClick()}>What's More?</button>
    </div>
  )
}
