import PropTypes from 'prop-types';

export default function Statistics({ stats }) {
  return (
    <div>
      <span class="label">{stats.label}</span>
      <span class="percentage"> {stats.percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};
