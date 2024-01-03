import "./App.css";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<HomePage />} />
        <Route path="users/sign_in" element={<AuthPage login={"login"}/>} />
        <Route path="users/sign_up" element={<AuthPage login={"signup"}/>} />
      </Routes>
    </Router>
  );
}

export default App;
