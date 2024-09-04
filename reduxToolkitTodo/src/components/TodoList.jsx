import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function TodoList() {
  const todos = useSelector(state => state.todos)
  console.log(todos);
  const dispatch = useDispatch()
  const [todoMsg, setTodoMsg] = useState('')
  const [editId, setEditId] = useState(null)

  const startEditing = (todo) => {
    setEditId(todo.id)
    setTodoMsg(todo.text)
  }

  const saveUpdate = (id) => {
    dispatch(updateTodo({ id, todoMsg }))
    setEditId(null)
    setTodoMsg('')
  }

  return (
    <>
      <div>TodoList</div>
      {todos.map(todo => (
        
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                placeholder='enter your new toDo'
              />
              <button onClick={() => saveUpdate(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => startEditing(todo)}>+</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </>
            
          ) }
          
        </li>
      ))}
    </>
  )
}

export default TodoList

