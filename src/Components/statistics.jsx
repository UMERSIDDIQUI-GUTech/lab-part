// src/components/statistics.jsx
import React from 'react';

// Statistics component to display the statistics details.
const Statistics = ({ detail }) => {
  return (
    <div className="statistics-container">
      <div className="stat-item">
        <p>Total Users: {detail.totalUsers}</p>
      </div>
      <div className="stat-item">
        <p>Active Users: {detail.activeUsers}</p>
      </div>
      <div className="stat-item">
        <p>New Signups: {detail.NewSignups}</p>
      </div>
      <div className="stat-item">
        <p>Active Percentage: {detail.activePercentage}%</p>
        <div className="percentage-bar-background">
          <div 
            className="percentage-bar" 
            style={{ width: `${detail.activePercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
