//react, componentes, estaticos

import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/welcome/welcome';
import Question from './components/question/question';
import GameOver from './components/gameOver/gameOver';
import './App.css'

function App() {
  
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
    dispatch({ type: "REORDER_QUESTIONS" });
  },[]);

  return (
    <div className="App">
      <h1> Quiz de Programação </h1>
  {quizState.gameStage === "Start" && <Welcome />}
  {quizState.gameStage === "Playing" && <Question />}
  {quizState.gameStage === "End" && <GameOver />}
     
      
    </div>
  )
}

export default App
