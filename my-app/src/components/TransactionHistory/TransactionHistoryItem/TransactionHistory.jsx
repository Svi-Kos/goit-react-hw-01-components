import PropTypes from 'prop-types';
import s from '../TransactionHistoryItem/Transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <tr className={s.tr}>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.objectOf(PropTypes.string),
};
