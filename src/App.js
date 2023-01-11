import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

/* -------------------------------- Expenses -------------------------------- */
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Stationary",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Mouse Pad",
    amount: 20,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "Books",
    amount: 25,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "Watch",
    amount: 155,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e7",
    title: "Cables",
    amount: 44.55,
    date: new Date(2022, 7, 1),
  }
];

const App = () => {
  /* ---------------------------------- state --------------------------------- */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /* --------- function passed to child component which updates parent -------- */
  const addExpenseHandler = (expense) => {
    /* ---------- /since we are updating state on previous state values --------- */
    setExpenses((previousState) => {
      return [expense, ...previousState];
    })
  }

  /* ------------------ Old way of returning react components ----------------- */
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {expenses: expenses}),
  // );

  /* ------------------------------- return App component ------------------------------- */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
