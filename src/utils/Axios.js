import LocalStorage from "./LocalStorage";
import PopUp from './PopUp'
import axios from "axios";

const Axios = {

    //faz um post no url digitado e envia os dados do LocalStorage
  exportar: (url, dados) => {
    axios.post(url, dados)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        PopUp.exibeMensagem('error', "Erro ao exportar");
      });
  },

  //faz um get no url digitado e salva os dados no LocalStorage
  importar: (url) => {
    axios.get(url)
      .then((res) => {
        const todo = LocalStorage.receber();
        //concatena os dados recebidos com os já existentes
        const resultado = todo.concat(res.data);
        LocalStorage.salvar(resultado);
      })
      .catch((error) => {
        PopUp.exibeMensagem('error', "Erro ao importar");
      });
  },
};

export default Axios;
