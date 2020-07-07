import React, { Component } from "react";
import Form from "./components/formulario/Form";
import Ordem from "./components/formulario/Ordem";
import Table from "./components/tabela/Table";
import LocalStorage from "./utils/LocalStorage";
import Editar from "./components/Modals/Editar";
import Filtrar from "./utils/Filtrar";
import M from "materialize-css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      editar: [],
      temporario: [],
      ordem: "all",
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
    this.setState({ editar: filtrados });
  };

  //edita o ToDo recuperado no setarEditar
  editar = (value) => {
    //recupa os valores do state
    const { editar, todo } = this.state;

    //pega o valor dentro do editar, para colocar no ToDo
    const valor = editar[0].value;

    //remove o ToDo que vai ser editado da lista de ToDos
    const removido = Filtrar.removerSelecionado(todo, valor);

    //verifica se o novo valor a ser colocado no ToDo não é null
    if (value !== null) {
      //concatena o ToDo editado com a lista de ToDos
      const resultado = removido.concat(value);
      LocalStorage.salvar(resultado);
    }
  };

  //adiciona o concluido ao ToDo selecionado
  concluir = (value) => {
    const { todo } = this.state;
    const filtrado = Filtrar.removerSelecionado(todo, value);

    //adiociona o concluido no ToDo escolhido
    const a = [
      ...this.state.temporario,
      {
        value: value,
        concluido: true,
      },
    ];
    //concatena ele com a lista de ToDos
    const resultado = filtrado.concat(a);
    //Salva no LocalStorage
    LocalStorage.salvar(resultado);
  };

  //coloca o state com a ordem que deve ser feita
  setarOrdem = (value) => {
    //após setar o state, executa o ordenar
    this.setState({ ordem: value }, this.ordenar(value));
  };
  
  //envia para a tabela os dados ordenados
  ordenar = (ordem) => {
    const todo = LocalStorage.receber()

    //verifica a ordem e seta o state com os dados ordenados
    switch(ordem) {

      case 'all': this.setState({todo: todo});
                  break;

      case 'todo':  const fazendo = Filtrar.resgatarFazendo(todo);
                    this.setState({todo: fazendo});
                    break;

      case 'done':  const done = Filtrar.resgatarConcluidos(todo);
                    this.setState({ todo: done });
                    break;

      default: break;
    }
  }
  teste = (e) => {
    e.preventDefault();
    console.log(this.state.ordem);
    console.log(this.state.todo);
    console.log(this.state.temporario);
  };

  render() {
    return (
      <div className="container">
        <div className="card grey darken-3">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem ordenar={this.setarOrdem} verificar={this.verificarOrdem} />
            <div className="divider" />
            <Table
              todo={this.state.todo}
              removerTodo={this.removerTodo}
              setarEditar={this.setarEditar}
              concluir={this.concluir}
            />
            <Editar editar={this.editar} />
            <button onClick={this.teste}>aaa</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
