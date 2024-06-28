import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'

const UserList = ({ users, deleteUser }) => {
//     const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//   ]);

//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">Registered Users</h1>
      <Link to="/register" className="user-list-link">Register New User</Link>
      {users.length === 0 ? (
        <p>No users registered.</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-card-body">
              <div>
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
              <div className="user-card-buttons">
                <Link to={`/user/${user.id}`} className="btn btn-primary me-2 ms-2">View</Link>
                <Link to={`/edit/${user.id}`} className="btn btn-outline-secondary me-2 ms-2">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
