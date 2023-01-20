import style from './FeedbackOptions.module.css';

function FeedbackOptions({
  type,
  onLeaveFeedback1,
  onLeaveFeedback2,
  onLeaveFeedback3,
}) {
  return (
    <div className={style.wrapper_button}>
      <button className={style.button} onClick={onLeaveFeedback1} type={type}>
        Good
      </button>
      <button className={style.button} onClick={onLeaveFeedback2} type={type}>
        Neutral
      </button>
      <button className={style.button} onClick={onLeaveFeedback3} type={type}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
