import React from "react";

function ExpenseButtons() {
  return (
    <section className="h-full w-full flex justify-center itmes-center mt-3">
      <div className="h-full w-full sm:w-11/12 flex flex-col justify-center items-center sm:flex-row gap-3">
        <button className="bg-red-600 w-60 h-16 text-lg rounded-full font-bold text-white">+ Add Expense</button>
        <button className="bg-green-600 w-60 h-16 text-lg rounded-full font-bold text-white">+Add Income</button>
      </div>
    </section>
  );
}

export default ExpenseButtons;
