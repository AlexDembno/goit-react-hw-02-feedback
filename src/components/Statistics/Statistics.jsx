import PropTypes from 'prop-types';

import style from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage = 0 }) {
  return (
    <>
      <ul className={style.list}>
        <li>
          <span className={style.span}>Good: {good}</span>
        </li>
        <li>
          <span className={style.span}>Neutral: {neutral}</span>
        </li>
        <li>
          <span className={style.span}>Bad: {bad}</span>
        </li>
        <li>
          <span className={style.span}>Total: {total}</span>
        </li>
        <li>
          <span className={style.span}>
            Positive feedback:
            {positivePercentage} %
          </span>
        </li>
      </ul>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
