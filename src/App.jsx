import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counterImage from "./assets/IMG_3471.JPG"

function App() {
  const [count, setCount] = useState(43)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div className="card">
        <img src={counterImage} alt='カウンターのイメージ' width={200} />
        <h1>カウンター</h1>
        <p>現在の数: {count}</p>
        <p>これは数を数えるものです</p>
        <button onClick={increment}>増やす</button>
        <button onClick={decrement}>減らす</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
