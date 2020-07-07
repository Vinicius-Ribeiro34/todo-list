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

    //obtendo linhas da tabela com dados do LocalStorage
    const linhas = (props.todo || []).map((linha, index) => {
        return(
                <tr className={linha.concluido ? "concluido" : ""} key={index}>
                    <td>{linha.value}</td>
                    <td><button onClick = { () => { props.removerTodo(linha.value) }} className="waves-effect waves-light red btn" ><i className="material-icons">delete</i></button></td>
                    <td><button onClick = { () => { props.setarEditar(linha.value) }} data-target="modalEditar" className="waves-effect waves-light blue btn modal-trigger" ><i className="material-icons">edit</i></button></td>
                    {linha.concluido ? <td><i className="material-icons">playlist_add_check</i></td> : <td><button onClick = { () => { props.concluir(linha.value)}} className="waves-effect waves-light green btn" ><i className="material-icons">check</i></button></td>}
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
        const {todo, removerTodo, setarEditar, concluir} = this.props;
        return(
            <table className="responsive-table highlight">
                <TableHead />
                <TableBody todo = {todo} removerTodo={removerTodo} setarEditar={setarEditar} concluir={concluir}/>
            </table>
        );
    }
}