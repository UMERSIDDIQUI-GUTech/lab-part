// src/App.js
import React from 'react';
import './App.css';  // Import the global CSS file
import Management from './Components/management';
import Statistics from './Components/statistics';
import Userinfo from './Components/userinfo';

function app () {

  const user1 = {
    name: "Umer",
    email: "umer13sep@gmail.com",
    role: "Manager",
    pic : "images.png"

  };

  const details = {
    totalUsers: 150,
    activeUsers: 100,
    NewSignups: 20,
    activePercentage: (75 / 100) * 100,
  };

  const messages = {
    message1: "Welcome to Your Dashboard",
    message2: "This is Your Progress",
    message3: "You Are Doing Great!",
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <section>
        <Userinfo user={user1} />
      </section>
      <section>
        <Statistics detail={details} />
      </section>
      <section>
        <Management message={messages} />
      </section>
    </div>
  );


}


export default app;
