import LocalStorage from "../utils/LocalStorage";
import axios from "axios";

const Axios = {

    //faz um post no url digitado e envia os dados do LocalStorage
  exportar: (url, dados) => {
    axios.post(url, dados)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
        console.log(error);
      });
  },
};

export default Axios;
