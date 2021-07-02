import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import styles from './App.module.css';
import Modal from "./components/Modal/Modal";
import UserList from './components/Users/UserList';

function App() {
  
  const [errorTitle, setErrorTitle] = useState('');
  const [errorText, setErrorText] = useState('');
  const [users, setUsers] = useState([]);
  

  const handleUsernameError = (x) => {
    setErrorTitle(x.title);
    setErrorText(x.text);

  };
  
  const handleValidInput = (user) => {
      setUsers((prevUsers) => {
          return [user, ...prevUsers];
        }
      )
  };

  const handleClose = () => {
    setErrorTitle('');
    setErrorText('');
  };

  
  return (
    <div>
      <div className={styles.appBackground}>
        <AddUserForm onUsernameError={handleUsernameError} onValidInput={handleValidInput} >ok</AddUserForm>
        {users.length > 0 && <UserList users={users} />}
        <Modal errorTitle={errorTitle} errorText={errorText} onClose={handleClose} />
      </div>
    </div>
  );
}

export default App;
