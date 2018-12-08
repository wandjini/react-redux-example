import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/posts";
import PostForm from "./components/postForm";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          {" "}
          <PostForm />
          <hr /> <Posts />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
