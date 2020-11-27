// import PropTypes from 'prop-types';

export default function Statistics(props) {
  return (
    <section class="statistics">
      <h2 class="title">{props.title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage"> {props.stats.percentage}%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
}

// Profile.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   stats: PropTypes.object,
// };
