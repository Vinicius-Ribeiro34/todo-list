import React, { Component } from "react";
import M from "materialize-css";

export default class Form extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col l5">
            <label htmlFor="todo">Texto</label>
            <input type="text" id="todo" />
          </div>
          <div className="input-field col s2">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i class="material-icons">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
