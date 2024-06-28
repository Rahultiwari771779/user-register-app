// src/App.js
import React ,{useState,useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Registration/UserList';
// import UserForm from './Registration/UserForm';
import UserDetails from './Registration/UserDetails';
import UserNewForm from './Registration/UserNewForm';
import { useNavigate, useParams } from 'react-router-dom';


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const navigate = useNavigate();

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
    navigate('/');
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    navigate('/');
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };


  return (
      <div>
        <Routes>
          {/* <Route path="/" element={<UserList />} />
          <Route path="/register" element={<UserNewForm />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/edit/:id" element={<UserNewForm />} /> */}

          <Route path="/" element={<UserList users={users} deleteUser={deleteUser} />} />
        <Route path="/register" element={<UserNewForm addUser={addUser} />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
        <Route path="/edit/:id" element={<UserNewForm users={users} updateUser={updateUser} />} />

        </Routes>
      </div>
  );
}

export default App;
