import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../store";

import Header from "../../components/Header";
import Posts from "../Posts";
import ErrorBoundary from "../ErrorBoundary";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
          <Posts />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
