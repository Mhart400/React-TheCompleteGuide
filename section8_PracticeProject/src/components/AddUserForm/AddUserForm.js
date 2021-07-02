import React, { useState } from 'react';
import styles from './AddUserForm.module.css';
import Card from '../UI/Card';
import { checkPropTypes } from 'prop-types';


const AddUserForm = (props) => {
    
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    
    const handleAge = (event) => {
        setAge(event.target.value);

    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 ) {
            props.onUsernameError({
                title: "Invalid Input",
                text: "Please enter a valid name and age (non-empty values)."
            });
            return;
        };
        if (age < 1 || age === '') {
            props.onUsernameError({
                title: "Invalid Input",
                text: "Please enter a valid age (>0)."
            });
            return;
        };
        props.onValidInput({
            username: username,
            age: age
        })
        setUsername('');
        setAge('');
        document.getElementById("username").focus();
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input id="username" name="username" type='text' onChange={handleUsername} value={username} className={styles.input}></input>
                <label htmlFor="age" className={styles.label}>Age (Years)</label>
                <input id="age" name="age" type='number' min="0" step="1" value={age} onChange={handleAge} className={styles.input}></input>
                <button type='submit'>Add User</button>
            </form>
        </Card>
    )
}


export default AddUserForm;