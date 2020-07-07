const key = '@todo-list/todo'

const LocalStorage = {

    salvar: (value) => {
        //transforma o JSON a ser salvo em uma string
        localStorage.setItem(key, JSON.stringify(value));
        window.location.reload();
    },

    receber: () => {
        //transforma a string a ser recuperada em um JSON
        const dados = JSON.parse(localStorage.getItem(key));
        return(dados);
    },

    remover: () => {
        localStorage.removeItem(key);
        window.location.reload();
    }

}

export default LocalStorage;