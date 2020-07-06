const key = '@todo-list/todo'

const LocalStorage = {

    salvar: (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    receber: () => {
        const dados = JSON.parse(localStorage.getItem(key));
        return(dados);
    }

}

export default LocalStorage;