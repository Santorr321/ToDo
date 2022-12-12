import React from "react";
/*Components*/
import { TodoContainer } from "../components/TodoContainer/index.jsx";
import { TodoTitle } from "../components/TodoTitle/index.jsx";
import { TodoImg } from "../components/TodoImg/index.jsx";
import { ProgressBar } from "../components/ProgressBar/index.jsx";
import { TodoList } from "../components/TodoList/index.jsx";
import { TodoItem } from "../components/TodoItem";
import { TodoSearch } from "../components/TodoSearch";
import { HiddenButton } from "../components/MoreProyects";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { ToDoForm } from "../components/TodoForm/index.jsx";
import { Loadingstate } from "../components/Loading/index.jsx";
import { NotFound } from "../components/NotFound/index.jsx";
/* Context */
import { TodoContext } from "../context";
/*Portal*/
import { Modal } from "../components/Modal";
function AppUI() {
  const {
    Error,
    loading,
    searchedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    percentage,
    openModal,
    setOpenModal,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoContainer>
        <CreateTodoButton setOpenModal={setOpenModal} />
        <TodoTitle />
        <TodoImg />
        <ProgressBar percentage={percentage} />
        <TodoSearch
          placeholder="Seach..."
          type="search"
          id="search"
          autocomplete="off"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {!!loading && <Loadingstate />}
          {!!Error && <p className="p1">Erorr Reload ...</p>}
          {!loading && !totalTodos && <NotFound />}
          {!!totalTodos && !searchedTodos.length && (
            <p className="p1">Not found {searchValue}</p>
          )}
          {}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <HiddenButton />
      </TodoContainer>
      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
