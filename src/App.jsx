import './App.css'
import Pet from './components/Pet'

function App() {

  return (
    <div className="App">
      <h1>React</h1>
      <Pet name="Lolla" animal="Dog" breed="Yorkshire"/>
      <Pet name="Bidu" animal="Dog" breed="Yorkshire"/>
      <Pet name="Toby" animal="Dog" breed="Yorkshire"/>
    </div>
  )
}

export default App
