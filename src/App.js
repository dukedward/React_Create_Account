import React from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
// import SignupAlt from "./components/SignupAlt";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SignupForm />
      {/* <SignupAlt /> */}
      <LoginForm />
    </div>
  );
}
