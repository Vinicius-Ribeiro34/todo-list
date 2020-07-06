const key = '@todo-list/todo'

const LocalStorage = {

    salvar: (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        window.location.reload();
    },

    receber: () => {
        const dados = JSON.parse(localStorage.getItem(key));
        return(dados);
    },

    remover: () => {
        localStorage.removeItem(key);
        window.location.reload();
    }

}

export default LocalStorage;