import React, { Component } from "react";
import M from "materialize-css";

export default class Ordem extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      texto: [],
    };

    this.state = this.stateInicial;
  }

  componentDidMount() {
    M.AutoInit();
  }

  setGender = (event) => {
    this.props.ordenar(event.target.value);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    }, this.props.ordenarInput(value));
  };

  render() {
    const {texto} = this.state;
    return (
      <form>
        <p className="flow-text">Ordem</p>
        <div className="row">
          <div className="input-field col s5">
            <label htmlFor="ordenar">Texto</label>
            <input type="text" id="ordenar" name="texto" value={texto} onChange={this.handleChange} />
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
