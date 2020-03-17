import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import store from "./store";
import { HttpServiceContext } from "./components/http-service-context/http-service-context";
import HttpService from "./services/http-service";

const httpService = new HttpService();

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
      <HttpServiceContext.Provider value = { httpService }>
        <App />
      </HttpServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root"),
);
