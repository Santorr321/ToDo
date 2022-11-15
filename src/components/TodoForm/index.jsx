import React from 'react'
import { TodoContext } from '../../context'

function ToDoForm() {

const [newTodoValue,setNewTodoValue]=React.useState("")


const onChange = (event) => {
    setNewTodoValue(event.target.value);
}

const{
addTodos,
setOpenModal,
}=React.useContext(TodoContext);


const onCancel = () => {
setOpenModal(false)
}

const onSubmit = (event)=>{
  event.preventDefault();
  addTodos(newTodoValue)
  setOpenModal(false)
}

  return (
  
<form onSubmit={onSubmit}>
<label></label>
<textarea placeholder="Add a new To Do" value={newTodoValue} onChange={onChange}/>
<div>
    <button
        type="button"
        onClick={onCancel}
        >
            Cancel
        
        </button>
        <button
        type="submit"
        >
        Add
        </button>
</div>  
    </form>
  )
}

export {ToDoForm}