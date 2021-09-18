import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blog?props.blog.title:"",
      description: props.blog?props.blog.description:"",
      error: "",
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description) {
      this.setState({ error: "Lütfen tüm alanları doldurunuz." });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
    }
  };

  render() {
    return (
      <div className="align-self-center mt-5 justify-content-center">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <input className="form-control"
              placeholder="enter title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="mb-3">
            <textarea  className="form-control"
              placeholder="enter desscription"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              rows="10"
            ></textarea>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary ">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
