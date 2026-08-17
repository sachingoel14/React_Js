import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Giftcards from "./Giftcards";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Giftcards username = "sachin"/>
    <Giftcards username = "goyal"/>
    <Giftcards username = "fun"/>
    <Giftcards username = "enjoy"/>
    </>
  )
}

export default App
