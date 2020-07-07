import React, { Component } from "react";

export default class Exportar extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      url: "",
    };

    this.state = this.stateInicial;
  }

  //salva o valor do input no state ao perceber mudança
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { valor } = this.state;

    return (
      <div id="modalExportar" className="modal">
        <div className="modal-content">
          <form>
            <p className="flow-text">Exportar</p>
            <div className="input-field">
              <label htmlFor="url">Url</label>
              <input
                type="text"
                id="url"
                name="url"
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
              this.props.exportar(this.state.url);
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}
