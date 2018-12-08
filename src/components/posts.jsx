import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/postActions";
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nexProps) {
    if (nexProps.newPost) {
      this.props.posts.unshift(nexProps.newPost);
    }
  }
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h3> {post.title} </h3> <p> {post.body} </p>{" "}
        </div>
      );
    });
  }
  render() {
    console.log(this);
    return (
      <div>
        <h1> Posts </h1>
        {this.renderPosts()}{" "}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
