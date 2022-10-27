import React from 'react';
/*Components*/ 
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
{text:'Sacar Maylo',completed:true},    
{text:'Dar Comida a Maylo',completed:true},
{text:'Dormir',completed:true},
{text:'Terminar Cursos',completed:false},
{text:'Comer pollo',completed:false},
{text:'Salir al parque',completed:false},
{text:'Prueba',completed:false},
{text:'Prueba 2',completed:false},
];

function App() {
   return (
     <>
        <TodoContainer>
            <CreateTodoButton/>
            <TodoTitle/>
            <TodoImg/>
            <ProgressBar/>
            <TodoSearch placeholder='Seach...' type='search' id='search' autocomplete='off'/>
            <TodoList>
             {todos.map(todo =>(
             <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
            </TodoList>
            <HiddenButton/> 
        </TodoContainer>
        
     </>
   )
 }

export default App;



