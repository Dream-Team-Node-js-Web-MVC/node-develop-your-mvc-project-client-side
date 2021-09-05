import React from "react";
import ReactDOM from "react-dom";
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card';

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const hunel = new HunelCreditCard();

ReactDOM.render(
  <BrowserRouter>
    <HunelProvider config={hunel}>
      <App />
    </HunelProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
