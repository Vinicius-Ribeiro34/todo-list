import React, { Component } from "react";

export default class Editar extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      substituir: [],
    };

    this.state = this.stateInicial;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: [{value}],
    });
  };

  render() {
    const { valor } = this.state;

    return (
      <div id="modalEditar" className="modal">
        <div className="modal-content">
          <form>
            <div className="input-field">
              <label htmlFor="editar">Editar</label>
              <input
                type="text"
                id="editar"
                name="substituir"
                value={valor}
                onChange={this.handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            name="action"
            type="submit"
            onClick={() => {
              this.props.editar(this.state.substituir);
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}
