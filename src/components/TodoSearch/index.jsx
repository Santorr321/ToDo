import React from "react";
import search from "/src/assets/icons/search.svg";

const TodoSearch = (props) => {
  const { id, placeholder, type, autocomplete, searchValue, setSearchValue } =
    props;

  const onSearchValueChage = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <label htmlFor={id}>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        autoComplete={autocomplete}
        value={searchValue}
        onChange={onSearchValueChage}
      />
      ,<img src={search}></img>
    </label>
  );
};

export { TodoSearch };
