import React from 'react'

const TodoSearch = (props) => {
    const {id, placeholder, type, autocomplete} = props

   const onSearchValueChage = (event)=>{ console.log(event.target.value)};

    return (
      <label htmlFor={id}>
        <input 
          id={id}
          placeholder={placeholder}
          type={type}
          autoComplete={autocomplete}
          onChange={onSearchValueChage}
        />
        <img src='/public/icons/search.svg'></img>
      </label>
      
    );
  };
  
  export { TodoSearch };