import PropTypes from "prop-types";

import Square from "./Square";

const Board = ({ squares, onClick, winnerLine}) => {
	const renderSquare = (index) => {
		const isWinnerSquare = winnerLine.includes(index);
		return (
			<Square 
			value={squares[index]} 
			onClick={() => onClick(index)} 
			isWinnerSquare={isWinnerSquare} 
			/>
		);
	};

	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

Board.propTypes = {
	squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
	onClick: PropTypes.func.isRequired,
	winnerLine: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Board;
