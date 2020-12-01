import PropTypes from 'prop-types';
import s from 'components/Statistics/StatisticsStyles.module.css';

export default function Statistics({ stats }) {
  return (
    <div className={s.item}>
      <span className={s.label}>{stats.label}</span>
      <span className={s.percentage}> {stats.percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};
