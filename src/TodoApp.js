import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "TodoApp";

export default function TodoApp()
{
  const [todolist, setTodoList] = useState([]);

  const newItemRef = useRef();

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todolist));
  }, [todolist]);
  
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems) setTodoList(storageItems);
  }, []);

  function addTodoItem(newItem)
  {
    if (newItem === "" || newItem === null) return;

    setTodoList((prevList) => {
      return [...prevList, {id: uuidv4(), text: newItem, completed: false, onToggle: () => onCompletedToggle()}]
    });

    newItemRef.current.value = null;
  }

  function onCompletedToggle(id)
  {
    const newTodoList = [...todolist];
    const todoItemToModify = newTodoList.find(todoItem => todoItem.id === id);
    todoItemToModify.completed = !todoItemToModify.completed;

    setTodoList(newTodoList);
  }

  function clearCompletedItems()
  {
    const newList = todolist.filter(item => !item.completed)
    setTodoList(newList)
  }

  function editTodoItem(id)
  {
    const inputText = newItemRef.current;
    if (inputText.value === "" || inputText.value === null) return;

    const editItem = todolist.find(item => item.id === id);
    editItem.text = inputText.value;

    const newList = todolist.map(todoItem => {
      if (todoItem.id === id) {
        return editItem;
      }
      return todoItem;
    });

    setTodoList(newList);
    newItemRef.current.value = null;
  }

  return (
    <>
      <h1>To-Do List App</h1>

      <p>Add a New To-Do Item or Edit an existing item with the inputted value:</p>
      <input ref={newItemRef} type="text"/>
      <button onClick={() => addTodoItem(newItemRef.current.value)}>Add ToDo</button>
      <button onClick={clearCompletedItems}>Clear Completed</button>
      <br/>

      <TodoList todoList={todolist} toggle={onCompletedToggle} editItem={editTodoItem}/>
    </>
  );
}

function TodoList({todoList, toggle, editItem})
{
  return(
    <div>
      <h2>Current To-Do List</h2>
      <ul>
        <li>{todoList.filter(item => item.completed).length} Completed</li>
        <li>{todoList.filter(item => !item.completed).length} Undone</li>
        <li>{todoList.length} total</li>
      </ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} onToggle={toggle} editItem={editItem}/>
      ))}
    </div>
  );
}

function TodoItem({id, text = "Null Item", completed = false, onToggle, editItem})
{
  function handleOnToggle()
  {
    onToggle(id);
  }

  function onEditItem()
  {
    editItem(id);
  }

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleOnToggle}/>
      <label>{text}</label>
      <button onClick={onEditItem}>Edit</button>
    </div>
  );
}