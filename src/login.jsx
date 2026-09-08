import { useState, useEffect } from 'react'
import { motion} from 'framer-motion'
import './index.css'
const all_dialog = ["many millena ago, in a land far away, the local piplings faced a great threat.", "dos mios!"]
export default function Login() {
  const [dialogDone, setDialogDone] = useState(false);
  const [rawr, setRawr] = useState("skip");
  //
  useEffect(() => {
    const keydown = (e) =>{
      if(e.key === "Enter"){
        if(!dialogDone){
          setRawr("skip");
        }else{
          setRawr("next");
        }
      }
   }
      window.addEventListener("keydown", keydown);

      return () => window.removeEventListener("keydown", keydown);
  }, [dialogDone]);

  return(
    <div>
      <h1> pip's journey </h1>
      <div className = "dialog">
        {dialog("many millena ago, in a land far away, the local piplings faced a great threat.")}
      </div>
      <h1> {rawr}</h1>

    </div>
  );
}

function dialog(sentence){
    setDialogDone(false);
      const letters = Array.from(sentence) ///to letters
      return letters.map((letter, index) => {
          const scrollsettings = {
              initial: {opacity: 0, y:-1},
              whileInView: {opacity:1, y:0},
              viewport: {once:true},
              transition: {duration: 0.3, delay: (0.7 + index*0.1)},
              onAnimationComplete: () => {
                if(index === letters.length -1){
                  setDialogDone(true);
                }
              }
          }
          return(
              <motion.span key = {index} {...scrollsettings}>
                  <h3> {letter} </h3>
              </motion.span>
          );
      })
  }