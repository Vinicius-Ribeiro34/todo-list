import React, { Component } from "react";

//criando head da tabela
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
            </tr>
        </thead>
    );
}

//criando body da tabela
const TableBody = props => {

    //obtendo linhas da tabela com dados do state(mudar para localstorage)
    const linhas = (props.todo || []).map((linha, index) => {
        return(
                <tr key={index}>
                    <th>{linha.value}</th>
                    <th><button onClick = { () => { props.removerTodo(linha.value) }} className="waves-effect waves-light red btn" ><i className="material-icons">delete</i></button></th>
                    <th><button onClick = { ()=> { props.setarEditar(linha.value) }} data-target="modalEditar" className="waves-effect waves-light blue btn modal-trigger" ><i className="material-icons">edit</i></button></th>
                    <th><button className="waves-effect waves-light green btn" ><i className="material-icons">check</i></button></th>
                </tr>
        );
    });

    //retorna a const linhas com todos as linhas da tabela
    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

export default class Table extends Component {

    render(){
        const {todo, removerTodo, setarEditar} = this.props;
        return(
            <table className="responsive-table highlight">
                <TableHead />
                <TableBody todo = {todo} removerTodo={removerTodo} setarEditar={setarEditar}/>
            </table>
        );
    }
}