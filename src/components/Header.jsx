import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeButton } from "../redux/slices/themeSlice";
import { CiLight } from "react-icons/ci";
import { IoCloudyNight } from "react-icons/io5";

function Header() {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleThemeBtn = () => {
    dispatch(themeButton());
  };
  return (
    <header className="h-24 w-full  border-b-[var(--border)]  border-b-2 flex justify-center items-center drop-shadow-2xl">
      <div className="h-full w-11/12 flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] ">
          Expense Tracker
        </h1>

        <button
          type="button"
          className="text-[var(--foreground)] "
          onClick={handleThemeBtn}
        >
          {theme ? (
            <CiLight lassName={`${theme && "text-[#F9FAFB]"}  text-3xl`} />
          ) : (
             <IoCloudyNight
              className={`${!theme && "text-[#111827]"} text-2xl`}
            />
           
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
