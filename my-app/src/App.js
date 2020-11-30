// import logo from './logo.svg';
import Profile from './components/Profile/Profile';
import StatisticList from './components/Statistics/StatisticList';
import SectionStatistics from './components/Statistics/SectionStatistics';
import FriendList from './components/Friends/FriendList';
import TransactionList from './components/TransactionHistory/TransactionList';
import SectionTransactionHistory from './components/TransactionHistory/SectionTransactionHistory';
import user from './components/Profile/user.json';
import statData from './components/Statistics/statistical-data.json';
import friends from './components/Friends/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
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
