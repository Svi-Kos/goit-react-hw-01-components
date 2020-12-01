import Statistics from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import s from 'components/Statistics/StatisticsStyles.module.css';

function StatisticList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <li key={item.id}>
          <Statistics stats={item} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticList;
