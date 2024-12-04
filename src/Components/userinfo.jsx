// src/components/userinfo.jsx
import React from 'react';

// Userinfo component to display the user's details.
const Userinfo = ({ user }) => {
  return (
    <div className="userinfo-container">
      <p>Hi, {user.name}!</p>
      <p>Your email is {user.email}</p>
      <p>Your role is {user.role}</p>
      <img className="pic" src={user.pic} alt="User Profile" />
    </div>
  );
}

export default Userinfo;
