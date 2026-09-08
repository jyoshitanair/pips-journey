import { useState } from 'react'
import Login from './login.jsx'
import img from './assets/hero.png'
import { motion } from 'framer-motion'

export default function App() {
  const [buttonClicked, setButtonClicked] = useState(false)
  const [moveOn, setMoveOn] = useState(false)
  return(
    <div>
      {!moveOn &&
      <div className = "dialog" style = {{gap: '10rem'}}>
         {!buttonClicked && <div>
          <h1> Pip's Journey </h1>
          <button onClick={() => zoomer()}> Click to play</button>
        </div>}
        <motion.img
          animate = {{scale: buttonClicked? 3:1, y: buttonClicked? 350: 0}}
          transition = {{duration: 1}}
          src = {img}
        />
      </div>}
      {moveOn && <Login />}
    </div>
  );
  function zoomer(){
    console.log("clicked")
    setButtonClicked(true)
    setTimeout(() => {
      setMoveOn(true)
    }, 2000)
  }
}

