import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
  const expenses = [
    {
      id: 1,
      name: "Clothes",
      cost: 40,
    },
    {
      id: 2,
      name: "Food",
      cost: 20,
    },
    {
      id: 3,
      name: "Outings",
      cost: 20,
    },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        const { id, name, cost } = expense;
        return <ExpenseItem id={id} name={name} cost={cost} key={id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
