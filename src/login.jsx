import { useState } from 'react'
import { motion} from 'framer-motion'
import './index.css'
export default function Login() {
  return(
    <div>
      <h1> Welcome to pip's journy </h1>
      <div className = "dialog">
        {dialog("hiiiii")}
      </div>

    </div>
  );
}
function dialog(sentence){
    const letters = Array.from(sentence) ///to letters
    return letters.map((letter, index) => {
        const scrollsettings = {
            initial: {opacity: 0, y:-1},
            whileInView: {opacity:1, y:0},
            viewport: {once:true},
            transition: {duration: 0.3, delay: (0.7 + index*0.1)}
        }
        return(
            <motion.span key = {index} {...scrollsettings}>
                <h3> {letter} </h3>
            </motion.span>
        );
    })
}
