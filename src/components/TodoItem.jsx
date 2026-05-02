import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../features/todos/todosSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span className={`todo-text ${todo.completed ? 'done' : ''}`}>
        {todo.text}
      </span>
      <button
        className="btn-delete"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        ✕
      </button>
    </div>
  )
}

export default TodoItem