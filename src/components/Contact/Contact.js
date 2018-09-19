import React, { Component } from "react";
import { Consumer } from "../../context";
export default class Contact extends Component {
  state = {
    showInfo: ""
  };

  handleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  handleDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i className="fas fa-sort-down" onClick={this.handleClick} />
                <i
                  className="fas fa-times"
                  style={{ float: "right", color: "red" }}
                  onClick={this.handleDelete.bind(this, id, dispatch)}
                />
              </h4>
              {showInfo && (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
