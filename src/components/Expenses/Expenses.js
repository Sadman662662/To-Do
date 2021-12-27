import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseYearFilter from "./ExpenseYearFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function yearFilterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    );
  });

  
  return (
    <Card className="expenses">
      <ExpenseYearFilter
        selected={filteredYear}
        onChangeFilter={yearFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
