import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListPeoplePage from "./pages/ListPeoplePage";
import DetailedViewPage from "./pages/DetailedViewPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRouteForLogin from "./pages/ProtectedRouteForLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<ProtectedRouteForLogin component={LoginPage} />}
        />

        <Route
          path="/"
          element={<ProtectedRoute component={ListPeoplePage} />}
        />
        <Route
          path="/people/:id"
          element={<ProtectedRoute component={DetailedViewPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
