import React from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'

const App = () => {
  // The App component serves as the main entry point of the application. It renders the NavBar and TaskList components to display the task management interface.
  return (
    <div>
      <NavBar />
      <h1 className='text-center my-3'>Task Manager</h1>
      <TaskList />
    </div>
  )
}

export default App