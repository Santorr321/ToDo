import React from 'react'


 

function CreateTodoButton() {

  const onClikButton =()=>{alert('Aqui esta el modal')};

  return (
    <button
    onClick={onClikButton}

    >
      <span></span>
      </button>
  )
}

export {CreateTodoButton}