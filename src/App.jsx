import "./App.css";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import AibotPage from "./Pages/AibotPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<HomePage isAuthenticated={isAuthenticated}/>} />
        <Route path="/ai_conversations" element={<AibotPage />} />
        <Route path="/users/sign_in" element={<AuthPage login={"login"} onAuthentication={handleAuthentication}/>} />
        <Route path="/users/sign_up" element={<AuthPage login={"signup"}/>} />
      </Routes>
    </Router>
  );
}

export default App;
