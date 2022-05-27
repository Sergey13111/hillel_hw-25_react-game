import PropTypes from 'prop-types';

const Square = ({ value, onClick, isWinnerSquare }) => {
  return (
    <button className={`square ${ isWinnerSquare ? "winnerLine" : "" }`} onClick={onClick}>{value}</button>
  );
};

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]).isRequired,
  onClick: PropTypes.func.isRequired,
  isWinnerSquare: PropTypes.bool.isRequired,
}

export default Square;