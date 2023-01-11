import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // the param in the useState hook is the varibale/prop we want to change (in the component) and on change re-render the component
  // it return an array of the value title and a function to change the value, which triggers react to re-evalue this component
  /* ------------------------------- using state ------------------------------ */
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /* ----------------------------- event changeHandlers ---------------------------- */
  //^ When we update state and it depends on the previous state, DONT USE BELOW Commented APPROACH
  const titleChangeHandler = (event) => {
    // setUserInput({
    //    ...userInput,
    //    enteredTitle: event.target.value
    // });

    // NOTE
    // ? We do it this way because React -- SCHEDULES UPDATES --,
    // ? so if there are a number of state updates, we might be using an outdated state snapshot,
    // ? the below approach guarantees the correct state updates are made

    // * React automatically executes the inside arrow function
    // *  Also, React automatically passes the previous state values as a param

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //    ...userInput,
    //    enteredAmount: event.target.value
    // })

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //    ...userInput,
    //    enteredDate: event.target.value
    // })

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    /* ------------------------------ update state ------------------------------ */
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };

    /* --------------------- sending child data up to parent -------------------- */
    props.onSubmitExpenseData(expenseData);

    /* ------------------------- reset the input fields ------------------------- */
   // ^ setState anyhow re-executes the component, so new state values will reflect in input boxes, if value attribute is set
    setUserInput({
       enteredTitle: "",
       enteredAmount: "",
       enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}                     // Two-way Binding for inputs (update state & feed state back to input)
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}                     // Two-way Binding for inputs (update state & feed state back to input)
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2030-01-01"
            value={userInput.enteredDate}                     // Two-way Binding for inputs (update state & feed state back to input)
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
