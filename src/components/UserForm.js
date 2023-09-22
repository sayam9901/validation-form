import React, { useState , useRef} from 'react';
import Warning from './Warning';
import "./userform.css"

const UserForm = (props) => {
    const [userData, setUserData] = useState({ username: '', age: '' });
    const [isValid , setIsValid] = useState(false)
    const collegeName = useRef();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
      setIsValid(false)
    };
  
    const handleSubmit = (e) => {
      console.log(collegeName.current.value)
      const Enteredcollege = collegeName.current.value
      // setUserData({...userData , collegeName : Enteredcollege})
      e.preventDefault();
      if(!userData.username || !userData.age){
        setIsValid(true)
      }
      else{
        setIsValid(false)
        props.onAddUser(userData , Enteredcollege);
        setUserData({ username: '', age: ''});
      }
   
    };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={userData.age}
        onChange={handleInputChange}
      />
            <label htmlFor="college">college name</label>
      <input
        type="text"
        ref={collegeName}
      />
      <button type="submit">Add Item</button>
    </form>
    {
        isValid && <Warning />
    }
    </div>
  );
};

export default UserForm;
