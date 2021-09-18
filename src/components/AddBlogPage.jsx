import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { addBlogToDatabase } from "../actions/BlogActions";

const AddBlogPage = (props) => {
  return (
    <div className="d-flex flex-column">
      <h1 className="align-self-center text-uppercase fs-2 fw-normal mt-3">Add Blog</h1>
      <BlogForm
        onSubmit={(blog) => {
          props.dispatch(addBlogToDatabase(blog));
          props.history.push("/blogs");
        }}
      />
    </div>
  );
};

export default connect()(AddBlogPage);
