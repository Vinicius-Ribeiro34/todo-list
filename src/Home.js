import React, { Component } from "react";
import Form from "./components/formulario/Form";
import Ordem from "./components/formulario/Ordem";
import Table from "./components/tabela/Table";
import LocalStorage from "./utils/LocalStorage";
import Editar from "./components/Modals/Editar";
import Filtrar from './utils/Filtrar';
import M from "materialize-css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      editar: [],
    };
  }

  componentDidMount() {
    M.AutoInit();
    const dados = LocalStorage.receber();
    this.setState({ todo: dados });
  }

  //remove o ToDo escolhido
  removerTodo = (value) => {
    const { todo } = this.state;

    //filtra os dados removendo os valorer não desejados
    const filtrados = Filtrar.removerSelecionado(todo, value);

    //salva os dados no LocalStorage
    LocalStorage.salvar(filtrados);
  };

  //recupera o ToDo a ser editado
  setarEditar = (value) => {
    const { todo } = this.state;
    const filtrados = Filtrar.removerDiferentes(todo, value);
    this.setState({editar: filtrados});
  }

  //edita o ToDo recuperado no setarEditar 
  editar = (value) => {
    //recupa os valores do state
    const { editar, todo }  = this.state;

    //pega o valor dentro do editar, para colocar no ToDo
    const a = editar[0].value;

    //remove o ToDo que vai ser editado da lista de ToDos
    const removido = Filtrar.removerSelecionado(todo, a);
    
    //verifica se o novo valor a ser colocado no ToDo não é null
    if(value !== null){

      //concatena o ToDo editado com a lista de ToDos
      const resultado = removido.concat(value);
      LocalStorage.salvar(resultado);
    }
  };

  teste = (e) => {
    e.preventDefault();
    console.log(this.state.editar);
    console.log(this.state.todo);
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
            <Table todo={this.state.todo} removerTodo={this.removerTodo} setarEditar={this.setarEditar}/>
            <Editar editar={this.editar}/>
            <button onClick={this.teste}>aaa</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
