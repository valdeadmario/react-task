import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./style.ts";
import store from "../../store";
import Header from "../../components/Header";
import Posts from "../Posts";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Posts />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
