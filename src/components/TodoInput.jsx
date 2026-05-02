import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

function TodoInput() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim() === '') return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="input-wrapper">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new task..."
      />
      <button className="btn-add" onClick={handleAdd}>+</button>
    </div>
  )
}

export default TodoInput