import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [noOfClicks, setNoOfClicks] = useState(0);

    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setXTurn(true);
      setWinner(null);
      setNoOfClicks(0);
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-2 bg-teal-200 '>
        <h1 className='p-2 text-3xl bg-teal-400 border border-black rounded-md text-green-950 '>Tic Tac Toe Game</h1>


        <div>
            <p className='p-2 text-2xl border-b-4 text-teal-950 border-teal-950'>
              {
                xTurn ? "X's Turn" : "O's Turn"
              }
            </p>
        </div>

        <Board 
            board={board}
            setBoard={setBoard}
            xTurn = {xTurn}
            setXTurn = {setXTurn}
            winner = {winner}
            setWinner = {setWinner}
            noOfClicks = {noOfClicks}
            setNoOfClicks = {setNoOfClicks}
            
        />

        <div className='h-12 text-3xl text-center text-teal-950'>
          {winner
            ? `Winner: ${winner}`
            : noOfClicks == 9
            ? `It's a Draw`
            : ``
          }
        </div>

        <button className='p-2 text-xl font-bold transition-all border border-black rounded-lg text-teal-950 active:scale-95' onClick={resetGame}>Reset</button>

        <p className='mt-[300px]'>Made with ❤️‍🔥 by iLAMBiT</p>
    </div>
  )
}

export default TicTacToe