import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
    
    const closeModal = () => {
        props.onClose();
    }
    
    return (
        <div    
            className={`
                ${styles.modal}
                ${(props.errorTitle === '' && props.errorText === '') ? styles.hideModal : styles.showModal}

                `} 
            onClick={closeModal}
        >
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{props.errorTitle}</h2>
                </div>
                <div className={styles.body}>
                    <p className={styles.text}>{props.errorText}</p>
                    <button id="button" autofocus className={styles.button} onClick={closeModal}>Okay</button>
                </div>
            </div>
        </div>
        
    )
};


export default Modal;