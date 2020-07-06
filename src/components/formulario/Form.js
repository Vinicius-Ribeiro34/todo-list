import React, { Component } from "react";
import M from "materialize-css";

export default class Form extends Component {

  
  componentDidMount() {
    M.AutoInit();
  }

  constructor(props) {
    super(props);

    this.stateInicial = {
      todo: "",
    };

    this.state = this.stateInicial;
  }



  //salva o valor do input no state ao perceber mudança
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    console.log(this.state.todo);
  };

  render() {
    const { todo } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col l5">
            <label htmlFor="todo">Texto</label>
            <input
              type="text"
              id="todo"
              name="todo"
              values={todo}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field col s2">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="material-icons">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
