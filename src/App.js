import React from "react";
import "./App.css";
import Header from "./MyComponent/Header";
import Balance from "./MyComponent/Balance";
import TranForm from "./MyComponent/TranForm";
import TranHistory from "./MyComponent/TranHistory";
import { GlobalProvider } from "./Context/GlobalState.js";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />

      <TranForm />
      <TranHistory />
    </GlobalProvider>
  );
}

export default App;
