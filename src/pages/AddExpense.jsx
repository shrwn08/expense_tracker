import React from "react";
import WhiteExpense from "../assets/expense_white.png"
import BlackExpense from "../assets/expense_black.png"
import { useSelector } from "react-redux";

function AddExpense() {
    const {theme} = useSelector(state=>state.theme)
  return (
    <section className="w-full h-full mt-3">
      <div className="w-11/12 flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
            {!theme?<img src={BlackExpense} className="w-60"/>:<img src={WhiteExpense} className="w-60"/>}
        </div>
        <div className="w-full h-full">
        {/**"" */}
          <form className="w-full h-auto py-3 flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="expenseName"
                placeholder="Expense On"
                className="text-[var(--foreground)] w-full border p-2 rounded border-[var(--border)]"
              />
            </div>
            <div>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                className="text-[var(--foreground)] w-full border p-2 rounded border-[var(--border)]"
              />
            </div>
            <div>
              <select name="category" className="text-[var(--foreground)] w-full border p-2 rounded border-[var(--border)]">
               <option>Select Category</option>
                <option>Housing</option>
                <option>Food</option>
                <option>Groceries</option>
                <option>Utilities & Bills</option>
                <option>Transport</option>
                <option>Education</option>
                <option>Health & Fitness</option>
                <option>Movie</option>
                <option>Shopping</option>
                <option>Miscellaneous</option>
                <option>Savings & Investments</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                name="date"
                className="text-[var(--foreground)] w-full border p-2 rounded border-[var(--border)]"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                + Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddExpense;
