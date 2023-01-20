import style from './Statistics.module.css';

function Statistics({
  text,
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) {
  return (
    <>
      <p className={style.text}>{text}</p>
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
