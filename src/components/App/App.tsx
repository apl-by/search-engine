import { useState } from "react";
import StartPage from "../../pages/StartPage/StartPage";
import ResultPage from "../../pages/ResultPage/ResultPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { TInputValue } from "../../types/types";
import StateContext from "../../contexts/StateContext";
import Layout from "../Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<StartPage />} />
      <Route path="search" element={<ResultPage />} />
    </Route>
  )
);

const App = () => {
  const [inputValue, setInputValue] = useState<TInputValue>("");
  const state = { inputValue, setInputValue };

  return (
    <StateContext.Provider value={state}>
      <RouterProvider router={router} /* fallbackElement={} */ />
    </StateContext.Provider>
  );
};

export default App;
