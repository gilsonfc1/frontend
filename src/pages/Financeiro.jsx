import { useState } from "react";

function Financeiro() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");
  const [editando, setEditando] = useState(null);


  const [lancamentos, setLancamentos] = useState(() => {

    const dadosSalvos = localStorage.getItem("lancamentos");

    return dadosSalvos ? JSON.parse(dadosSalvos) : [];

  });



  function salvarLancamentos(lista) {

    setLancamentos(lista);

    localStorage.setItem(
      "lancamentos",
      JSON.stringify(lista)
    );

  }



  function adicionarLancamento() {


    if (
      descricao === "" ||
      valor === ""
    ) {
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


    limparFormulario();

  }



  function editarLancamento(index) {

    const item = lancamentos[index];


    setDescricao(item.descricao);
    setValor(item.valor);
    setTipo(item.tipo);

    setEditando(index);

  }



  function atualizarLancamento() {


    const novaLista = lancamentos.map(

      (item, index) => {

        if (index === editando) {

          return {

            descricao,
            valor: Number(valor),
            tipo

          };

        }


        return item;

      }

    );



    salvarLancamentos(novaLista);


    limparFormulario();

  }



  function excluirLancamento(index) {


    const confirmar = window.confirm(
      "Deseja excluir este lançamento?"
    );


    if (!confirmar) {
      return;
    }



    const novaLista = lancamentos.filter(

      (_, i) => i !== index

    );



    salvarLancamentos(novaLista);

  }



  function limparFormulario() {

    setDescricao("");
    setValor("");
    setTipo("entrada");
    setEditando(null);

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



      <div className="card">

        <h2>Saldo atual</h2>

        <strong>
          R$ {saldo.toFixed(2)}
        </strong>

      </div>



      <br />



      <div className="card">


        <h3>

          {editando !== null

            ? "Editar lançamento"

            : "Novo lançamento"

          }

        </h3>



        <input

          placeholder="Descrição"

          value={descricao}

          onChange={(e) => setDescricao(e.target.value)}

        />



        <br /><br />



        <input

          type="number"

          placeholder="Valor"

          value={valor}

          onChange={(e) => setValor(e.target.value)}

        />



        <br /><br />



        <select

          value={tipo}

          onChange={(e) => setTipo(e.target.value)}

        >

          <option value="entrada">
            Entrada
          </option>


          <option value="saida">
            Saída
          </option>


        </select>



        <br /><br />



        {editando !== null ? (

          <button onClick={atualizarLancamento}>

            Salvar alteração

          </button>


        ) : (


          <button onClick={adicionarLancamento}>

            Adicionar lançamento

          </button>


        )}



      </div>




      <h2>Lançamentos</h2>




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

            onClick={() => editarLancamento(index)}

          >

            ✏️ Editar

          </button>



          <button

            onClick={() => excluirLancamento(index)}

          >

            🗑️ Excluir

          </button>



        </div>


      ))}



    </div>

  );

}


export default Financeiro;
