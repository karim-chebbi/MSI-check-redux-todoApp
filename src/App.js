import React from 'react'
import NavBar from './components/NavBar'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1 className='text-center my-3'>Task Manager</h1>
      <TaskList />
    </div>
  )
}

export default App