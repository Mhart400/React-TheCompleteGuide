import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
