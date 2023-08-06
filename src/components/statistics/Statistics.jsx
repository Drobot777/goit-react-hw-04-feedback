import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {Notification} from 'components/Notification';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  const renders = () => {
    if (total === 0) {
      return <div><Notification message="There is no feedback" /></div>;
    } else {
      return (
        <div>
          <p className={css.titlegood}>Good: {good}</p>
          <p className={css.titleneutral}>Neutral: {neutral}</p>
          <p className={css.titlebag}>Bad: {bad}</p>
          <p className={css.titletotal}>Total: {total}</p>
          <p className={css.titlepositiv}>
            Positiv feedback: {positivePercentage}%
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {renders ()}

    </div>
  );
};

Statistics.ropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
