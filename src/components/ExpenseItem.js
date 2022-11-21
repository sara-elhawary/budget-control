import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { id, name, cost } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div className="d-flex justify-content-between">
        <span className="badge bg-primary badge-pill mr-3">{cost}</span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
};

export default ExpenseItem;
