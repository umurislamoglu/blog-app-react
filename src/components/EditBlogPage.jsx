import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { editBlogFromDatabase } from "../actions/BlogActions";
import { removeBlogFromDatabase } from "../actions/BlogActions";

const EditBlogPage = (props) => {
  return (
    <div className="d-flex flex-column">
      <h1 className="align-self-center text-uppercase fs-2 fw-normal mt-3">Edit Page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlogFromDatabase(props.blog.id, blog));
          props.history.push("/blogs")
        }}
      />
      <div className=" d-grid gap-2 col-2 mx-auto p-2">
      <button className="btn btn-danger mt-3 p-2"
       onClick={()=>{
          props.dispatch(removeBlogFromDatabase(props.blog.id))
          props.history.push("/blogs")
      }}>Delete</button>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((b) => {
      return b.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
