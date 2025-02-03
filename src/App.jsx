import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { routes } from './route'

function App() {
  const ro=useRoutes(routes);
  return (
   <div className="">
    {ro}
   </div>
  )
}

export default App
