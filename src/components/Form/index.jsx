import React, { Component } from "react";
import "./Form.scss";
import Button from "../Button/index";

export class Form extends Component {
  state = {
    title: "",
    description: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("OK!");
  };
  render() {
    return (
      <form action="#" className="Form" onSubmit={this.handleSubmit}>
        <div className="Form-group">
          <label htmlFor="todoTitle" className="Form-label">
            Title:
          </label>
          <input
            type="text"
            id="todoTitle"
            name="title"
            value={this.state.title}
            className="Form-input"
          />
        </div>
        <div className="Form-group">
          <label htmlFor="todoDescription" className="Form-label">
            Description:
          </label>
          <textarea
            name="description"
            id="todoDescription"
            cols="30"
            rows="10"
            value={this.state.description}
            className="Form-input"
          />
        </div>
        <div className="Form-group Form-group--contentRight">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}

export default Form;
