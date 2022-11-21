import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Remaining from "./components/Remaining";
import Budget from "./components/Budget";
import TotalExpenses from "./components/TotalExpenses";
import Month from "./components/Month";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return (
    <div className="container">
      <div className="mt-3">
        <Month />
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <TotalExpenses />
        </div>
      </div>
      <h1>Expenses</h1>
      <div className="row mt-3">
        <ExpensesList />
      </div>
      <AddExpenseForm />
    </div>
  );
};

export default App;
