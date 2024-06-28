import React from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = ({users}) => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div className="user-details-container">
      <div className="user-details-card">
        <h1 className="user-details-title">User Details</h1>
        {user ? (
          <div className="user-details-content">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <p className="user-not-found">User not found</p>
        )}
      </div>
    </div>
  );

};

export default UserDetails;
