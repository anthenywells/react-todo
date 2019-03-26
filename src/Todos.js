import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const todoList = todos.length ? (

    todos.map(todo => {
      return (
        <div
        className="collection-item"
        key="{todo.id}"
        style={divStyle}>
          <span>{todo.content}</span>
          <button onClick={() => {deleteTodo(todo.id)}} style={{border: 'none'}}>
           <i className="fas fa-trash"></i>
          </button>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todos</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;