import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import InputGroup from "../layout/InputGroup";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  handleChangeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const NewContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    }
    dispatch({ type: "ADD_CONTACT", payload: NewContact });
    this.setState({ name: "", email: "", phone: "", errors: "" });
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <InputGroup
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    label="Name"
                    value={name}
                    onChange={this.handleChangeText}
                    error={errors.name}
                  />
                  <InputGroup
                    type="emial"
                    name="email"
                    placeholder="Enter name"
                    label="email"
                    value={email}
                    onChange={this.handleChangeText}
                    error={errors.email}
                  />
                  <InputGroup
                    type="text"
                    name="phone"
                    placeholder="Enter phone"
                    label="phone"
                    value={phone}
                    onChange={this.handleChangeText}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="ADD"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
