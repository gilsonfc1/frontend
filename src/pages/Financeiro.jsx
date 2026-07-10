import { useState } from "react";
import Mensagem from "./Mensagem";


function Financeiro() {


  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");
  const [mensagem, setMensagem] = useState("");



  const [lancamentos, setLancamentos] = useState(() => {

    const dadosSalvos = localStorage.getItem("lancamentos");

    return dadosSalvos
      ? JSON.parse(dadosSalvos)
      : [];

  });




  function salvarLancamentos(lista) {


    setLancamentos(lista);


    localStorage.setItem(

      "lancamentos",

      JSON.stringify(lista)

    );


  }




  function mostrarMensagem(texto) {


    setMensagem(texto);


    setTimeout(() => {

      setMensagem("");

    }, 3000);


  }




  function adicionarLancamento() {


    if (
      descricao === "" ||
      valor === ""
    ) {


      mostrarMensagem(
        "Preencha todos os campos"
      );


      return;

    }



    const novoLancamento = {


      descricao,

      valor: Number(valor),

      tipo


    };



    salvarLancamentos([

      ...lancamentos,

      novoLancamento

    ]);



    setDescricao("");
    setValor("");
    setTipo("entrada");



    mostrarMensagem(

      "Lançamento salvo com sucesso!"

    );


  }




  function excluirLancamento(index) {


    const novaLista = lancamentos.filter(

      (_, i) => i !== index

    );



    salvarLancamentos(novaLista);



    mostrarMensagem(

      "Lançamento removido!"

    );


  }




  const saldo = lancamentos.reduce(

    (total, item) => {


      if (item.tipo === "entrada") {

        return total + item.valor;

      }


      return total - item.valor;


    },

    0

  );




  return (

    <div>


      <h1>💰 Financeiro</h1>


      <Mensagem texto={mensagem} />



      <div className="card">


        <h2>
          Saldo atual
        </h2>



        <strong>

          R$ {saldo.toFixed(2)}

        </strong>


      </div>




      <br />




      <div className="card">


        <h3>
          Novo lançamento
        </h3>



        <input

          placeholder="Descrição"

          value={descricao}

          onChange={(e) =>
            setDescricao(e.target.value)
          }

        />



        <br /><br />



        <input

          type="number"

          placeholder="Valor"

          value={valor}

          onChange={(e) =>
            setValor(e.target.value)
          }

        />



        <br /><br />



        <select

          value={tipo}

          onChange={(e) =>
            setTipo(e.target.value)
          }

        >

          <option value="entrada">
            Entrada
          </option>


          <option value="saida">
            Saída
          </option>


        </select>



        <br /><br />



        <button

          onClick={adicionarLancamento}

        >

          Adicionar lançamento

        </button>


      </div>

            <h2>
        Lançamentos
      </h2>



      {lancamentos.map((item, index) => (


        <div
          className="card"
          key={index}
        >


          <h3>
            {item.descricao}
          </h3>



          <p>

            {item.tipo === "entrada"

              ? "🟢 Entrada"

              : "🔴 Saída"

            }

          </p>



          <p>

            R$ {item.valor.toFixed(2)}

          </p>



          <button

            onClick={() =>
              excluirLancamento(index)
            }

          >

            🗑️ Excluir

          </button>


        </div>


      ))}



    </div>

  );


}


export default Financeiro;