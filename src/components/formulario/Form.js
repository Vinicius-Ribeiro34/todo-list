import React, { Component } from "react";
import M from "materialize-css";
import LocalStorage from "../../utils/LocalStorage";

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      todo: [],
    };

    this.state = this.stateInicial;
  }

  
  componentDidMount() {
    M.AutoInit();
  }

  salvar = (e) => {
    e.preventDefault();
    
    //recebe os dados do LocalStorage
    const dados = LocalStorage.receber();
    const todo = this.state.todo;
    //verifica se os dados recebidos são nulos
    if(dados !== null){
      //se não forem nulos, concatena o valor do input com os dados
      const resultado = dados.concat(todo);
      LocalStorage.salvar(resultado);
    } else {
      //se nulos salva o valor do input no LocalStorage
      LocalStorage.salvar(todo);
    }
  }

  receber(e) {
    e.preventDefault();
    const a = LocalStorage.receber();
    console.log(a);
  }

  remover(e) {
    e.preventDefault();
    LocalStorage.remover();
  }


  //salva o valor do input no state ao perceber mudança
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: [{value}],
    });
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
              onClick={this.salvar}
            >
              <i className="material-icons">send</i>
            </button>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.remover}
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
