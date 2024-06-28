// src/components/UserForm.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserNewForm = ({ addUser, updateUser, users = [] }) => {
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
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' ,marginTop:"50px"}}>
      <h1 style={{ textAlign: 'center' }}>{id ? 'Edit User' : 'Register User'}</h1>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <button onClick={handleSubmit} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>{id ? 'Update' : 'Register'}</button>
    </div>
  );
};

export default UserNewForm;
