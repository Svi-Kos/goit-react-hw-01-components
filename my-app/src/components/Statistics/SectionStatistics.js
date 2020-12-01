import PropTypes from 'prop-types';
import s from 'components/Statistics/StatisticsStyles.module.css';

function SectionStatistics({ title, children }) {
  return (
    <section className={s.statistics}>
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
