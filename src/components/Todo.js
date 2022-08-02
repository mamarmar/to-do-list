import React from "react"

function Todo(props) {
    return (
        <div className="todo">
            <div className="modify-todo">
                <div className="completed" 
                    onClick={props.toggleCompleted}
                    // style={{backgroundColor: props.isCompleted ? "black" : "white"}}
                >
                    <span className="tooltiptext">Mark as completed</span>
                    {props.isCompleted && "⚫"}
                </div>
                <div 
                    className="delete-todo"
                    onClick={props.deleteTodo}
                >
                    x
                    <span className="tooltiptext">Delete To-Do</span>
                </div>
            </div>
            <div
                className="todo-text"
                // onInput={props.handleTodoUpdate} 
                // contentEditable={true}
                style={{textDecoration: props.isCompleted ? "line-through" : ""}}
            >
                {props.body}
            </div>
            
        </div>
    )
}

export default Todo