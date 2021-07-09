import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');


const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log('Submitted');
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameError ? "form-control invalid" : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameError && <p className="error-text" >First Name needs to be 2+ characters</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text"  
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName} 
          />
          {lastNameError && <p className="error-text" >Last Name needs to be 2+ characters</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input 
          type="email" 
          id="name" 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} 
        />
        {emailError && <p className="error-text" >Enter valid email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
