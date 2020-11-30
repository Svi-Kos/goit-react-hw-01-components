import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

function StatisticList({ items }) {
  return (
    <ul class="stat-list">
      {items.map(item => (
        <li class="item" key={item.id}>
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
