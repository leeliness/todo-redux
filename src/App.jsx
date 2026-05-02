import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Task Manager</h1>
        <p className="subtitle">Organize your day efficiently</p>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App