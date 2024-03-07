import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
      <div className='flex items-center justify-center flex-col text-xl'>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
