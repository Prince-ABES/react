import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {TodoProvider} from "./contexts"

function App() {
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <h1>Hello World</h1>    
    </TodoProvider>
  )
}

export default App
