// import { useState } from 'react'
import './App.css'
import { RouterProvider } from "react-router-dom"
import router from "./routing/router"
import { ContextProvider } from './context/context'
import { UserContextProvider } from './context/UserContext'
 
// L'esercizio Custom Hooks l'ho gestito direttamente sulla Homepage jsx

function App() {
  return (
    <>
      <ContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ContextProvider>
    </>
  )
}

export default App
