import React from 'react'

function TodoItem(props) {
  return (
    
    <li>
      <span className='button'></span><p>{props.text}</p><span className='x'></span>
    </li>
  )
}

export {TodoItem}