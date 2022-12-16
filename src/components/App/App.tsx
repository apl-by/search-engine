import { useState } from "react";
import StartPage from "../../pages/StartPage/StartPage";
import ResultPage from "../../pages/ResultPage/ResultPage";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const App = () => {
  const inputState = useState("");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage inputState={inputState} />} />
        <Route path="search" element={<ResultPage inputState={inputState} />} />
      </Route>
    </Routes>
  );
};

export default App;
