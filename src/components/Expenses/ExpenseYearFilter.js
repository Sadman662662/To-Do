import React from 'react'
import "./ExpenseFilter.css";

function ExpenseYearFilter(props) {
    function dropDownYearChangeHandler(event) {
        props.onChangeFilter(event.target.value);
      }
      return (
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>Filter by Year</label>
            <select value={props.selected} onChange={dropDownYearChangeHandler}>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
          </div>
    );
};

export default ExpenseYearFilter;
