import React from 'react'

const TodoSearch = (props) => {
    const {id, placeholder, type, autocomplete} = props
    return (
      <label htmlFor={id}>
        <input 
          id={id}
          placeholder={placeholder}
          type={type}
          autoComplete={autocomplete}
        />
        <img src='/public/icons/search.svg'></img>
      </label>
      
    );
  };
  
  export { TodoSearch };