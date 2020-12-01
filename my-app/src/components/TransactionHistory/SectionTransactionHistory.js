import PropTypes from 'prop-types';
import s from 'components/TransactionHistory/Transaction.module.css';

function SectionTransactionHistory({ children }) {
  return (
    <table className={s.transactionHistory}>
      {
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      }
      {children}
    </table>
  );
}

export default SectionTransactionHistory;

SectionTransactionHistory.propTypes = {
  children: PropTypes.node,
};
