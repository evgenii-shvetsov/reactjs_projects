import React, { Component } from "react";

class InputCourse extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title === ''){
      alert("Hey, don't forget to add a course name")
    } else {
    this.props.addCourseProps(this.state.title);
    this.setState({
      title: "",
    })};


  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="f-container">
        <input contenteditable
          className="f-input"
          type="text"
          placeholder="Add Course..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="SUBMIT" className="f-submit" />
      </form>
    );
  }
}
export default InputCourse;
