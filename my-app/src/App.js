// import logo from './logo.svg';
import Profile from 'components/Profile/ProfileCard/Profile';
import StatisticList from 'components/Statistics/StatList/StatisticList.jsx';
import SectionStatistics from 'components/Statistics/StatSection/SectionStatistics.jsx';
import FriendList from 'components/Friends/FriendList/FriendList.jsx';
import TransactionList from 'components/TransactionHistory/TransactionList/TransactionList.jsx';
import SectionTransactionHistory from 'components/TransactionHistory/TransactionSection/SectionTransactionHistory.jsx';
import user from 'data/user.json';
import statData from 'data/statistical-data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <SectionStatistics title="Upload stats">
        <StatisticList items={statData} />
      </SectionStatistics>

      <FriendList items={friends} />

      <SectionTransactionHistory>
        <TransactionList items={transactions} />
      </SectionTransactionHistory>
    </div>
  );
}

export default App;
