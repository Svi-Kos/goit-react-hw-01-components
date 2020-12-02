// import logo from './logo.svg';
import Profile from 'components/Profile/ProfileCard/Profile';
import StatisticList from 'components/Statistics/StatList/StatisticList';
import SectionStatistics from 'components/Statistics/StatSection/SectionStatistics';
import FriendList from 'components/Friends/FriendList/FriendList';
import TransactionList from 'components/TransactionHistory/TransactionList/TransactionList';
import SectionTransactionHistory from 'components/TransactionHistory/TransactionSection/SectionTransactionHistory';
import user from 'components/Profile/dataUser/user.json';
import statData from 'components/Statistics/dataStatistic/statistical-data.json';
import friends from 'components/Friends/dataFriends/friends.json';
import transactions from 'components/TransactionHistory/dataTransaction/transactions.json';
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
