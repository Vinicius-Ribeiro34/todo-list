import React, { Component } from "react";
import M from "materialize-css";
import Form from "./components/formulario/Form";
import Ordem from "./components/formulario/Ordem";
import Table from "./components/tabela/Table";
import ButtonsInEx from "./components/formulario/ButtonsInEx";
import Editar from "./components/Modals/Editar";
import Exportar from "./components/Modals/Exportar";
import Importar from "./components/Modals/Importar";
import LocalStorage from "./utils/LocalStorage";
import Filtrar from "./utils/Filtrar";
import Axios from "./utils/Axios";

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
    const todo = LocalStorage.receber();

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
    const { editar } = this.state;

    const todo = LocalStorage.receber();

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
    const todo = LocalStorage.receber();
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
    const todo = LocalStorage.receber();

    //verifica a ordem e seta o state com os dados ordenados
    switch (ordem) {
      case "all":
        this.setState({ todo: todo });
        break;

      case "todo":
        const fazendo = Filtrar.resgatarFazendo(todo);
        this.setState({ todo: fazendo });
        break;

      case "done":
        const done = Filtrar.resgatarConcluidos(todo);
        this.setState({ todo: done });
        break;

      default:
        break;
    }
  };

  //orderna os ToDos pelo texto digitado
  ordenarInput = (texto) => {
    const { todo } = this.state;
    //filtra os dados diferentes do texto
    const filtrados = Filtrar.removerDiferentesInput(todo, texto);
    //verifica se o texto contem algo
    if (texto !== "") {
      this.setState({ todo: filtrados });
    } else {
      //se não conter, é retornado ao state os dados do LocalStorage
      const a = LocalStorage.receber();
      this.setState({ todo: a });
    }
  };

  //exporta os dados do LocalStorage usando axios
  exportar = (url) => {
    const dados = LocalStorage.receber();
    Axios.exportar(url, dados);
  };

  //importa os dados usando axios
  importar = (url) => {
    Axios.importar(url);
  };

  render() {
    return (
      <div className="container">
        <div className="card grey darken-3">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem
              ordenar={this.setarOrdem}
              ordenarInput={this.ordenarInput}
              verificar={this.verificarOrdem}
            />
            <div className="divider" />
            <Table
              todo={this.state.todo}
              removerTodo={this.removerTodo}
              setarEditar={this.setarEditar}
              concluir={this.concluir}
            />
            <div className="divider"></div>
            <ButtonsInEx />

            {/*Modals vão aqui*/}
            <Editar editar={this.editar} />
            <Exportar exportar={this.exportar} />
            <Importar importar={this.importar} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
