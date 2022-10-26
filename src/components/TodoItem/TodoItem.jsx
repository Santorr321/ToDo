import React from 'react'

function TodoItem(props) {
  return (
    
    <li>
      <span className={`button ${props.completed && 'button-check'}`}></span>
      <p className={`${props.completed && 'checkp'}`}>{props.text}</p>
      <span className={`x ${props.completed && 'x-check'}`}></span>
    </li>
  )
}

export {TodoItem}