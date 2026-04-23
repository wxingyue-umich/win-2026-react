import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Winter 2026 React Deliverable</h1>
          <p>
            Name: Xingyue Wang, UMID:45172049
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        Count times 3 is {count * 3}
      </section>

      <div className="ticks"></div>



      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
