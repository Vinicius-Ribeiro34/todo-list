import React, { Component } from "react";
import M from "materialize-css";

export default class Ordem extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  setGender = (event) => {
    this.props.ordenar(event.target.value);
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col l5">
            <label htmlFor="ordenar">Texto</label>
            <input type="text" id="ordenar" />

            <div onChange={this.setGender.bind(this)}>
              <p>
                <label>
                  <input className="with-gap" value="all" name="ordem" type="radio" defaultChecked/>
                  <span>Todos</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" value="todo" name="ordem" type="radio" />
                  <span>A fazer</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" value="done" name="ordem" type="radio" />
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
