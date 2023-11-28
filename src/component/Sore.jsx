import React,{ useState,useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { Questions } from '../helpers/QuestionBank'

function Sore() {
  const {score,setScore,setGamestate} = useContext(QuizContext)
  const reStartQuiz=()=>{
    setScore(0)
    setGamestate('menu')

  }
  return (
    <div className='Sore'>
    <h1>Quiz Finished</h1>
    <h3>{score}/{Questions.length}</h3>
    <button onClick={reStartQuiz}>Restart quiz</button>
    </div>
  )
}

export default Sore