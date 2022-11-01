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

function useLocalStorage(itemName, initialValue) {
  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;
  

  if (!localStorageItem) {
  localStorage.setItem(itemName,JSON.stringify(initialValue));
  parsedItem=[];
  }
  else{
  parsedItem=JSON.parse(localStorageItem);
  }

  const [item, setItem]= React.useState(parsedItem);


  const saveItem= (newTodos)=>{
    const stringiedTodos= JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringiedTodos);
    setItem(newTodos);
  };

  return [
    item,
    saveItem,
  ];
 
}

/*const defaulTodos = [ 
{text:'Sacar Maylo',completed:true},    
{text:'Dar Comida a Maylo',completed:true},
{text:'Dormir',completed:true},
{text:'Terminar Cursos',completed:false},
{text:'Comer pollo',completed:false},
{text:'Salir al parque',completed:false},
{text:'Prueba',completed:false},
{text:'Prueba 2',completed:false},
];*/



function App() {

  const [todos,saveTodos]= useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue]= React.useState('');


   const completedTodos= todos.filter(todo=> !!todo.completed).length;
   const totalTodos= todos.length;
 

   let percentage;
   const percentageTodos= Math.trunc(((completedTodos)*100)/totalTodos);
   if (isNaN(percentageTodos)){
    percentage=0
   }
   else {
    percentage=percentageTodos
   }
   
   
    let searchedTodos= [] ;
    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    }
    else{
      searchedTodos= todos.filter (todo => {
      const todoText= todo.text.toLowerCase();
      const searchText= searchValue.toLowerCase();
      return todoText.includes(searchText);
      })
    }

    

    const completeTodo= (text) => {
    const todoIndex= todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos)
    };



    const deleteTodo= (text) => {
      const todoIndex= todos.findIndex(todo => todo.text === text);
      const newTodos= [...todos];
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
      };
    
  

   return (
     <>
        <TodoContainer>
            <CreateTodoButton/>
            <TodoTitle/>
            <TodoImg/>
            <ProgressBar percentage={percentage}/>
            <TodoSearch placeholder='Seach...' type='search' id='search' autocomplete='off' searchValue={searchValue} setSearchValue={setSearchValue}/>
            <TodoList>
             {searchedTodos.map(todo =>(
             <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>))}
            </TodoList>
            <HiddenButton/> 
        </TodoContainer>
        
     </>
   )
 }

export default App;



