import './App.js'
import React, {useState} from 'react';
import {Board} from './components/board.js'
import {Score} from './components/score.js'
import {ResetButton} from './components/reset.js'

function App() {
  const Win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]            //mentioning the win conditions
const [board,setBoard]=useState(Array(9).fill(null));//to fill board values to null before the game
const [xPlaying,setXPlaying]=useState(true); //to track the player X 
const [scores,setScores] =useState({xScore:0, oScore:0}) //to set initial score to zero
const [gameOver,setGameOver] = useState(false); //to track the game over

const handleBoxClick = (boxIdx) => {
  const updatedBoard=board.map((value,idx)=>{
    if(idx===boxIdx){
      return xPlaying===true?"X":"O";  //ternary condition to check who is playing
    }
    else{
      return value;
    }
  })

  const playerWon=Winner(updatedBoard); //calling Winner function to check for winner
  if(playerWon){
    if(playerWon==="O"){
    alert("O Won this game!") //shows the winner with message
    let{oScore}=scores;
    oScore +=1; //increment the score
    setScores({...scores,oScore})
    }
    else if(playerWon==="X") 
    {
      alert("X won the game!")//shows the winner with message
        let{xScore}=scores;
        xScore +=1;//increment the score
        setScores({...scores,xScore})
    }
    else if((playerWon!=="O") && (!playerWon==="X"))
    {
      alert("draw!")
    //increment the score
        //setScores({...scores,xScore})
    }
    else{
      alert("reset")
    }
 

  }
 
  setBoard(updatedBoard); 
  setXPlaying(!xPlaying);
}

const Winner=(board)=>{           //to check the winner
  for(let i=0;i<Win.length;i++)
  {
    const[x,y,z]=Win[i];

    if(board[x] && board[x]===board[y] && board[y]===board[z])
    {
      setGameOver(true);
      return board[x];
      
    }
  }
}

const resetBoard=()=>{    // to reset the board
  setGameOver(false);
  setBoard(Array(9).fill(null))
}

   return (
    <div className="App">
    <Score scores={scores} xPlaying={xPlaying} />   
    <Board board={board} onClick={gameOver? resetBoard : handleBoxClick}/>   
    <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
