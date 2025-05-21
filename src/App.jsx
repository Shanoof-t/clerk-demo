import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import { SignUp } from "@clerk/clerk-react";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
