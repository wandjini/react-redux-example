import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../actions/postActions";
class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addPost(post);
  };
  render() {
    return (
      <React.Fragment>
        <h1> Add Post </h1>{" "}
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Title: </label>{" "}
            <input
              onChange={this.onChange}
              type="text"
              name="title"
              defaultValue={this.state.title}
            />
          </div>{" "}
          <div>
            <label> body </label>
            <textarea
              onChange={this.onChange}
              name="body"
              defaultValue={this.state.body}
            />{" "}
          </div>
          <br />
          <button type="submit"> Submit </button>{" "}
        </form>{" "}
      </React.Fragment>
    );
  }
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
