import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  /* ------------------------------- using state ------------------------------ */
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* ------------------ filtered expenses list - user select ------------------ */
  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
   });

  // console.log(props.items);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onfilterChange={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
