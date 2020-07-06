import React, { Component } from "react";
import Form from "./components/formulario/Form";
import Ordem from "./components/formulario/Ordem";
import Table from "./components/tabela/Table";
import LocalStorage from "./utils/LocalStorage";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    const dados = LocalStorage.receber();
    this.setState({ todo: dados });
  }

  //remove o ToDo escolhido
  removerTodo = nome => {

    const { todo } = this.state;

    //coloca como undefined o ToDo escolhido
    const atualizado = todo.map(dados => {
      if(dados.value !== nome){
        return dados;
      } else {
        return undefined;
      }
    });

    //remove os dados undefined
    const removido = atualizado.filter(dados => {
      return dados !== undefined;
    });

    //salva os dados no LocalStorage
    LocalStorage.salvar(removido);
  }

  render() {
    return (
      <div className="container">
        <div className="card grey darken-3">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem />
            <div className="divider" />
            <Table todo={this.state.todo} removerTodo={this.removerTodo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
