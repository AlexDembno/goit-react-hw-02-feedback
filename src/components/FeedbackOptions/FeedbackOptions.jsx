import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ buttonName, increment }) {
  const element = buttonName.map(name => (
    <button
      key={name}
      className={style.button}
      onClick={() => increment(name)}
      type="button"
    >
      {name}
    </button>
  ));
  return <div className={style.wrapper_button}>{element}</div>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  buttonName: PropTypes.arrayOf(PropTypes.string).isRequired,
  increment: PropTypes.func.isRequired,
};
