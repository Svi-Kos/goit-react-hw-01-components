import Statistics from 'components/Statistics/StatItem/Statistics';
import PropTypes from 'prop-types';
import s from 'components/Statistics/StatList/StatListStyle.module.css';

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
