import PropTypes from 'prop-types';

const Square = ({ value, onClick, classSquaer}) => (
    <button className={classSquaer} onClick={onClick}>{value}</button>
);

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]).isRequired,
    onClick: PropTypes.func.isRequired,
    classSquaer: PropTypes.string.isRequired
}

export default Square;