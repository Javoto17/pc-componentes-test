import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { theme } from "./utils/theme";
import { GlobalStyle } from "./styles/globalStyles";

import { store } from "./store";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}
