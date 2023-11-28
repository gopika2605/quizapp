import React, { useState,useContext } from 'react'
import {Questions} from '../helpers/QuestionBank'
import { QuizContext } from '../helpers/Context'


function Quiz() {
  const {score,setScore,setGamestate} = useContext(QuizContext)
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [optionChoosen,setOptionChoosen] = useState("")
  
  const nextquestion=()=>{
    if(optionChoosen===Questions[currentQuestion].answer){
      setScore(score+1)


    }
    
    setCurrentQuestion(currentQuestion+1)
  }
  const finishQuiz=()=>{
    if(optionChoosen===Questions[currentQuestion].answer){
      setScore(score+1)


    }
    setGamestate("sore")


  }
  
  return (
    <div className="Quiz">
       <h1>{Questions[currentQuestion].prompt}</h1>
       <div className='Options'>
        <button onClick={()=>setOptionChoosen("A")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={()=>setOptionChoosen("B")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={()=>setOptionChoosen("C")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={()=>setOptionChoosen("D")}>{Questions[currentQuestion].optionD}</button>

       </div>
       {currentQuestion == Questions.length-1?(
        <button onClick={finishQuiz}>Finish Quiz</button>
       ):(
        <button onClick={nextquestion}>Next Question</button>
       )}
       
    </div>
  )
}

export default Quiz