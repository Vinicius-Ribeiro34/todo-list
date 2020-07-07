const Filtrar = {

  removerSelecionado: (todo, value) => {

    //coloca como undefined o ToDo escolhido
    const atualizado = todo.map((dados) => {
      if (dados.value !== value) {
        return dados;
      } else {
        return undefined;
      }
    });

    //remove os dados undefined
    const removido = atualizado.filter((dados) => {
      return dados !== undefined;
    });

    return removido;
  },
  
  removerDiferentes: (todo, value) => {

    //coloca como undefined os dados diferentes do ToDo
    const atualizado = todo.map((dados) => {
      if (dados.value === value) {
        return dados;
      } else {
        return undefined;
      }
    });

    //remove os dados undefined
    const removido = atualizado.filter((dados) => {
      return dados !== undefined;
    });

    return removido;
  },

  //remove os dados que não estiverem concluidos
  resgatarConcluidos: (todo) => {
    //seta como undefined os dados que não estiverem concluidos
    const atualizado = todo.map((dados) => {
      if (dados.concluido) {
        return dados;
      } else {
        return undefined;
      }
    });

    const removido = atualizado.filter((dados) => {
      return dados !== undefined;
    });

    return removido;
  },

  //remove os dados que estiverem concluidos
  resgatarFazendo: (todo) => {
    //seta como undefined os dados que estiverem concluidos
    const atualizado = todo.map((dados) => {
      if (!dados.concluido) {
        return dados;
      } else {
        return undefined;
      }
    });

    const removido = atualizado.filter((dados) => {
      return dados !== undefined;
    });

    return removido;
  },

  removerDiferentesInput: (todo, texto) => {
    //coloca como undefined os dados que não conterem o texto em seu value
    const atualizado = todo.map((dados) => {
      if (dados.value.indexOf(texto) > -1) {
        return dados;
      } else {
        return undefined;
      }
    });

    //remove os dados undefined
    const removido = atualizado.filter((dados) => {
      return dados !== undefined;
    });

    return removido;
  },

};

export default Filtrar;
