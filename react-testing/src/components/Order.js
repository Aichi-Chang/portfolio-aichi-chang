import React, {useState} from 'react'

export default function Order(props) {

 const [count, setCount] = useState(0)
 const order = ['one', 'two', 'three', 'four', 'five']


 function handleClick() {
  // setExpand({...expand, order: true})
  setCount(count+1)
  if (count >= 4) {
    setCount(0)
  }
  const newData = { ...props.expand }
  console.log(newData)
}


  return (
    <div>
      <button id='add-text' onClick={() => handleClick()}>What's More?</button>
    </div>
  )
}
