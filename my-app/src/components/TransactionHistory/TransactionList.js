import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';

function TransactionList({ items }) {
  console.log(5);
  return (
    <tbody>
      {items.map(item => (
        <TransactionHistory key={item.id} items={item} />
      ))}
    </tbody>
  );
}

TransactionList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionList;
