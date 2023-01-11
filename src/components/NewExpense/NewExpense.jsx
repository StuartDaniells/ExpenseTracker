import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

   /* --------- function passed to child component which updates parent -------- */
   const submitExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         id: (Math.random() * 10).toString(),
         ...enteredExpenseData,
      };

      props.onAddExpense(expenseData);
   }

   return(
      <div className="new-expense">
         <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
      </div>
   );
}

export default NewExpense;