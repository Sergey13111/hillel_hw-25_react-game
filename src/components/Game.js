import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";
import GameInfo from "./GameInfo";


const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const { winner: isWiner } = calculateWinner(current.squares);
    if (squares[index] || isWiner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares
      }
    ]);
    setStepNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => () => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const { winner, winnerLine } = calculateWinner(current.squares);
  const isDraw = history[9]

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status= `Draw`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} winnerLine={winnerLine} />
      </div>

      <div className="game-info">
        <GameInfo status={status}  jumpTo={jumpTo} history={history}/>
      </div>
    </div>
  );
};

export default Game;
