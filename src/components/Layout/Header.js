import React from "react";
import mealImg from "../../assets/imgs/meals1.jpg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Delicious Meals" />
      </div>
    </React.Fragment>
  );
}
