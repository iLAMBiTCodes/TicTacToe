import React, { useState } from 'react'

const Board = ({ board, setBoard, xTurn, setXTurn, winner, setWinner, noOfClicks, setNoOfClicks }) => {
    
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],            // Diagonals
    ];
    const checkWinner = board => {
        if(winner) return;
        for(let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if(board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a]; //Return 'X' or 'O'
            }
        }
        return null;
    }

    const clickHandler = (index) => {
        
        // if(board[index] != null) return;
        if(board[index] || winner) return; // To prevent overwriting or playing after a winner
        const newBoard = [...board]; //To update the board we create a shallow copy of board
        newBoard[index] = xTurn ? "X" : "O"; 
        
        // Check winner logic
        // const currentWinner = checkWinner(newBoard);
        // if(currentWinner) {
        //     setWinner(currentWinner); //Declare winner immediately
        // }
        const currentWinner = checkWinner(newBoard);
        if(currentWinner) {
            setWinner(currentWinner);
        }
        
        setNoOfClicks(noOfClicks + 1);
        setXTurn(!xTurn);
        setBoard(newBoard);

    }

    const renderButton = (index) => {
        return (<button 
                    className='p-0 m-1 border-2 border-black rounded-md size-[75px] text-green-950 font-extrabold text-4xl active:scale-[95%] transition-all' 
                    key = {index}
                    onClick={_ => clickHandler(index)}>
                    {board[index]}
                </button>)
    };




  return (
    <div className='w-[250px] flex flex-wrap'>
        {Array(9).fill(0).map((_, index) => renderButton(index))}
    </div>
  )
}

export default Board