import React from "react";
import Login from "./Login";

var isLoggedIn = true;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // currentTime > 12 ? <h1>why</h1> :null or ======
        currentTime > 12 && <h1>why</h1>
      }
    </div>
  );
}

export default App;
