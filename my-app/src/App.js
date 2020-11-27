// import logo from './logo.svg';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import statData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
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
      <Statistics title="Upload stats" stats={statData[0]} />;
      <FriendList
        name={friends[0].name}
        avatar={friends[0].avatar}
        isOnline={friends[0].isOnline}
      />
      <FriendList
        name={friends[1].name}
        avatar={friends[1].avatar}
        isOnline={friends[1].isOnline}
      />
      <FriendList
        name={friends[2].name}
        avatar={friends[2].avatar}
        isOnline={friends[2].isOnline}
      />
      <FriendList
        name={friends[3].name}
        avatar={friends[3].avatar}
        isOnline={friends[3].isOnline}
      />
      <FriendList
        name={friends[4].name}
        avatar={friends[4].avatar}
        isOnline={friends[4].isOnline}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
