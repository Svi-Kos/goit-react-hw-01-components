import PropTypes from 'prop-types';
import s from 'components/Statistics/StatItem/StatisticsStyles.module.css';

export default function Statistics({ stats }) {
  return (
    <div className={s.item}>
      <span className={s.label}>{stats.label}</span>
      <span className={s.percentage}> {stats.percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
