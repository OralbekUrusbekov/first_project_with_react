import React, { useState } from 'react'
import './pomodor.css'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, important: false }])
      setNewTask('')
    }
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const toggleImportant = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, important: !task.important } : task
    ))
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  const saveEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editingText } : task
    ))
    setEditingId(null)
  }

  const setDueDate = (id, date) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, dueDate: date } : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    remaining: tasks.filter(task => !task.completed).length,
  }

  return (
    <div className="main">
    <div className="todo-container">
      <h1 className="todo-header">Enhanced Todo List</h1>
      
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add Task
        </button>
      </form>
      
      <div className="todo-filters">
        <button onClick={() => setFilter('all')} className={`todo-filter ${filter === 'all' ? 'active' : ''}`}>All</button>
        <button onClick={() => setFilter('active')} className={`todo-filter ${filter === 'active' ? 'active' : ''}`}>Active</button>
        <button onClick={() => setFilter('completed')} className={`todo-filter ${filter === 'completed' ? 'active' : ''}`}>Completed</button>
      </div>

      <div className="todo-stats">
        <div className="stat-item">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.remaining}</div>
          <div className="stat-label">Remaining</div>
        </div>
      </div>

      <ul className="todo-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`todo-item ${task.important ? 'important' : ''} ${task.completed ? 'completed' : ''}`}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="todo-edit-input"
                />
                <button onClick={() => saveEdit(task.id)} className="todo-button save">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="todo-text">
                  {task.text}
                </span>
                <div className="todo-actions">
                  <button onClick={() => toggleComplete(task.id)} className="todo-button complete">
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => startEditing(task.id, task.text)} className="todo-button edit">
                    Edit
                  </button>
                  <button onClick={() => removeTask(task.id)} className="todo-button delete">
                    Delete
                  </button>
                  <input
                    type="date"
                    onChange={(e) => setDueDate(task.id, e.target.value)}
                    className="todo-date"
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      
    </div>
        </div>
  )
}