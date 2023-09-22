
import './App.css';
import UserForm from './components/UserForm';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [college , setCollege] = useState("")

  const handleForm = (userData , Enteredcollege) =>{
   setUsers([...users ,userData])
   setCollege(Enteredcollege)
  }
  return (
    <div className="App">
      <h1>FORM OF USERS</h1>
      <UserForm onAddUser = {handleForm}/>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              Username: {user.username}, Age: {user.age} , college : {college}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
