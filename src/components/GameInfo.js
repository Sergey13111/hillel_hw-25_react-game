import PropTypes from "prop-types";

const GameInfo = ({ status, history, jumpTo }) => {
  return (
    <div>
      <div className="status-info">{status}</div>
      <ol>
        {history.map((step, index) => {
          const isStartStep = index === 0;

          return (
            <li key={index}>
              <button className="btn" onClick={jumpTo(index)}>
                {isStartStep ? `Go to game start` : `Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

GameInfo.propTypes = {
  status: PropTypes.string.isRequired,
  history: PropTypes.array.isRequired,
	jumpTo: PropTypes.func.isRequired,
}

export default GameInfo;
