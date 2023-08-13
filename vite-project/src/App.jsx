import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListPeoplePage from "./pages/ListPeoplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListPeoplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
