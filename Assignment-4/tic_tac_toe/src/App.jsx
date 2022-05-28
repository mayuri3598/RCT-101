import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from './components/Box'
import { Board } from './components/Board'
import { ScoreBoard } from './components/Scoreboard'
import { Reset } from './components/Reset'

function App() {
  const win_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
 const [board,setBoard] = useState(Array(9).fill(null));
 const [xplaying,setXplaying] = useState(true);
 const [scores,setScores] = useState({xScore:0,oScore:0});
 const[gameover,setGameover] = useState(false);
const handleClick = (boxid)=>{
  const updateboard = board.map((value,idx)=>{
    if(idx==boxid){
      return xplaying==true?"x":"o";
    }
    else{
      return value;
    }
  })
  const winner = checkwinner(updateboard);
  if(winner){
    if(winner=="x"){
      let{xScore} = scores;
      xScore+=1;
      setScores({...scores,xScore});
    }
    else{
      let{oScore}=scores;
      oScore+=1;
      setScores({...scores,oScore});
    }
  }
  console.log(scores);
  setBoard(updateboard);
  setXplaying(!xplaying);
}
const checkwinner = (board)=>{
  for(var i=0;i<win_conditions.length;i++){
    const [x,y,z]=win_conditions[i];
    if(board[x]&&board[x]==board[y]&& board[y]==board[z]){
      setGameover(true);
      return board[x];
    }
  }
}
const resetBoard = ()=>{
  setGameover(false);
  setBoard(Array(9).fill(null));
}
  return (
    
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xplaying} />
     <Board board={board} handleClick={gameover?resetBoard:handleClick}/>
     <Reset reset={resetBoard}/>
    </div>
  )
}

export default App
