import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useSelector(state => state.todos.items)
  const completed = todos.filter(t => t.completed).length

  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add your first one! ✨</p>
  }

  return (
    <div>
      <div className="stats">
        <span>{todos.length} tasks total</span>
        <span>{completed} completed</span>
      </div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList