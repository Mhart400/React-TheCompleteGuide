import React from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import styles from './App.module.css';
import UserList from './components/Users/UserList';

function App() {
  return (
    <div>
      <div className={styles.appBackground}>
        <AddUserForm>ok</AddUserForm>
        <UserList />
      </div>
    </div>
  );
}

export default App;
