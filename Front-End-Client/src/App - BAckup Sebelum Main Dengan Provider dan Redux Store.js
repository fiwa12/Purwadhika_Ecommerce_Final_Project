import React from "react";
import { Route } from "react-router-dom";

// IMPORT PAGES
import Header from "./components/shop/Header";

//IMPORT STYLES
import "./assets/scss/styles.scss";

function App() {
  return (
    <div>
      <p>Hi this is App.js</p>
      <Header />
      {/* <Route path='/shop' component={Shop} />
      <Route path='/transaction' component={Transaction} />
      <Route path='/account' component={Account} /> */}
    </div>
  );
}

export default App;
