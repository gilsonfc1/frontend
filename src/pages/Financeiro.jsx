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
      descricao,
      valor: Number(valor),
      tipo
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
    setTipo("entrada");

  }


  const saldo = lancamentos.reduce((total, item) => {

    if (item.tipo === "entrada") {
      return total + item.valor;
    }

    return total - item.valor;

  }, 0);


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

        <h3>Novo lançamento</h3>

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

        <button onClick={adicionarLancamento}>
          Adicionar lançamento
        </button>

      </div>

      <h2>Lançamentos</h2>

      {lancamentos.map((item, index) => (

        <div
          className="card"
          key={index}
        >

          <h3>{item.descricao}</h3>

          <p>
            {item.tipo === "entrada" ? "🟢 Entrada" : "🔴 Saída"}
          </p>

          <p>
            R$ {item.valor.toFixed(2)}
          </p>

        </div>

      ))}

    </div>

  );

}

export default Financeiro;