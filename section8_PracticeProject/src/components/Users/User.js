import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.text}> 
        <span> {props.username}</span>
        <span> (</span>
        <span>{props.age}</span>
        <span> years old)</span>
      </div>
    </div>
  );
};

export default User;