import PropTypes from 'prop-types';
import s from 'components/TransactionHistory/Transaction.module.css';

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
  items: PropTypes.object.isRequired,
};
