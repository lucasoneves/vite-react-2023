import './App.css'
import Pet from './components/Pet'
import SearchParams from './components/SearchParams'
import { useState } from 'react'

function App() {

  

  return (
    <div className="App">
      <h1>React</h1>
      <Pet name="Lolla" animal="Dog" breed="Yorkshire"/>
      <Pet name="Bidu" animal="Dog" breed="Yorkshire"/>
      <Pet name="Toby" animal="Dog" breed="Yorkshire"/>
      <SearchParams />
    </div>
  )
}

export default App
