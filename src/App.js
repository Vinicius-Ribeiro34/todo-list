import React, { Component } from 'react';
import Form from './components/formulario/Form';
import Ordem from './components/formulario/Ordem';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <p className="flow-text">Todo List</p>
            <Form />
            <Ordem />
            <div className="divider" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
