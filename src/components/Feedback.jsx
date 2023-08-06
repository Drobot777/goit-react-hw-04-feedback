import {Statistics} from './statistics/Statistics';
import css from './Feedback.module.css';
import {useState} from 'react';

export const Feedback = () => {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  const staticChangeGood = e => {
    setGood (good + 1);
  };
  const staticChangeNeutral = e => {
    setNeutral (neutral + 1);
  };
  const staticCangeBad = e => {
    setBad (bad + 1);
  };
  const countTotalFeedback = (num1, num2, num3) => {
    return num1 + num2 + num3;
  };
  const countPositiveFeedbackPercentage = (num1, num2, num3) => {
    let numbTot = num1 + num2 + num3;
    let total = num1 * 100 / numbTot;
    if (numbTot === 0) {
      return 0;
    }
    return Math.round (total);
  };

  return (
    <div>
      {' '}<div className={css.containerButton}>
        <button
          type="button"
          className={css.button1}
          onClick={staticChangeGood}
        >
          Good
        </button>
        <button
          type="button"
          className={css.button2}
          onClick={staticChangeNeutral}
        >
          Neutral
        </button>
        <button type="button" className={css.button3} onClick={staticCangeBad}>
          Bad
        </button>
      </div>
      <h2 className={css.titlestatic}>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback (good, neutral, bad)}
        positivePercentage={countPositiveFeedbackPercentage (
          good,
          neutral,
          bad
        )}
      />
    </div>
  );
};
