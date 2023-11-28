
import { useState,useContext } from 'react';
import './App.css';
import MainMenu from './component/MainMenu';
import Quiz from './component/Quiz';
import Sore from './component/Sore';
import { QuizContext } from './helpers/Context';

function App() {
  const [gameState, setGamestate] = useState("menu")
  const [score,setScore] = useState(0)

  return (
    <div className='App' >
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{gameState,setGamestate ,score,setScore}}>

      {
        gameState === "menu" && <MainMenu/>
      }
      {
        gameState === "quiz" && <Quiz/>
      }
      {
        gameState === "sore" && <Sore/>
      }
      </QuizContext.Provider>
    </div>
  );
}

export default App;
