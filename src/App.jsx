import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nevbar from './Component/Nevagation-bar/Nevbar'
import Card from './Component/Shop/Shop'

function App() {
 
  return (
 <div className="App">

        <Nevbar></Nevbar>
        <Card></Card>
 </div>


  )
}

export default App
