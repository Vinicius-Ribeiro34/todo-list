import React, { Component } from "react";
import Form from "./components/formulario/Form";
import Ordem from "./components/formulario/Ordem";
import Table from "./components/tabela/Table";
import LocalStorage from "./utils/LocalStorage";

class App extends Component {
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

  render() {
    return (
      <div className="container">
        <div className="card grey darken-3">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem />
            <div className="divider" />
            <Table todo={this.state.todo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
