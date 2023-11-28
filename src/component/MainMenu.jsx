import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import "../App.css"

function MainMenu() {
const {gameState,setGamestate} = useContext(QuizContext)
  return (
    <div className='Menu'>
        <button onClick={()=>{setGamestate("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu