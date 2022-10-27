import React from 'react'

function TodoItem(props) {
  const onComplete = () => { alert ('Se cumplio ' + props.text)}
  const onDelete = () => { alert ('Borraste ' + props.text)}

  return (
     <li>
      <span className={`button ${props.completed && 'button-check'}`} 
      onClick={onComplete}
      />
      <p className={`${props.completed && 'checkp'}`}>{props.text}</p>
      <span className={`x ${props.completed && 'x-check'}`}
      onClick={onDelete}
      />
    </li>
  )
}

export {TodoItem}