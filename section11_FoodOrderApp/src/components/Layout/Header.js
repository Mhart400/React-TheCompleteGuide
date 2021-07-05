import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={props.showCart} ></HeaderCartButton>
      </header>
      <div className={classes['main-image']} >
        <img src={mealsImage} alt="a table full of food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;