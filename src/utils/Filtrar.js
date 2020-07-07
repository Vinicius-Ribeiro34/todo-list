const Filtrar = {

  removerSelecionado: (valor, value) => {

    //coloca como undefined o ToDo escolhido
    const atualizado = valor.map((dados) => {
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
  
  removerDiferentes: (valor, value) => {

    //coloca como undefined os valores diferentes do ToDo
    const atualizado = valor.map((dados) => {
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

};

export default Filtrar;
