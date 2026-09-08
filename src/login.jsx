import { useState, useEffect } from 'react'
import { motion} from 'framer-motion'
import Game from './game.jsx'
import './index.css'
const all_dialog = ["many millena ago, in a land far away, the local piplings faced a great threat.", "dos mios! hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"]
export default function Login() {
  const [dialogDone, setDialogDone] = useState(false);
  const [rawr, setRawr] = useState("ah");
  const [curIndex, setCurIndex] = useState(0);
  const [page, setPage] = useState("login");
  //
  useEffect(() => {
    const keydown = (e) =>{
      if(e.key === "Enter"){
        if(!dialogDone){
          setRawr("skip");
        }else{
          //move to next dialog
          if(curIndex < all_dialog.length -1){
            setCurIndex(prev => prev +1);
            setRawr("next");
            setDialogDone(false);
          }else{
            setRawr("end");
            setPage("game");

          }
        }
      }
   }
      window.addEventListener("keydown", keydown);

      return () => window.removeEventListener("keydown", keydown);
  }, [dialogDone, curIndex]);

  return(
    <div>
      {page === "login" && 
        <div>
          <h1> pip's journey </h1>
          <div className = "dialog">
            <Dialog 
            key = {curIndex}
            isSkipped = {rawr === "skip"}
            sentence = {all_dialog[curIndex]}
            onComplete = {() => setDialogDone(true)}
            />
          </div>
          <h1> {rawr}</h1>
        </div>
      }
      {page === "game" && <Game/>}
    </div>

  );
}

function Dialog({sentence, isSkipped,onComplete}){
      const letters = Array.from(sentence) ///to letters
      if (isSkipped){
        return(
              <motion.span>
                  <h3> {sentence} </h3>
              </motion.span>
          );
      }
      return letters.map((letter, index) => {
          const scrollsettings = {
              initial: {opacity: isSkipped ? 1:0, y:isSkipped ? 0:-1},
              whileInView: {opacity:1, y:0},
              viewport: {once:true},
              transition: {duration: isSkipped ? 0:0.07, delay: isSkipped ? 0:(0.07 + index*0.02)},
              onAnimationComplete: () => {
                if(index === letters.length -1){
                  onComplete();
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