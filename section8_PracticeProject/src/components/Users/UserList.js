import React from 'react';
import styles from './UserList.module.css';
import User from './User';
import Card from '../UI/Card';


const UserList = props => {
    
    const test = [
        {username: "mike", age: "32"},
        {username: "Stephanie", age: "35"}
    ];
    
    return (
        <Card className={styles.div}>
            {test.map((user) => (
                <User username={user.username} age={user.age} />
            ))}
        </Card>
    )
}

export default UserList;