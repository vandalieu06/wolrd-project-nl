import { useState } from 'react';
import './TicTacToe.css'

//Boton q obtiene los paramateros del componente Board
function Square ( {value, onSquareClick} ) {
  return (
    <button className="square" onClick={onSquareClick}> 
      {value} 
    </button>
    );  
}

export function Board (){
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClickSquare (i) {
    //Square[i] detecta la possicion hay un string o no || Deveulve X o O
    if (squares[i] || calculateWinner(squares)) { 
      return;
    }

    const nextSquares = squares.slice();
    xIsNext 
      ? nextSquares[i] = 'X' 
      : nextSquares[i] = 'O';
    
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  let status;
  const winner = calculateWinner(squares);
  winner 
    ? status = `Winner ${winner}` 
    : status = `Next player ${xIsNext ? 'X' : 'O'}`

  return(
    <div className='container--1'>
      <div className='status'>
        <span>
          {status}
        </span>
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClickSquare(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClickSquare(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClickSquare(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClickSquare(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClickSquare(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClickSquare(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClickSquare(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClickSquare(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClickSquare(8)}/>
      </div>
    </div>
  )
}

function calculateWinner (squares) {
  const possibleWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  for (let i = 0; i < possibleWinner.length; i++ ){
    const [a, b, c] = possibleWinner[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}