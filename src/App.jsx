import { useEffect, useRef } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const themeDiv = useRef();
  const { theme } = useSelector((state) => state.theme);
const router = routes();
  useEffect(() => {
    if (theme === true) {
      themeDiv.current.classList.remove("light");
      themeDiv.current.classList.add("dark");
    } else {
      themeDiv.current.classList.remove("dark");
      themeDiv.current.classList.add("light");
    }
  }, [themeDiv, theme]);

  return (
    <div
      ref={themeDiv}
      className="bg-[var(--background)] max-w-screen min-h-screen"
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
