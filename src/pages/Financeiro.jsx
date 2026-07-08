import { useState } from "react";

function Financeiro() {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const [movimentos, setMovimentos] = useState(() => {
    const dados = localStorage.getItem("financeiro");
    return dados ? JSON.parse(dados) : [];
  });


  function adicionarMovimento() {

    if (!descricao || !valor || isNaN(Number(valor.replace(",", ".")))) {
  return;
}
   const novoMovimento = {
  descricao,
  valor: Number(valor.replace(",", ".")),
  tipo
};


    const novaLista = [
      ...movimentos,
      novoMovimento
    ];


    setMovimentos(novaLista);


    localStorage.setItem(
      "financeiro",
      JSON.stringify(novaLista)
    );


    setDescricao("");
    setValor("");

  }


  const entradas = movimentos
  .filter(item => item.tipo.toLowerCase() === "entrada")
  .reduce((total, item) => total + Number(item.valor), 0);


  const despesas = movimentos
    .filter(item => item.tipo === "saida")
    .reduce((total, item) => total + item.valor, 0);


  const saldo = entradas - despesas;


  return (
    <div>

      <h1>💰 Financeiro</h1>


      <h2>
        Saldo: R$ {saldo.toFixed(2)}
      </h2>


      <p>
        Entradas: R$ {entradas.toFixed(2)}
      </p>


      <p>
        Saídas: R$ {despesas.toFixed(2)}
      </p>


      <hr />


      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e)=>setDescricao(e.target.value)}
      />


      <input
        placeholder="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)}
      />


      <select
        value={tipo}
        onChange={(e)=>setTipo(e.target.value)}
      >

        <option value="entrada">
          Entrada
        </option>

        <option value="saida">
          Saída
        </option>

      </select>


      <button onClick={adicionarMovimento}>
        Adicionar
      </button>
<button
  onClick={() => {
    localStorage.removeItem("financeiro");
    setMovimentos([]);
  }}
  style={{
    marginLeft: "10px",
    background: "#dc2626",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "6px"
  }}
>
  Limpar Histórico
</button>

      <h2>
        Histórico
      </h2>


      {movimentos.map((item,index)=>(

        <div key={index}>

          {item.descricao} -
          R$ {item.valor}

          ({item.tipo})

        </div>

      ))}


    </div>
  );
}


export default Financeiro;