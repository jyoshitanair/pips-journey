import { useState } from 'react'
import Login from './login.jsx'
import img from './assets/hero.png'
import { motion } from 'framer-motion'

export default function App() {
  const [buttonClicked, setButtonClicked] = useState(false)

  return(
    <div>
      {!buttonClicked &&
      <div className = "dialog" style = {{gap: '10rem'}}>
        <div>
          <h1> Pip's Journey </h1>
          <button onClick={() => zoomer()}> Click to play</button>
        </div>
        <motion.img
          animate = {{scale: buttonClicked? 4:1}}
          transition = {{duration: 0.5}}
        />
        <img src = {img}/>
      </div>}
      {buttonClicked && <Login/>}

    </div>
  );
}

function zoomer(){
  setButtonClicked(true)
}