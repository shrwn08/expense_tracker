import React from "react";
import { Link } from "react-router-dom";

function ExpenseButtons() {
  return (
    <section className="h-full w-full flex justify-center itmes-center mt-3">
      <div className="h-full w-full sm:w-11/12 flex flex-col justify-center items-center sm:flex-row gap-3">
        <Link to="/add-expense">
          <button className="bg-red-600 w-60 h-16 text-lg rounded-full font-bold text-white">
            + Add Expense
          </button>
        </Link>
        <Link to="/add-income">
          <button className="bg-green-600 w-60 h-16 text-lg rounded-full font-bold text-white">
            +Add Income
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ExpenseButtons;
