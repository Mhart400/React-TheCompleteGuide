import React, { useState, useEffect, useReducer, useContext, useRef, useImperativeHandle } from 'react';
import Input from './Input';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type = 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }; 
  }
  return { value: '', isValid: false };
};

const pwReducer = (state, action) => {
  if (action.type = 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }; 
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: '',
    isValid: false,
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && pwState.isValid);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [emailState.isValid, pwState.isValid]);


  //Hanlder Functions
  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({type: 'USER_INPUT', val: event.target.value});
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, pwState.value);
    } else if (!emailState.isValid) {
      emailRef.current.activate();
    } else {
      pwRef.current.activate();
    }
  };

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const pwRef = useRef();
 

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          label="Email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          isValid={emailState.isValid}
          ref={emailRef}
        ></Input>
        <Input
          type="password"
          label="Password"
          id="password"
          value={pwState.value}
          onChange={passwordChangeHandler}
          isValid={pwState.isValid}
          ref={pwRef}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
