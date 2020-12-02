import TransactionHistory from 'components/TransactionHistory/TransactionHistoryItem/TransactionHistory.jsx';
import PropTypes from 'prop-types';
import s from 'components/TransactionHistory/TransactionHistoryItem/Transaction.module.css';

function TransactionList({ items }) {
  return (
    <tbody className={s.tbody}>
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
