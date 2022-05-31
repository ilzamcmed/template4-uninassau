import { Routes, Route } from "react-router-dom";

import { EmployeesPage } from "./pages/EmployeesPage";

export const Rotas = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
    </Routes>
  );
};
