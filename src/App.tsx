import './App.css'
import Block from './components/Block';
import {useState} from 'react';
function App() {
      const [state,setState]=useState(Array(9).fill(null));
      const [turn,setturn]=useState("X");
      const CheckWinner=(state:unknown[])=>{
           const win=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]  ];
          for(let i=0; i<win.length; i++){
            const [a,b,c]=win[i];
            if(state[a]!==null && state[a]===state[b] && state[b]===state[c])return true;
          }
      }
      const handleClick=(a:number)=>{
        if(state[a]!=null) return;
        
         const statecopy=Array.from(state);
         
         statecopy[a]=turn;
         setState(statecopy);
         const win=CheckWinner(statecopy);
         if(win){
          alert(turn + " " + "won the game");
        }
         setturn(turn==='X'?'O':'X');
               }
  function reload(): void {
    window.location.reload();
  }

  return (
    <>
    <h1 className='head'>Tic Tac Toe</h1>
    <div className='main'>
      <button className='btn btn-primary' onClick={reload}>New Game</button>
    <div className='container'>
     <div className="row">
      <Block OnClick={()=>handleClick(0)} value={state[0]}/>
      <Block OnClick={()=>handleClick(1)} value={state[1]}/>
      <Block OnClick={()=>handleClick(2)} value={state[2]}/>
     
     <div className="w-100"></div>
      <Block OnClick={()=>handleClick(3)} value={state[3]}/>
      <Block OnClick={()=>handleClick(4)} value={state[4]}/>
      <Block OnClick={()=>handleClick(5)} value={state[5]}/>
      
     <div className="w-100"></div>
      <Block OnClick={()=>handleClick(6)} value={state[6]}/>
      <Block OnClick={()=>handleClick(7)} value={state[7]}/>
      <Block OnClick={()=>handleClick(8)} value={state[8]}/>
      
    </div>
    </div>
    </div>
      
    </>
  )
}

export default App
