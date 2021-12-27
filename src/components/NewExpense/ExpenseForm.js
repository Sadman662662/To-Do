import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function descriptionChangehandler(event) {
    setEnteredDescription(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expensedata = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      description: enteredDescription,
    };

    props.onSaveExpenseData(expensedata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredDescription("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangehandler}
          />
        </div>
      </div>
      <div>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
