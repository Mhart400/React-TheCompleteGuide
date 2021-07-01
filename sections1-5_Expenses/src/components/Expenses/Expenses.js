import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yrSelected = (year) => {
    console.log(year + " selected!");
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((x) => {
    return x.date.getFullYear() == filteredYear;
  });


 


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={yrSelected} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
