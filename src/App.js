import React from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function clearInput() {
    setInput("");
  }

  function createTodo() {
    const newTodo = {
      id: nanoid(),
      body: input,
      isEditable: false,
      isCompleted: false
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  }

  function handleClick() {
    createTodo();
    clearInput();
  }

  function deleteTodo(event, todoId) {
    event.stopPropagation()
    setTodos((prevToDos) => prevToDos.filter((todoItem) => todoItem.id !== todoId));
  }

  function toggleCompleted(id) {
    setTodos(prevTodos => prevTodos.map(todoItem => {
      return todoItem.id === id ? 
      {...todoItem, isCompleted: !todoItem.isCompleted} : 
      todoItem
    }))
  }

  function deleteSelected() {
    setTodos(prevToDos => prevToDos.filter(todoItem => !todoItem.isCompleted))
  }

  // function handleTodoUpdate(e, id) {
  //   setTodos(prevTodos => prevTodos.map(todoItem => {
  //     return todoItem.id === id ? 
  //     {...todoItem, body: e.target.value} : 
  //     todoItem
  //   }))
  // }

  // function updateTodo(id) {
  //   setTodos(prevTodos => prevTodos.map(todoItem => {
  //     return todoItem.id === id ? 
  //     {...todoItem, isEditable: !todoItem.isEditable} : 
  //     todoItem
  //   }))
  // }

  const todoList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        body={todo.body}
        isEditable={todo.isEditable}
        isCompleted={todo.isCompleted}
        deleteTodo={(event) => deleteTodo(event, todo.id)}
        // updateTodo={(event) => handleTodoUpdate(event, todo.id)}
        toggleCompleted={() => toggleCompleted(todo.id)}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <main>
        <Input input={input} handleChange={handleInputChange} />
        <div className="button-container">
          <button 
            className="add-btn" 
            onClick={input && handleClick}
          >
            Add To-Do
          </button>
          <button 
            className="delete-selected" 
            onClick={deleteSelected}
            style={{backgroundColor: selectedTodos ? "#FFC914" : "#91C4F2"}}
          >
            Delete Selected
          </button>
        </div>
        
        <div className="todo-list">{todoList}</div>
      </main>
    </div>
  );
}

export default App;
