import React from 'react'

function TodoItem(props) {

  return (
     <li>
      <span className={` button ${props.completed && 'button-check'}`} 
      onClick={props.onComplete}
      />
      <p className={`${props.completed && 'checkp'}`}>{props.text}</p>
      <span className={`x ${props.completed && 'x-check'}`}
      onClick={props.onDelete}
      />
    </li>
  )
}

export {TodoItem}