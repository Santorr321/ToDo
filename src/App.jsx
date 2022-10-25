import React from 'react';
/*Components*/ 
import './App.scss';
import { TodoContainer } from './components/TodoContainer/TodoContainer.jsx';
import { TodoTitle } from './components/TodoTitle/TodoTitle.jsx';
import { TodoImg } from './components/TodoImg/TodoImg.jsx';
import { ProgressBar } from './components/ProgressBar/ProgressBar.jsx';
import { TodoList } from './components/TodoList/TodoList.jsx';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { HiddenButton } from './components/HiddenButton/HiddenButton';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const todos = [ 
{text:'Sacar Maylo',completed:false},    
{text:'Dar Comida a Maylo',completed:false},
{text:'Dormir',completed:false},
{text:'Terminar Cursos',completed:false}
];

function App() {
   return (
     <>
        <TodoContainer>
            <TodoTitle/>
            <TodoImg/>
            <ProgressBar/>
            <TodoSearch/>
            <TodoList>
             {todos.map(todo =>(
             <TodoItem key={todo.text} text={todo.text}/>))}
            </TodoList>
            <HiddenButton/> 
        </TodoContainer>
        <CreateTodoButton/>
     </>
   )
 }

export default App;



