import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  //   <!--Control the form hide/show-->
  const [displayForm, setDisplayForm] = useState(false);

  const formDisplayHandler = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={formDisplayHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formDisplayHandler}
        ></ExpenseForm>
      )}
    </div>
  );

  //   if (displayForm === "hide") {
  //     return <AddExpense showForm={formDisplayHandler}/>;
  //   }

  //   if (displayForm === "show") {
  //     return (
  //       <div className="new-expense">
  //         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showForm={formDisplayHandler}></ExpenseForm>
  //       </div>
  //     );
  //   }
};

export default NewExpense;
