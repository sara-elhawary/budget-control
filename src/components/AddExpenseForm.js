import React from "react";

const AddExpenseForm = () => {
  return (
    <div>
      <h1>Add a new expense</h1>
      <form>
        <div className="row">
          <div className="col-sm">
            <label for="expense-name">Name</label>
            <input
              type="text"
              id="expense-name"
              required="required"
              className="form-control"
            />
          </div>
          <div className="col-sm">
            <label for="expense-cost">Cost</label>
            <input
              type="number"
              id="expense-cost"
              required="required"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
