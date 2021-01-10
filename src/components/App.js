import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import Transactions from './Transactions';
import FriendList from './FriendsList';

import userData from '../data/user.json';
import statsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionData from '../data/transaction.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendList friends={friendsData} />
      <Transactions transactions={transactionData} />
    </>
  );
};

export default App;
