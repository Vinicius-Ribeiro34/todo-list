import React, { Component } from 'react';
import Form from './components/formulario/Form';
import Ordem from './components/formulario/Ordem';
import Table from './components/tabela/Table';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      autores: [
          {
              todo: 'a'
          },
          {
              todo: 'v'
          }
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem />
            <div className="divider" />
            <Table autores={this.state.autores}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
