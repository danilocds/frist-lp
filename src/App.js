import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
