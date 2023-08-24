import PropTypes from 'prop-types';

const Button = ({ toAddRemove, clickHandle, className }) => (
  <button type="button" onClick={clickHandle} className={className}>{toAddRemove}</button>
);

Button.propTypes = {
  toAddRemove: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
