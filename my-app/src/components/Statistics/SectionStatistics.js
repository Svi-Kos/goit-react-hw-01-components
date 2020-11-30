import PropTypes from 'prop-types';

function SectionStatistics({ title, children }) {
  return (
    <section class="statistics">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default SectionStatistics;

SectionStatistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
