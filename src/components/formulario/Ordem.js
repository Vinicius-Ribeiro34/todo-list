import React, { Component } from "react";
import M from "materialize-css";

export default class Ordem extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <form action="#">
        <div className="row">
          <div className="input-field col l5">
            <label htmlFor="todo">Texto</label>
            <input type="text" id="todo" />

            <div>
              <p className="browser-default">
                <label>
                  <input className="with-gap" name="ordem" type="radio"/>
                  <span>Todos</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" name="ordem" type="radio" />
                  <span>A fazer</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" name="ordem" type="radio" />
                  <span>Feito</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}