// src/components/UserForm.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = ({ addUser, updateUser, users = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      const existingUser = users.find(user => user.id === parseInt(id));
      if (existingUser) {
        setName(existingUser.name);
        setEmail(existingUser.email);
      }
    }
  }, [id, users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateUser({ id: parseInt(id), name, email });
    } else {
      addUser({ name, email });
    }
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">{id ? 'Edit User' : 'Register User'}</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Register'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
