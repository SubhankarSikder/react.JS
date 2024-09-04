import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function TodoList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [todoMsg, setTodoMsg] = useState('')
  const [editId, setEditId] = useState(null)

  // const setNewTodo = (todo) => {
  //   const {id, txt} = todo
  //   <input 
  //     value={todoMsg}
  //     onChange={(e) => setTodoMsg(e.target.value)}
  //     placeholder='type yor new text'
  //   >
  //   </input>
  //   dispatch(updateTodo({id, txt}))
  // }
 

  return (
    <>
      <div>TodoList</div>
      {todos.map(todo => (
        
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
            
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