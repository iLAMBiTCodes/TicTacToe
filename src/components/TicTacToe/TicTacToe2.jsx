import React, { useState } from "react";

const TicTacToe2 = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 board
  const [isXNext, setIsXNext] = useState(true); // Alternates turns
  const [winner, setWinner] = useState(null); // Track the winner

  // Winning combinations
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return 'X' or 'O'
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent overwriting or playing after a winner

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    const currentWinner = checkWinner(newBoard);

    if (currentWinner) {
      setWinner(currentWinner); // Declare winner immediately
    }

    setBoard(newBoard);
    setIsXNext(!currentWinner && !isXNext); // Toggle turn only if no winner
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "10px" }}>
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{ width: "100px", height: "100px", fontSize: "24px" }}
          >
            {value}
          </button>
        ))}
      </div>
      <h3>
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Next Player: ${isXNext ? "X" : "O"}`
          : "It's a draw!"}
      </h3>
      <button onClick={resetGame} style={{ marginTop: "20px" }}>Restart</button>
    </div>
  );
};

export default TicTacToe2;
