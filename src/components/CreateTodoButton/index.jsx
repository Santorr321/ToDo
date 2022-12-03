import React from "react";

function CreateTodoButton(props) {
  const onClikButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button onClick={onClikButton}>
      <span></span>
    </button>
  );
}

export { CreateTodoButton };
