import React from 'react'

const TodoSearch = (props) => {
    const {id, placeholder, type} = props
    return (
      <label htmlFor={id}>
        <input 
          id={id}
          placeholder={placeholder}
          type={type}
        />
        <span>Q</span>
      </label>
      
    );
  };
  
  export { TodoSearch };