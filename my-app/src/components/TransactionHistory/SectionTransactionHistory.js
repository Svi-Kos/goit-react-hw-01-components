import PropTypes from 'prop-types';

function SectionTransactionHistory({ children }) {
  return (
    <table class="transaction-history">
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
