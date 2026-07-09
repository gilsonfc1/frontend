import { useState } from "react";

function Financeiro() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const [lancamentos, setLancamentos] = useState(() => {
    const dadosSalvos = localStorage.getItem("lancamentos");

    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });


  function adicionarLancamento() {

    if (descricao === "" || valor === "") {
      return;
    }

    const novoLancamento = {
      descricao: descricao,
      valor: Number(valor),
      tipo: tipo
    };


    const novaLista = [
      ...lancamentos,
      novoLancamento
    ];


    setLancamentos(novaLista);

    localStorage.setItem(
      "lancamentos",
      JSON.stringify(novaLista)
    );


    setDescricao("");
    setValor("");

  }


  const saldo = lancamentos.reduce((total, item) => {

    if (item.tipo === "entrada") {
      return total + item.valor;
    }

    return total - item.valor;

  }, 0);


  return (
    <div>

      <h1>Financeiro</h1>

      <h2>
        Saldo: R$ {saldo}
      </h2>


      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <br /><br />


      <input
        placeholder="Valor"
        type="number"
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


      <button onClick={adicionarLancamento}>
        Novo lançamento
      </button>


      <h2>Lançamentos</h2>


      {lancamentos.map((item, index) => (

        <p key={index}>
          {item.descricao} - R$ {item.valor} - {item.tipo}
        </p>

      ))}


    </div>
  );
}

export default Financeiro;